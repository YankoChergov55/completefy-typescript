import express, { Application, Request, Response } from "express";
import appConfig from "./config/appConfig.js";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
	res.status(200).json({
		status: 200,
		success: true,
		message: "welcome to the ts api",
	});
});

app.listen(appConfig.port, () => {
	console.log(`server running on port ${appConfig.port}`);
});
