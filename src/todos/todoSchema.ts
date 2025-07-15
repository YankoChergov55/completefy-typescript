import { Schema, model } from "mongoose";
import { ITodo } from "../types/Itodo.js";

const todoSchema: Schema<ITodo> = new Schema(
	{
		title: { type: String, required: true },
		desc: { type: String },
		status: { type: Boolean, default: false },
		dueDate: { type: Date, default: Date.now },
	},
	{ timestamps: true, collection: "Todos" },
);

const Todo = model<ITodo>("Todo", todoSchema);

export default Todo;
