import { Router } from "express";
import { createTodo, deleteTodo, getAllTodos, getSingleTodo, updateTodo } from "./todoControllers.js";

const todoRouter = Router();

// create a todo
todoRouter.post("/", createTodo);

// get all todos
todoRouter.get("/", getAllTodos);

// get a todo
todoRouter.get("/:id", getSingleTodo);

// update a todo
todoRouter.put("/:id", updateTodo);

// delete a todo
todoRouter.delete("/:id", deleteTodo);

export default todoRouter;
