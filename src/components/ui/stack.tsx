export default function Stacks() {
	return (
		<div className="flex flex-wrap gap-2 justify-center mt-8">
			{[
				"React",
				"Next.js",
				"TypeScript",
				"Node.js",
				"Tailwind",
				"JavaScript",
				"HTML",
				"CSS",
			].map((skill) => (
				<span className="px-4 py-2  rounded-xs text-lg hover:bg-chart-4 hover:text-black hover:font-black hover:cursor-pointer">{skill}</span>
			))}
		</div>
	);
}
