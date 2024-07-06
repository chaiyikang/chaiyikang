import Link from "next/link";

export default function page() {
	return (
		<>
			<div>Project 1 Content</div>
			<Link href="/projects/details">Details</Link>
		</>
	);
}
