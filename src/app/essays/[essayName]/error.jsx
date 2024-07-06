"use client";
export default function ErrorBoundary({ error, reset }) {
	return (
		<>
			<div className="text-red-500">error in /essay/essayName: {error.message}</div>
			<button onClick={reset}>reload essay</button>
		</>
	);
}
