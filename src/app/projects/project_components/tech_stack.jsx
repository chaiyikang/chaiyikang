import Image from "next/image";
import Heading from "./heading";

const tech = [
	{
		name: "Python 3.9",
		logo: "/tech_logos/python.svg",
	},
	{
		name: "Scanpy",
		logo: "/tech_logos/scanpy.png",
	},
	{
		name: "Squidpy",
		logo: "/tech_logos/squidpy.png",
	},
	{
		name: "Matplotlib",
		logo: "/tech_logos/matplotlib.svg",
	},
];

export default function TechStack() {
	return (
		<div>
			<Heading>Tech Stack</Heading>
			<div className="flex flex-wrap justify-center gap-8 py-8">
				{tech.map(t => (
					<div key={t.name} className="flex flex-col items-center gap-2">
						<div className="relative h-20 w-20">
							<Image src={t.logo} alt={t.name} layout="fill" objectFit="contain" />
						</div>
						<p className="text-center">{t.name}</p>
					</div>
				))}
			</div>
		</div>
	);
}
