import Image from "next/image";
import { Button } from "@nextui-org/button";
import { playfair_display } from "./ui/fonts";

export default function Home() {
	return (
		<div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">
			<h1 className={`${playfair_display.className} text-8xl text-center`}>
				I&apos;m Yi Kang. Feel free to check out my essays and projects.
			</h1>
		</div>
	);
}
