"use client";
// import Link from "next/link";
import { usePathname } from "next/navigation";

import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from "@nextui-org/react";
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
	return (
		<>
			<Navbar maxWidth="full" shouldHideOnScroll>
				<NavbarBrand>
					<Image
						src="/tortoise.jpeg"
						width={50}
						height={50}
						className="mr-4"
						alt="pixel art of a tortoise"
					/>
					<p className="font-bold text-inherit">Chai Yi Kang</p>
				</NavbarBrand>
				<NavbarContent className="hidden sm:flex gap-4" justify="end">
					{routes.map((route) => (
						<NavbarItem key={route.name} isActive={pathname.startsWith(route.route)}>
							<Link
								href={route.route}
								aria-current={pathname === route.route ? "page" : undefined}
							>
								{route.name}
							</Link>
						</NavbarItem>
					))}
				</NavbarContent>
			</Navbar>

			{/* <Navbar shouldHideOnScroll>
					<NavbarContent className="sm:hidden" justify="start">
					<NavbarMenuToggle />
				</NavbarContent>
				<NavbarMenu>
					{routes.map((route) => (
						<NavbarMenuItem
							key={route.name}
							isActive={pathname.startsWith(route.route)}
						>
							<Link
								href={route.route}
								aria-current={pathname === route.route ? "page" : undefined}
							>
								{route.name}
							</Link>
						</NavbarMenuItem>
					))}
				</NavbarMenu>
			</Navbar> */}
		</>
	);
}

// https://nextui.org/docs/components/navbar
