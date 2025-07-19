import { Request, Response, NextFunction } from "express";
import { ZodType, ZodError } from "zod";
import AppError from "../utils/appError.js";

const validateRequest =
	<T>(schema: ZodType<T>) =>
	(req: Request, res: Response, next: NextFunction) => {
		try {
			(req as Request & { validatedData: T }).validatedData = schema.parse(req.body);
			next();
		} catch (err) {
			if (err instanceof ZodError) {
				const issues = err.issues.map((issue) => ({
					path: issue.path.join("."),
					message: issue.message,
				}));

				return next(new AppError("Validation failed", 400, issues));
			}

			return next(new AppError("Unknown validation error", 400));
		}
	};

export default validateRequest;
