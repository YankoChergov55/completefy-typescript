import INappConfig from "../types/appConfig.js";
import dotenv from "dotenv";

dotenv.config({
	quiet: true,
});

const appConfig: INappConfig = {
	port: process.env.PORT ? Number(process.env.PORT) : 3000,
	nodeEnv: String(process.env.NODE_ENV) || "development",
	mongoDB: String(process.env.MONGODB_URI) || "",
};

export default appConfig;
