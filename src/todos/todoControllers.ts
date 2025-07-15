import Todo from "./todoSchema.js";
import { Request, Response, NextFunction } from "express";
import AppError from "../utils/appError.js";
import { ITodo } from "../types/Itodo.js";
import { ApiResponse } from "../types/apiResponse.js";
import { HydratedDocument } from "mongoose";

//create a todo controller
export const createTodo = async (req: Request<{}, {}, ITodo>, res: Response<ApiResponse<HydratedDocument<ITodo>>>, next: NextFunction) => {
	try {
		const newTodo = req.body;

		const createdTodo = await Todo.create(newTodo);

		res.status(200).json({
			status: 200,
			success: true,
			message: "todo created",
			data: createdTodo,
		});
	} catch (error) {
		next(error);
	}
};

//get todos
export const getAllTodos = async (req: Request, res: Response<ApiResponse<ITodo[]>>, next: NextFunction) => {
	try {
		const todos = await Todo.find({});

		res.status(200).json({
			status: 200,
			success: true,
			message: "list of todos",
			data: todos,
		});
	} catch (error) {
		next(error);
	}
};

//get a single todo
export const getSingleTodo = async (req: Request<{ id: string }>, res: Response<ApiResponse<HydratedDocument<ITodo>>>, next: NextFunction) => {
	try {
		const id = req.params.id;

		const foundTodo = await Todo.findById(id);

		if (!foundTodo) {
			throw new AppError("todo not found, try with another link", 404);
		}

		res.status(200).json({
			status: 200,
			success: true,
			message: "found a todo",
			data: foundTodo,
		});
	} catch (error) {
		next(error);
	}
};

//update a todo
export const updateTodo = async (req: Request<{ id: string }>, res: Response<ApiResponse<ITodo>>, next: NextFunction) => {
	try {
		const id = req.params.id;
		const update = req.body;

		const foundTodo = await Todo.findById(id);

		if (!foundTodo) {
			throw new AppError("todo not found, try with another link", 404);
		}

		const updatedTodo = await Todo.findByIdAndUpdate(id, update, {
			new: true,
		});

		res.status(200).json({
			status: 200,
			success: true,
			message: "updated a todo",
			data: updatedTodo,
		} as ApiResponse<ITodo>);
	} catch (error) {
		next(error);
	}
};

//delete a todo
export const deleteTodo = async (req: Request<{ id: string }>, res: Response<ApiResponse<ITodo>>, next: NextFunction) => {
	try {
		const id = req.params.id;
		const foundTodo = await Todo.findById(id);
		if (!foundTodo) {
			throw new AppError("todo not found, try with another link", 404);
		}

		const deletedTodo = await Todo.findByIdAndDelete(id);
		res.status(200).json({
			status: 200,
			success: true,
			message: "deleted a todo",
			data: deletedTodo,
		} as ApiResponse<ITodo>);
	} catch (error) {
		next(error);
	}
};
