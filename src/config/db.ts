import mongoose from "mongoose";
import appConfig from "./appConfig.js";
import logger from "../utils/logger.js";

const connectDB = async (): Promise<void> => {
	try {
		await mongoose.connect(appConfig.mongoDB);
		logger.info("MongoDB connected");
	} catch (error) {
		logger.error(error);
	}
};

export default connectDB;
