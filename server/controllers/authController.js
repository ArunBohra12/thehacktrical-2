import { jwt } from 'jsonwebtoken';
import catchAsync from './catchAsync';
import User from '../models/userModel';

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

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });
  createSendToken(newUser, 201, res);
});


exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
  
    // 1) Check if email and password exist
    if (!email || !password) {
      res.status(400).json({
        status: 'error',
        message: 'Please provide email and password'
      })
    }
    // 2) Check if user exists && password is correct
    const user = await User.findOne({ email }).select("+password");
  
    if (!user || !(await user.correctPassword(password, user.password))) {
      res.status(401).json({
        status: 'error',
        message: 'Incorrect email and password'
      })
    }
  
    createSendToken(user, 200, res);
  });