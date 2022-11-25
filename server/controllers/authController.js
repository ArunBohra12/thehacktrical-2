import jwt from 'jsonwebtoken'
import catchAsync from './catchAsync.js';
import User from '../models/userModel.js';
import Organisation from '../models/orgModel.js';

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(Date.now() + 172800000),
    httpOnly: true,
  };
  res.cookie('jwt', token, cookieOptions);
  user.password = undefined;
  res.status(statusCode).json({
    status: 'success',
    token,
    user,
  });
};

export const signup = catchAsync(async (req, res) => {
  if (req.body.userType === 'user') {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });
    createSendToken(newUser, 201, res);
  } else if (req.body.userType === 'org') {
    const newUser = await Organisation.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });
    createSendToken(newUser, 201, res);
  }
});

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      status: 'error',
      message: 'Please provide email and password',
    });
  }

  let user;

  if (req.body.userType === 'user') {
    user = await User.findOne({ email }).select('+password');
  } else if (req.body.userType === 'org') {
    user = await Organisation.findOne({ email }).select('+password');
  }

  if (!user || !(await user.correctPassword(password, user.password))) {
    res.status(401).json({
      status: 'error',
      message: 'Incorrect email and password',
    });
  }

  createSendToken(user, 200, res);
});
