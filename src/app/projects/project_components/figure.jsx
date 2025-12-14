export default function Figure({ title, imageSrc, description }) {
	return (
		<figure className="my-8">
			<div className="flex justify-center mb-4">
				<img src={imageSrc} alt={title} className="max-w-full h-auto rounded-lg shadow-lg" />
			</div>
			{title && (
				<figcaption className="text-center text-xl font-semibold text-slate-100 mb-2">
					{title}
				</figcaption>
			)}
			{description && (
				<figcaption className="text-center text-base text-slate-300">
					{description}
				</figcaption>
			)}
		</figure>
	);
}
