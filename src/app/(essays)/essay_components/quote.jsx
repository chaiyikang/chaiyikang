export default function Quote({ children }) {
	return (
		<blockquote className="border-l-4 border-slate-500 pl-4 italic text-slate-300 my-8 text-2xl leading-relaxed">
			{children}
		</blockquote>
	);
}
