import { Router } from "express";
import { createTodo, deleteTodo, getAllTodos, getSingleTodo, updateTodo } from "./todoControllers.js";
import { createTodoSchema, updateTodoSchema } from "./todoValidators.js";
import validateRequest from "../middleware/validateRequest.js";

const todoRouter = Router();

// create a todo
todoRouter.post("/", validateRequest(createTodoSchema), createTodo);

// get all todos
todoRouter.get("/", getAllTodos);

// get a todo
todoRouter.get("/:id", getSingleTodo);

// update a todo
todoRouter.put("/:id", validateRequest(updateTodoSchema), updateTodo);

// delete a todo
todoRouter.delete("/:id", deleteTodo);

export default todoRouter;
