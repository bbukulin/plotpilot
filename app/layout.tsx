import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Raleway } from "next/font/google";
import { Rubik } from "next/font/google";

import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "PlotPilot",
	description: "Movie recommendation engine",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await auth();

	return (
		<SessionProvider session={session}>
			<html lang="en">
				<body className={rubik.className}>{children}</body>
			</html>
		</SessionProvider>
	);
}
