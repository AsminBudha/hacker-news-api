/**
 * Handles API not found.
 *
 * @param {Object} req Request send by user.
 * @param {Object} res Response send by server to user.
 * @param {Object} next
 */
export const notFoundError = (req, res) => {
  return res.status(404).json({
    result:
      'Not FOUND'
  });
}

/**
 * Handles error like server error, bad request and other errors.
 *
 * @param {Object} err Error created in server.
 * @param {Object} req Request send by user.
 * @param {Object} res Response send by server to user.
 * @param {Object} next
 */
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
