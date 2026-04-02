const asyncHandler = (hanlderFunc) => {
  return (req, res, next) => {
    Promise.resolve(hanlderFunc(req, res)).catch((err) => {
      next(err);
    });
  };
};

export { asyncHandler };
