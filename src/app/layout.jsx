import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
	title: "Your Name - Portfolio",
	description: "Computer Science Student and Web Developer",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="dark">
			<body
				className={`${spaceGrotesk.className} bg-slate-950 text-slate-100`}
			>
				{children}
			</body>
		</html>
	);
}
