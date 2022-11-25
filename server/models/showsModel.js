// showName, credits,  location, showDate, showTime, description, staff[{}], ticketPrice, like, reviews

import mongoose from 'mongoose';

// TODO:
// need to add a column for reviews, videos, staff

const showsSchema = mongoose.Schema({
  name: {
    type: String,
    minlength: 4,
    required: [true, 'Please provide the show name'],
    unique: true,
  },
  location: {
    type: String,
    required: [true, 'Please provide the show location'],
  },
  date: {
    type: Date,
    required: [true, 'Please provide a date for the show'],
  },
  description: String,
  likes: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'Please provide the price for the show'],
  },
});

const Shows = mongoose.model('Shows', showsSchema);

export default Shows;
