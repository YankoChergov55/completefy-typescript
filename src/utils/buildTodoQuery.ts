import { TodoFilter, QueryOptions, TodoQueryParams } from "../types/todoFilter.js";

// Helper to check valid date strings
function isValidDateString(str: string): boolean {
	return !isNaN(Date.parse(str));
}

export function buildTodoQuery(query: TodoQueryParams): { filter: TodoFilter; options: QueryOptions } {
	const filter: TodoFilter = {};
	let page = 1;
	let limit = 10;
	let sort: string | undefined;

	//filtering by status
	if (query.status !== undefined) {
		filter.status = query.status === "true";
	}

	//title search
	if (query.title && query.title.length > 0) {
		filter.title = { $regex: query.title, $options: "i" };
	}

	//dueDate search
	const dueDateRange: { $gte?: Date; $lte?: Date } = {};

	if (query.dueDateFrom && isValidDateString(query.dueDateFrom)) {
		dueDateRange.$gte = new Date(query.dueDateFrom);
	}

	if (query.dueDateTo && isValidDateString(query.dueDateTo)) {
		dueDateRange.$lte = new Date(query.dueDateTo);
	}

	if (dueDateRange.$gte || dueDateRange.$lte) {
		filter.dueDate = dueDateRange;
	}

	//pagination
	if (query.page) {
		const p = parseInt(query.page, 10);
		if (!isNaN(p) && p > 0) page = p;
	}

	if (query.limit) {
		const l = parseInt(query.limit, 10);
		if (!isNaN(l) && l < 100) limit = l;
	}

	//sorting
	if (query.sort) {
		sort = query.sort;
	}

	return {
		filter,
		options: { page, limit, sort },
	};
}
