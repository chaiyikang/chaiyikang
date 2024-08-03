"use client";
// import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";

export default function App() {
	const pathname = usePathname();
	const routes = [
		{ name: "About Me", route: "/about-me" },
		{ name: "Contact", route: "/contact" },
		{ name: "Essays", route: "/essays" },
		{ name: "FAQ", route: "/FAQ" },
		{ name: "Projects", route: "/projects" },
	];
	return <></>;
}

// https://nextui.org/docs/components/navbar
