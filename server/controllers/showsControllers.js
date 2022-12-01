import Shows from '../models/showsModel.js';
import User from '../models/userModel.js';
import { multerImageUpload } from '../utils/multer.js';
import catchAsync from './catchAsync.js';

export const uploadShowImage = multerImageUpload('public/uploads/images', 'show-img').single('photo');

export const createShow = async (req, res) => {
  try {
    const { name, location, date, description, price } = req.body;
    const photo = `${req.protocol}://${req.get('host')}/uploads/images/${req.file.filename}`;

    const showObject = {
      name,
      photo,
      location,
      date,
      description,
      price,
      organisation: req.org._id,
    };

    const show = await Shows.create(showObject);

    res.status(201).json({
      status: 'success',
      data: show,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message,
    });
  }
};

export const getAllShows = async (req, res) => {
  try {
    const shows = await Shows.find({}).populate('organisation');

    res.status(200).json({
      status: 'success',
      data: shows,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message,
    });
  }
};

export const getUpcomingShows = async (req, res) => {
  try {
    const shows = await Shows.find({ date: { $gt: Date.now() } }).populate('organisation');

    res.status(200).json({
      status: 'success',
      data: shows,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message,
    });
  }
};

export const deleteShow = async (req, res) => {
  try {
    const showId = req.params.showId;

    await Shows.findByIdAndDelete(req.params.showId);

    res.status(201).json({});
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message,
    });
  }
};

export const bookShowTicket = catchAsync(async (req, res, next) => {
  const show = await Shows.findById(req.params.showId).select('+bookings');

  if (!show) {
    return next(new Error("Show you are looking for doesn't exist!"));
  }

  const isShowAlreadyCompleted = new Date(show.date).getTime() < Date.now();

  if (isShowAlreadyCompleted) {
    return next(new Error("Can't book your ticket. Show already completed!"));
  }

  if (show.price > req.user.credits) {
    return next(new Error("You don't have enough credits to book this show!"));
  }

  if (show.bookings?.includes(req.user_id)) {
    return next(new Error('Already booked the tour!'));
  }

  // ---------------------------------------------------------------
  // Need to find a better way to update documents - research needed

  // charge credits from user
  const newUserCredits = req.user.credits - show.price;
  const user = await User.findByIdAndUpdate(req.user._id, { credits: newUserCredits });

  // add user to bookings in shows model
  await show.updateOne({ $addToSet: { bookings: req.user._id } });

  res.status(200).json({
    status: 'success',
    data: show,
    user,
  });
});

export const likeAShow = catchAsync(async (req, res, next) => {
  const { showId } = req.params;

  const show = await Shows.findById(showId);

  if (!show) {
    return next(new Error('Show does not exist'));
  }

  const newShow = await Shows.findByIdAndUpdate(showId, { $addToSet: { likes: req.user._id } }, { new: true });

  res.status(200).json({
    status: 'success',
    data: newShow,
  });
});

export const getAllOrgShows = catchAsync(async (req, res, next) => {
  const { orgId } = req.params;
  const allShows = await Shows.find({ organisation: orgId });

  res.status(200).json({
    status: 'success',
    data: allShows,
  });
});

export const getOneShow = catchAsync(async (req, res) => {
  const { showId } = req.params;

  const showDetails = await Shows.findById(showId);

  res.status(200).json({
    status: 'success',
    data: showDetails,
  });
});
