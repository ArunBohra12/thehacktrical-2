export const handleAsyncError = err => {
  return err.response?.data?.message || 'Something went very wrong! Please try again';
};
