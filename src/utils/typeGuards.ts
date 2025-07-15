export function hasStatusAndMessage(error: unknown): error is { status: number; message: string } {
	return (
		typeof error === "object" &&
		error !== null &&
		"status" in error &&
		"message" in error &&
		typeof (error as any).status === "number" &&
		typeof (error as any).message === "string"
	);
}
