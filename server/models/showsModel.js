import mongoose from 'mongoose';

// TODO:
// need to add a column for reviews, videos, staff

const showsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 4,
      required: [true, 'Please provide the show name'],
      unique: true,
    },
    photo: {
      type: String,
      required: [true, 'Please provide a show thumbnail'],
    },
    location: {
      type: String,
      required: [true, 'Please provide the show location'],
    },
    organisation: {
      type: mongoose.Schema.ObjectId,
      ref: 'Organisation',
      required: true,
    },
    date: {
      type: Date,
      required: [true, 'Please provide a date for the show'],
    },
    description: String,
    likes: {
      type: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    },
    price: {
      type: Number,
      required: [true, 'Please provide the price for the show'],
    },
    bookings: {
      type: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

showsSchema.virtual('totalLikes').get(function () {
  const totalLikes = this.likes?.reduce((acc, el) => acc + 1, 0) ?? 0;
  return totalLikes;
});

const Shows = mongoose.model('Shows', showsSchema);

export default Shows;
