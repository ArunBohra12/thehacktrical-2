import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const orgSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!'],
    trim: true,
    maxlength: [40, 'A tour name must have less or equal then 40 characters'],
    minlength: [2, 'A tour name must have more or equal then 10 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: {
    type: String,
    default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false,
  },
  type: {
    type: String,
    default: 'org',
  },
  orgVision: {
    type: String,
    default: '',
  },
});

orgSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  next();
});

orgSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const Organisation = mongoose.model('Organisation', orgSchema);

export default Organisation;
