import { Request, Response, ErrorRequestHandler } from "express";
import logger from "../utils/logger.js";
import { hasStatusAndMessage, isMongooseError } from "../utils/typeGuards.js";

const errorHandler: ErrorRequestHandler = (err, req: Request, res: Response, next) => {
	logger.error(err);

	let statusCode = 500;
	let message = "Something went wrong";
	let details;

	if (hasStatusAndMessage(err)) {
		statusCode = err.status;
		message = err.message;
		details = (err as any).details;
	} else if (isMongooseError(err)) {
		statusCode = 400;
		message = `MongoDB error: ${err.message}`;
	}

	return res.status(statusCode).json({
		success: false,
		message,
		statusCode,
		...(details && { details }),
	});
};

export default errorHandler;
