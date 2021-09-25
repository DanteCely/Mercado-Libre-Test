const sendFailedResponse = (res, errorResponse) => {
  const {
    message = 'Unexpected error. Check the logs',
    error = 'unexpected_error',
    status = 500,
    cause = [],
  } = errorResponse;

  res.status(status).json({
    ok: false,
    error: {
      message,
      error,
      status,
      cause,
    },
  });
};

const checkErrorAndThrow = (response) => {
  const responses = Array.isArray(response) ? response : [response];

  for (const response of responses) {
    if (response?.error) {
      throw response;
    }
  }
};

module.exports = {
  sendFailedResponse,
  checkErrorAndThrow,
};
