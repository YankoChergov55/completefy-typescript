import { Request, Response, ErrorRequestHandler } from "express";
import logger from "../utils/logger.js";
import { hasStatusAndMessage } from "../utils/typeGuards.js";

const errorHandler: ErrorRequestHandler = (err, req: Request, res: Response) => {
	logger.error(err);

	let statusCode;
	let message;

	if (hasStatusAndMessage(err)) {
		statusCode = err.status;
		message = err.message;
	} else {
		statusCode = 500;
		message = "Something went wrong";
	}

	const errResponse = {
		success: false,
		message,
		statusCode,
	};

	return res.status(statusCode).json(errResponse);
};

export default errorHandler;
