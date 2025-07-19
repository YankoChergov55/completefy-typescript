// utils/appError.ts
export default class AppError extends Error {
	public status: number;
	public isOperational: boolean;
	public details?: unknown;

	constructor(message: string = "", status: number = 500, details?: unknown) {
		super(message);
		this.status = status;
		this.details = details;
		Error.captureStackTrace(this, AppError);
		this.isOperational = true;
	}
}
