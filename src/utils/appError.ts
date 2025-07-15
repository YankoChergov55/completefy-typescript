export default class AppError extends Error {
	public status: number;
	public isOperational: boolean;

	constructor(message: string = "", status: number = 500) {
		super(message);
		this.status = status;
		Error.captureStackTrace(this, AppError);
		this.isOperational = true;
	}
}
