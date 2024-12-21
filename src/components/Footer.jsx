export default function Footer() {
	return (
		<footer className="py-8 mt-20 bg-slate-900">
			<div className="container mx-auto text-center">
				<p className="text-sm text-slate-400">
					&copy; {new Date().getFullYear()} You're reading
					the footer? Nerd.{" "}
				</p>
			</div>
		</footer>
	);
}
