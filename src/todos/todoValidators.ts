import { z } from "zod/v4";

export const createTodoSchema = z.object({
	title: z.string().min(1, "Title is required"),
	desc: z.string().optional(),
	status: z.boolean().default(false),
	dueDate: z.iso.datetime({ message: "dueDate must be a valid date" }).optional(),
});
export const updateTodoSchema = createTodoSchema.partial();

export type createTodoInput = z.infer<typeof createTodoSchema>;
export type updateTodoInput = z.infer<typeof updateTodoSchema>;
