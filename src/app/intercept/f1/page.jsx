import Link from "next/link";

export default function page() {
	return (
		<div>
			f1 page <Link href="/intercept/f1/f2">go to f2</Link>
		</div>
	);
}

// intercepting routes
