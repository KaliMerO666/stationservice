import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
	{ name: "Station-Service", href: "/projects" },
	{ name: "Yam What Yam", href: "https://yamwhatyam.kalimero.rocks" },
	{ name: "Picaboo !", href: "https://picaboo.netlify.app" },
	{ name: "Rock, Ghost", href: "https://rockghostsrock.digitalpress.blog" },
	{ name: "Let's Shop", href: "https://bookomatic.hstn.me" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-5">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<h1 className="z-10 text-3xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-5xl md:text-8xl whitespace-nowrap bg-clip-text ">
				www.kalimero.rocks
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">
					Hi, my name is Kalimero, I'm Wild at Art
					 {" "}
					<Link
						target="_blank"
						href="https://yamwhatyam.kalimero.rocks"
						className="underline duration-500 hover:text-zinc-300"
					>
						Dessine-Man
					</Link>

					<br />
					working on{" "}
					<Link
						target="_blank"
						href="https://johnnyschaerbeek.fanclub.rocks"
						className="underline duration-500 hover:text-zinc-300"
					>
						Johnny Schaerbeek
					</Link>{" "}
					at night.
				</h2>
			</div>
		</div>
		</section>

		"use client";
import { Github, Mail, Twitter, Facebook, Instagram, Youtube, Coffee } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
{
		icon: <Instagram size={20} />,
		href: "https://instagram.com/kalimero_666",
		label: "Instagram",
		handle: "@kalimero_666",
	},
	{
		icon: <Facebook size={20} />,
		href: "https://facebook.com/kalimerox19",
		label: "Facebook",
		handle: "@kalimerox19",
	},
	{
		icon: <Coffee size={20} />,
		href: "https://ko-fi.com/kalimero666",
		label: "Ko-Fi",
		handle: "@kalimero666",
	},
	{
		icon: <Twitter size={20} />,
		href: "https://twitter.com/kalimero_666_",
		label: "Twitter",
		handle: "@kalimero_666_",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:kalimero@ik.me",
		label: "Email",
		handle: "kalimero@ik.me",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/kalimerO666",
		label: "Github",
		handle: "kalimerO666",
	},
];
	);
}

