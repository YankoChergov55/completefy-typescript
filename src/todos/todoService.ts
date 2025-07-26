import Todo from "./todoSchema.js";
import AppError from "../utils/appError.js";
import { createTodoInput, updateTodoInput } from "./todoValidators.js";

export const createTodo = async (data: createTodoInput) => {
	return await Todo.create(data);
};

export const getTodoById = async (id: string) => {
	const todo = await Todo.findById(id);
	if (!todo) {
		throw new AppError("todo not found", 404);
	}
	return todo;
};

export const updateTodo = async (id: string, data: updateTodoInput) => {
	const updated = await Todo.findByIdAndUpdate(id, data, {
		new: true,
	});

	if (!updated) {
		throw new AppError("todo not found, try with another link", 404);
	}

	return updated;
};

export const deleteTodo = async (id: string) => {
	const deleted = await Todo.findByIdAndDelete(id);

	if (!deleted) {
		throw new AppError("todo not found, try with another link", 404);
	}

	return deleted;
};
