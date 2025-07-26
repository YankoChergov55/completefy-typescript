export interface TodoFilter {
	title?: { $regex: string; $options: string };
	desc?: string;
	status?: boolean;
	dueDate?: Date | { $gte?: Date; $lte?: Date };
}

export interface QueryOptions {
	page?: number;
	limit?: number;
	sort?: string;
}

// These match the allowed query string parameters for your endpoint.
export interface TodoQueryParams {
	status?: string; // "true" or "false" as string
	title?: string; // for fuzzy matching
	dueDateFrom?: string; // ISO date string
	dueDateTo?: string; // ISO date string
	page?: string; // numbers as string (e.g., "1")
	limit?: string; // numbers as string (e.g., "10")
	sort?: string; // e.g., "dueDate:desc"
	// Add other allowed params as your API grows
}
