export const notFoundError = (req, res, next) => {
  return res.status(404).json({
    result:
      'Not FOUND'
  });
}

export const genericErrorHandler = (err, req, res, next) => {
  let error;
  if (err.name === 'bad') {
    error = {
      code: 300,
      result: 'Bad Request',
      message: JSON.stringify(err.toString())
    }
  }
  else {
    error = {
      code: 500,
      result: 'Internal Server error',
      message: JSON.stringify(err.toString())
    }
  }

  return res.status(error.code).json({ result: error });
}