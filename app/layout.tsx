import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
	title: {
		default: "kalimero.rocks",
		template: "%s | stationservice/kalimero.rocks",
	},
	description: "Wild at Art ComiXmaker since 1999",
	openGraph: {
		title: "stationservice/kalimero.rocks",
		description:
			"Wild at Art ComiXmaker since 1999",
		url: "https://stationservice/kalimero.rocks",
		siteName: "station-service",
		images: [
			{
				url: "https://stationservice/kalimero.rocks/og.png",
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
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/Alata-Regular.ttf",
	variable: "--font-alata",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
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
