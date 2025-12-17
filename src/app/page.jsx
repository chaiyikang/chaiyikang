import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import EssayCard from "@/components/EssayCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github } from "lucide-react";

const projects = [
	{
		title: "Unsupervised learning for mapping of spatial gene expression data",
		description: "In this exploratory project, I used a machine learning pipeline to analyse 10x Visium sample data of mouse brain section",
		technologies: ["Python", "scanpy", "squipy", "matplotlib"],
		link: "/projects/visium",
		image: "/visium/image.png",
	},

	{
		title: "Chairdoro",
		description: "Chairdoro. An aesthetic pomodoro timer. Complete with a to-do list, and statistics tracking integrated with tasks.",
		technologies: ["React", "Tailwind CSS", "Supabase"],
		link: "https://chairdoro.netlify.app/",
		image: "/chairdoro.jpeg",
		newTab: true,
	},
];

const essays = [
	{
		title: "Growth Mindset",
		description: "The single most powerful thing I have learnt in my life.",
		link: "/growth_mindset",
	},
	{
		title: "I don't know how to study",
		description: "Even though I have good grades",
		link: "/studying",
	},
	// {
	// 	title: "Awaken the Giant Within",
	// 	description: `A detailed review of Tony Robbins' "Awaken the Giant Within"`,
	// 	link: "/awaken-the-giant",
	// },
].reverse();

export default function Home() {
	return (
		<>
			<Header />
			<main className="container mx-auto px-4">
				<section id="hero" className="my-20 text-center">
					<h1 className="text-5xl font-bold mb-6 text-slate-100">Say hello to me, world!</h1>
					<p className="text-xl max-w-2xl mx-auto text-slate-300">I like solving interesting and important problems</p>
				</section>

				<div className="flex flex-col md:flex-row gap-12">
					<section id="projects" className="flex-1">
						<h2 className="text-3xl font-bold mb-6 text-slate-100">Projects</h2>
						<div className="space-y-6">
							{projects.map((project, index) => (
								<ProjectCard key={index} {...project} />
							))}
						</div>
					</section>

					<section id="essays" className="flex-1">
						<h2 className="text-3xl font-bold mb-6 text-slate-100">Essays</h2>
						<div className="space-y-6">
							{essays.map((essay, index) => (
								<EssayCard key={index} {...essay} />
							))}
						</div>
					</section>
				</div>
				<section id="github" className="my-16 text-center">
					<h2 className="text-3xl font-bold mb-6 text-slate-100">Check Out My GitHub</h2>
					<p className="text-xl mb-8 text-slate-300">Explore more of my projects and contributions on GitHub.</p>
					<Button asChild variant="outline" size="lg" className="bg-slate-800 text-slate-100 hover:bg-slate-700">
						<Link href="https://github.com/chaiyikang" target="_blank" rel="noopener noreferrer">
							<Github className="mr-2 h-5 w-5" />
							Visit My GitHub Profile
						</Link>
					</Button>
				</section>
			</main>
			<Footer />
		</>
	);
}
