import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Title from "@/app/(essays)/essay_components/title";
import Heading from "@/app/(essays)/essay_components/heading";
import Paragraph from "@/app/(essays)/essay_components/paragraph";
import Quote from "@/app/(essays)/essay_components/quote";
import Backhome from "@/app/(essays)/essay_components/backhome";

export default function EssayPage() {
	return (
		<>
			<Header />
			<main className="container mx-auto px-4 py-8">
				<article className="prose prose-invert lg:prose-xl mx-auto">
					<Title></Title>
					<Paragraph></Paragraph>
					<div className="space-y-4 text-slate-200">
						{/* essay goes here */}
					</div>
				</article>
				<Backhome />
			</main>
			<Footer />
		</>
	);
}
