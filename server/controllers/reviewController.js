import Review from '../models/reviewModel.js';
import Shows from '../models/showsModel.js';
import catchAsync from './catchAsync.js';

export const getAllShowReviews = catchAsync(async (req, res) => {
  const { showId } = req.params;
  const reviews = await Review.find({ show: showId });
  const average = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  const reviewObj = {
    averageRating: average ? average : 0,
    reviews,
  };

  res.status(200).json({
    status: 'success',
    data: reviewObj,
  });
});

export const createShowReview = catchAsync(async (req, res, next) => {
  const show = await Shows.findById(req.params.showId);
  const review = await Review.findOne({ user: req.user.id, show: req.params.showId });
  console.log(review);

  const reviewObj = {
    user: req.user._id,
    show: req.params.showId,
    content: req.body.content,
    rating: req.body.rating,
  };

  if (!show) {
    return next(new Error("This show doesn't exist"));
  }

  if (review) {
    return next(new Error("You already have reviewed this show. Can't create another one."));
  }

  // create a new review
  const newReview = await Review.create(reviewObj);

  res.status(200).json({
    status: 'success',
    data: newReview,
  });
});
