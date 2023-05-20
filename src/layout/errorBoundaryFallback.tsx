import { FallbackProps } from "react-error-boundary";

export function errorBoundaryFallback({
	error,
	resetErrorBoundary,
}: FallbackProps) {
	// Call resetErrorBoundary() to reset the error boundary and retry the render.
	return (
		<div role="alert">
			<b>Something went wrong:</b>
			<pre style={{ color: "red" }}>ERROR: "{error.message}"</pre>
		</div>
	);
}
