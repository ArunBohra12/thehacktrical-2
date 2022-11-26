const globalErrorHandler = (err, req, res, next) => {
  res.status(500).json({
    status: 'fail',
    message: err.message,
  });
};

export default globalErrorHandler;
