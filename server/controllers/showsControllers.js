import Shows from '../models/showsModel.js';

export const createShow = async (req, res) => {
  const { name, location, date, description, price } = req.body;

  const showObject = {
    name,
    location,
    date,
    description,
    price,
  };

  try {
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
    const shows = await Shows.find({});

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
    const shows = await Shows.find({ date: { $gt: Date.now() } });

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
