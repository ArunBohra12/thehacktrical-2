import mongoose from 'mongoose';

// TODO:
// Need to add review to the schema
const videoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a video name.'],
    minlength: [4, 'Video name should be more than 3 characters'],
  },
  thumbnail: {
    type: String,
    required: [true, 'Please provide a video thumbnail'],
  },
  video: {
    type: String,
    required: [true, 'Please provide a video to upload'],
  },
  organisation: {
    type: mongoose.Schema.ObjectId,
    ref: 'Organisation',
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: [true, 'Please provide a stream price for the video'],
  },
  staff: {
    type: [{ name: String, role: String }],
  },
  like: {
    type: Number,
    default: 0,
  },
});

const Video = mongoose.model('Video', videoSchema);

export default Video;
