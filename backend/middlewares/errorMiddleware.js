class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode || 500;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  let errorMessage = message;
  if (err.errors) {
    errorMessage = Object.values(err.errors)
      .map((error) => error.message)
      .join(" ");
  }

  console.error(err.stack);

  return res.status(statusCode).json({
    success: false,
    message: errorMessage,
  });
};

export default ErrorHandler;
