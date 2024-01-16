class CustomError extends Error {
    constructor(message, statusCode, errorCode) {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode || 500;
        this.errorCode = errorCode || 500;
        Error.captureStackTrace(this, this.constructor);
    }
}

class DbError extends CustomError {
    constructor(errorCode, message = 'DB connection error') {
        super(500, message, errorCode);
    }
}

class ApiError extends CustomError {
    constructor(statusCode, message = 'API failed') {
        super(statusCode, message, 500);
    }
}

module.exports = {
    CustomError,
    DbError,
    ApiError
};
