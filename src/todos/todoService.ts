import Todo from "./todoSchema.js";
import AppError from "../utils/appError.js";
import { createTodoInput, updateTodoInput } from "./todoValidators.js";
import { TodoFilter, QueryOptions } from "../types/todoFilter.js";

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

export const getTodos = async (filter: TodoFilter = {}, options: QueryOptions = {}) => {
	const page = options.page || 1;
	const limit = options.limit || 10;
	const skip = (page - 1) * limit;

	let sort: Record<string, 1 | -1> = {};

	if (options.sort) {
		const [field, order] = options.sort.split(":");
		sort[field] = order === "desc" ? -1 : 1;
	}

	const query = Todo.find(filter).sort(sort).skip(skip).limit(limit);

	const [results, total] = await Promise.all([query, Todo.countDocuments(filter)]);

	return {
		results,
		total,
		page,
		limit,
		totalPages: Math.ceil(total / limit),
	};
};
