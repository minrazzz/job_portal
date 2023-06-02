class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    console.log("ErrorResponse Created:", this.statusCode, this.message);
  }
}

module.exports = ErrorResponse;
