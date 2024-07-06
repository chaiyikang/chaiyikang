export default function layout({ children, project1, project2, project3 }) {
	return (
		<>
			<div>projects layout</div>
			{children}
			{project1}
			{project2}
			{project3}
		</>
	);
}
