import express, { Application, Request, Response } from "express";
import appConfig from "./config/appConfig.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import httpLogger from "./middleware/httpLogger.js";
import errorHandler from "./middleware/errorHandler.js";
import connectDB from "./config/db.js";
import logger from "./utils/logger.js";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(httpLogger);

app.get("/", (req: Request, res: Response) => {
	res.status(200).json({
		status: 200,
		success: true,
		message: "welcome to the ts api",
	});
});

app.use(errorHandler);

app.listen(appConfig.port, () => {
	connectDB();
	logger.info(`server running on port ${appConfig.port}`);
});
