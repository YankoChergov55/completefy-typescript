import { Document } from "mongoose";

export interface ITodo extends Document {
	title: string;
	desc: string;
	status: boolean;
	dueDate?: Date;
}
