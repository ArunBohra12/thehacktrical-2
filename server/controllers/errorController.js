const globalErrorHandler = (err, req, res, next) => {
  const errObj = {
    status: 'fail',
    message: err.message,
  };

  if (process.env.NODE_ENV === 'development') {
    errObj.stack = err.stack;
  }

  res.status(500).json(errObj);
};

export default globalErrorHandler;
