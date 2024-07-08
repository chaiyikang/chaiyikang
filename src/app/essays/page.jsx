import Link from "next/link";

const essays = ["The Tortoise and The Hare", "2", "3", "4", "5"];

export default function Page() {
	return (
		<>
			<ul>
				{essays.map((essay) => (
					<li key={essay} className="text-xl mb-4">
						<Link href={`/essays/${essay}`}>{essay}</Link>
					</li>
				))}
			</ul>
		</>
	);
}
