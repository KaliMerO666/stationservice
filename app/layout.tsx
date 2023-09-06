import "../global.css";
import { Alata } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
	title: {
		default: "kalimero.rocks",
		template: "%s | kalimero.rocks",
	},
	description: "Wild at Art ComiXmaker since 1999",
	openGraph: {
		title: "kalimero.rocks",
		description:
			"Wild at Art ComiXmaker since 1999",
		url: "https://kalimero.rocks",
		siteName: "station-service",
		images: [
			{
				url: "https://kalimero.rocks/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "fr-FR",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Kalimero",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const Alata = Alata ({
	subsets: ["latin"],
	variable: "--font-inter",
});

const AccidentalPresidency = LocalFont({
	src: "../public/fonts/AccidentalPresidency.ttf",
	variable: "--font-AccidentalPresidency",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, AccidentalPresidency.variable].join(" ")}>
			<head>

<meta name="facebook-domain-verification" content="mflrjujfaieuu4fkxo1zrxb23gulqi" />				
				<Analytics />
			</head>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				{children}
			</body>
		</html>
	);
}
