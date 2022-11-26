import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  show: {
    type: mongoose.Schema.ObjectId,
    ref: 'Shows',
    required: true,
  },
  content: {
    type: String,
    required: [true, 'Please provide the review'],
  },
  rating: {
    type: Number,
    default: 4,
    enum: [1, 2, 3, 4, 5],
  },
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;
