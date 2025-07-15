import { Document } from "mongoose";

export interface ITodo {
	title: string;
	desc: string;
	status: boolean;
	dueDate?: Date;
}
