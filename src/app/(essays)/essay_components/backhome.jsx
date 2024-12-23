import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Backhome() {
	return (
		<div className="mt-12 text-center">
			<Button
				asChild
				variant="secondary"
				className="bg-slate-700 text-slate-100 hover:bg-slate-600"
			>
				<Link href="/">Back to mainpage</Link>
			</Button>
		</div>
	);
}
