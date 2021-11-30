const errorHandler = (res, error, status) => {
  res.status(status).json({
    message: error ? error : 'error',
    success: false
  })
}

export default errorHandler;