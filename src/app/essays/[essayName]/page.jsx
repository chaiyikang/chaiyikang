"use client";
export default function Page({ params: { essayName } }) {
	return <div>this is an essay about: {essayName.split("%20").join(" ")}</div>;
}
