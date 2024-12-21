import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import EssayCard from "@/components/EssayCard";

const projects = [
	{
		title: "Chairdoro",
		description:
			"Chairdoro. An aesthetic pomodoro timer. Complete with a to-do list, and statistics tracking integrated with tasks.",
		technologies: ["React", "Tailwind CSS", "Supabase"],
		link: "https://chairdoro.netlify.app/",
		image: "/chairdoro.png",
	},
];

const essays = [
	{
		title: "Growth Mindset",
		description:
			"The single most powerful thing I have learnt in my life.",
		link: "/growth_mindset",
	},
];

export default function Home() {
	return (
		<>
			<Header />
			<main className="container mx-auto px-4">
				<section id="hero" className="my-20 text-center">
					<h1 className="text-5xl font-bold mb-6 text-slate-100">
						Say hello to me, world!
					</h1>
					<p className="text-xl max-w-2xl mx-auto text-slate-300">
						I like solving interesting and important
						problems
					</p>
				</section>

				<div className="flex flex-col md:flex-row gap-12">
					<section id="projects" className="flex-1">
						<h2 className="text-3xl font-bold mb-6 text-slate-100">
							Projects
						</h2>
						<div className="space-y-6">
							{projects.map((project, index) => (
								<ProjectCard
									key={index}
									{...project}
								/>
							))}
						</div>
					</section>

					<section id="essays" className="flex-1">
						<h2 className="text-3xl font-bold mb-6 text-slate-100">
							Essays
						</h2>
						<div className="space-y-6">
							{essays.map((essay, index) => (
								<EssayCard key={index} {...essay} />
							))}
						</div>
					</section>
				</div>
			</main>
			<Footer />
		</>
	);
}
