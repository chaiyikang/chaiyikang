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
						<Title>I don't know how to study.</Title>
						<Paragraph>
							Going into my first semester of
							Univeristy, I realised I had no idea how
							to study. In JC, A levels was a 2-year
							long war. My approach towards learning
							content was geared towards long-term
							retention. I had learnt that simply
							re-reading notes is a horrible way to
							remember information, and I realised that
							learning, then forgetting and having to
							re-learn seemed like a pretty stupid
							strategy.
						</Paragraph>
						<Paragraph>
							I used Anki flashcards for vritually
							everything I could. As long as I thought I
							would need to remember it in the exams, I
							made a flashcard for it. And while doing
							so, I really did treat myself like a
							regurgitation machine, evident in the
							horrible flashcards I made. Especially in
							Biology, some flashcards were essentially
							verbiage from lecture notes splatted onto
							a flashcard.
						</Paragraph>
						<Heading>Do or die</Heading>
						<Paragraph>
							I'm ignorant of the situation in other
							JCs, but in Hwa Chong where the population
							is generally more academically inclined,
							my mindset and what I believe many of my
							peers' mindset was, was to do absolutely
							everything in one's power to get the
							absolute best results possible. After all,
							whether a student had already decided on
							what they wanted to pursue in university
							or not, it wouldn't hurt to get better
							grades than what is required.
						</Paragraph>
						<Paragraph>
							Because the putative next step is
							university, it seemed like there was a
							direct consequence to one's grades, vis a
							vis a lower chance of getting into the
							course of study one desired. So everyone
							was jockeying for the best grades
							possible.
						</Paragraph>
						<Heading>Gaming the system</Heading>
						<Paragraph>
							In Singapore, students don't learn math,
							they learn to take math exams. Students
							don't learn how to do experiments in the
							laboratory, they learn to take practical
							assessments. Woe betide a student who
							wants to learn multivariable calculus
							instead of reading news articles. He is
							punished, because while his understanding
							of multivariable calculus will not show up
							in his transcript, his D grade in General
							Paper will. But if students could get
							extra credit in exams for singing the
							national anthem backwards, you will sure
							as hell see most students suddenly become
							excellent backwards singers.
						</Paragraph>
						<Paragraph>
							My A level exam year had the benefit of
							the removal of the Common Last Topic for
							most subjects. I think you can guess
							whether these topics were completely
							ignored by students or not.
						</Paragraph>
						<Paragraph>
							Funny enough, I realised the same pattern
							while getting my driver's license. Parking
							is one of the components of the driving
							test, and the way I was taught to park is
							ridiculously, through MEMORISATION. After
							getting my license, I did not know how to
							park, because the spots I needed to park
							in did not have the exact same kind of
							kerb with the exact same kind of marking
							with the exact same crack on the road.
							Again, I didn't learn how to park, I
							learnt how to pass the parking component
							of the driving test.
						</Paragraph>
						<Paragraph>
							To us, tests are just a game we want to
							win. If a student onerously gains proper
							understanding of a concept, chances are
							that understanding the concept just
							happens to coincide with getting more
							marks in the exam. That is why there is
							still some semblance of actually learning
							the subject. But the truth is that
							students are almost exclusively learning,
							and being taught, to take exams.
						</Paragraph>
						<Heading>University is different</Heading>
						<Paragraph>
							This essay is not about studying for A
							levels. But the point I've been trying to
							make is that I was trained to go all out
							and game the system the best I can.
						</Paragraph>
						<Paragraph>
							To me, exams in university are not do or
							die. Firstly, the grade for one's entire
							university is divided into individual
							years, which are divided into 2 semesters,
							which are divided into the individual
							course assessment components. So no one
							exam a university student sits for is all
							or nothing. This is a stark contrast to A
							levels, where that one exam would
							determine the fruits of the entire 2 years
							(You could even see it as 12, from
							secondary to JC.) of education.
						</Paragraph>
						<Paragraph>
							In addition, the consequences of one's
							grades becomes more unclear now that there
							is no specific predetermined next step.
							You could Zuckerberg out of college into a
							billionaire or graduate with honours and
							lead a miserable life with a job you hate
							or graduate with the bare minimum and live
							a idyllic life as a rice farmer in
							Vietnam.
						</Paragraph>
						<Paragraph>
							And so, without going into the details of
							my career aspirations, grades are not my
							utmost concern, and so univeristy exams
							are not really a system I am interested in
							gaming.
						</Paragraph>
						<Paragraph>
							Even though I had some inkling of this
							notion at the back of my mind, once my
							first semester started, I honestly became
							inundated with workload, and unfortunately
							reverted to the default mindset: do or
							die, game the system, optimise grades.{" "}
						</Paragraph>
						<Paragraph>
							One example of this was how I opted to
							study for my Molecular Genetics course.
							The 60% of the course grade was split
							across 3 CAs, all of which were open-book.
							"Game the system, optimise grades", so I
							didn't bother committing any of it to
							memory, or making myself understand the
							content in a way that I could recall more
							easily. I just fouced on making notes on
							my laptop so I could use them in the CA.
						</Paragraph>
						<Paragraph>
							Ironically, the final exam was revealed to
							be closed book after the second CA. So
							actually what I thought was optimising
							grades actually came back to bite me.
						</Paragraph>
						<Heading>How I want to study</Heading>
						<Paragraph>
							I want to study things that are either
							interesting to me, important to me, or
							have applications to matters that interest
							or importance to me. How do I want to
							study these things? I want to study these
							things without giving a single care to my
							grade at the end of the semester. How do I
							achieve that? I don't know. I don't know
							how to study.
						</Paragraph>
					</div>
				</article>
				<Backhome />
			</main>
			<Footer />
		</>
	);
}
