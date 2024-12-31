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
					<Title>Awaken the Giant Within</Title>
					<Paragraph>Written on 28 December 2024</Paragraph>
					<div className="space-y-4 text-slate-200">
						<Heading>Principles of Change</Heading>
						<Paragraph>
							Robbins presents the idea that profound
							change does not necessarily take a long
							time. He argues that people commonly think
							this way becuase of two reasons:
						</Paragraph>
						<Paragraph>
							1. Instead of working on the root
							motivations behind their actions, people
							attempt to force change based on pure
							willpower. As a result, they struggle for
							a long time.
						</Paragraph>
						<Paragraph>
							2. People think that if change were
							possible quickly, then it must not have
							been a real issue, or the change made is
							not profound (e.g change made is fleeting)
						</Paragraph>
						<Paragraph>
							According to Robbins, with the proper
							techniques, change can be instantenously
							initiated, and sustained provided there is
							sustained effort.
						</Paragraph>
						<Paragraph>
							I think the important idea here, is that
							if you are finding it hard to make a
							change you desire, it's likely because the
							change is predicated on pure willpower,
							which is not a feasible way to change. The
							key, I've learnt, is behind root
							motivations, or more simply your "why".
							Most commonly, when people want to make a
							change, it involves some kind of habit.
							One easily sees a common theme among the
							glut of books on how to change your
							habits: it involves the underlying
							psychology behind habits. But it appears
							to me that the ideas presented in these
							books converge on a simple idea that your
							"why" needs to strong enough for a habit
							to take hold.
						</Paragraph>
						<Paragraph>
							With the new year coming, almost everyone
							sets meaningless new years resolutions.{" "}
						</Paragraph>
					</div>
				</article>
				<Backhome />
			</main>
			<Footer />
		</>
	);
}
