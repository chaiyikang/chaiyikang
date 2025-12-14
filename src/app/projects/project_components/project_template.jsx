import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Title from "@/app/(projects)/project_components/title";
import Heading from "@/app/(projects)/project_components/heading";
import Paragraph from "@/app/(projects)/project_components/paragraph";
import Quote from "@/app/(projects)/project_components/quote";
import Backhome from "@/app/(projects)/project_components/backhome";

export default function ProjectPage() {
	return (
		<>
			<Header />
			<main className="container mx-auto px-4 py-8">
				<article className="prose prose-invert lg:prose-xl mx-auto">
					<Title></Title>
					<Paragraph></Paragraph>
					<div className="space-y-4 text-slate-200">{/* project goes here */}</div>
				</article>
				<Backhome />
			</main>
			<Footer />
		</>
	);
}
