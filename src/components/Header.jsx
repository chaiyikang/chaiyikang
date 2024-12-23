import Link from "next/link";

export default function Header() {
	return (
		<header className="py-4 bg-slate-900 text-slate-100 sticky top-0 z-10">
			<nav className="container mx-auto flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold">
					Yi Kang
				</Link>
				{/* <ul className="flex space-x-6">
					<li>
						<Link
							href="/about"
							className="hover:text-slate-300 transition-colors"
						>
							About
						</Link>
					</li>
					<li>
						<Link
							href="/projects"
							className="hover:text-slate-300 transition-colors"
						>
							Projects
						</Link>
					</li>
					<li>
						<Link
							href="/essays"
							className="hover:text-slate-300 transition-colors"
						>
							Essays
						</Link>
					</li>
				</ul> */}
			</nav>
		</header>
	);
}
