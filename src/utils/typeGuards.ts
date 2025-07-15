import { Error as MongooseError } from "mongoose";

export function hasStatusAndMessage(error: unknown): error is { status: number; message: string } {
	return (
		typeof error === "object" &&
		error !== null &&
		"status" in error &&
		"message" in error &&
		typeof (error as any).status === "number" &&
		typeof (error as any).message === "string"
	);
}

// Type guard to check if error is any kind of MongooseError
export function isMongooseError(error: unknown): error is MongooseError {
	return (
		typeof error === "object" &&
		error !== null &&
		typeof (error as any).name === "string" &&
		(error instanceof MongooseError ||
			(error as any).name === "MongooseError" ||
			(typeof (error as any).message === "string" && (error as any).name.endsWith("Error")))
	);
}
