"use client";
export default function ErrorBoundary({ error }) {
	return <div>error page in /essays: {error.message} </div>;
}
