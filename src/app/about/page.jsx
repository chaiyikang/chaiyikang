import Header from "@/components/Header";

export default function About() {
	const essays = [
		{
			title: "Essay 1",
			description: "A brief description of essay 1",
			link: "/essays/essay1",
		},
		{
			title: "Essay 2",
			description: "A brief description of essay 2",
			link: "/essays/essay2",
		},
	];

	return (
		<>
			<Header />
			<h1>Who the hell cares an about page? Nerd.</h1>
		</>
	);
}
