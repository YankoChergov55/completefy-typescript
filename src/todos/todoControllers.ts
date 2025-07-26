import Todo from "./todoSchema.js";
import { Request, Response, NextFunction } from "express";
import { ITodo } from "../types/Itodo.js";
import { ApiResponse } from "../types/apiResponse.js";
import { HydratedDocument } from "mongoose";
import { createTodoInput, updateTodoInput } from "./todoValidators.js";
import * as todoService from "./todoService.js";

//create a todo controller
export const createTodo = async (req: Request<{}, {}, createTodoInput>, res: Response<ApiResponse<HydratedDocument<ITodo>>>, next: NextFunction) => {
	try {
		const newTodo = req.body;

		const createdTodo = await todoService.createTodo(newTodo);

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

		const foundTodo = await todoService.getTodoById(id);

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
export const updateTodo = async (req: Request<{ id: string }, {}, updateTodoInput>, res: Response<ApiResponse<ITodo>>, next: NextFunction) => {
	try {
		const id = req.params.id;
		const update = req.body;

		const updatedTodo = await todoService.updateTodo(id, update);

		res.status(200).json({
			status: 200,
			success: true,
			message: "updated a todo",
			data: updatedTodo,
		});
	} catch (error) {
		next(error);
	}
};

//delete a todo
export const deleteTodo = async (req: Request<{ id: string }>, res: Response<ApiResponse<ITodo>>, next: NextFunction) => {
	try {
		const id = req.params.id;

		const deletedTodo = await todoService.deleteTodo(id);

		res.status(204).json({
			status: 204,
			success: true,
			message: "deleted a todo",
			data: deletedTodo,
		});
	} catch (error) {
		next(error);
	}
};
