import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectCard({
	title,
	description,
	technologies,
	link,
	image,
}) {
	return (
		<Card className="w-full bg-slate-800 border-slate-700 overflow-hidden">
			<div className="relative w-full h-48">
				<Image
					src={
						image ||
						"/placeholder.svg?height=200&width=400"
					}
					alt={title}
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<CardHeader>
				<CardTitle className="text-xl text-slate-100">
					{title}
				</CardTitle>
				<CardDescription className="text-slate-300">
					{description}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex flex-wrap gap-2 mb-4">
					{technologies.map((tech, index) => (
						<Badge
							key={index}
							variant="secondary"
							className="bg-slate-700 text-slate-200"
						>
							{tech}
						</Badge>
					))}
				</div>
				<Button
					asChild
					variant="secondary"
					className="bg-slate-700 text-slate-100 hover:bg-slate-600"
				>
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
					>
						View Project
					</a>
				</Button>
			</CardContent>
		</Card>
	);
}
