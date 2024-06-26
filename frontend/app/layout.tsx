import { Pixelify_Sans } from "next/font/google";
import type { Metadata } from "next"
import RootProps from "@interfaces/props"
import "@styles/global.css"

const pixelify = Pixelify_Sans({
	weight:["400","700"],
	subsets:["latin"],
	variable:"--font-pixelify",
	display: "swap"
})

export const metadata: Metadata = {
  title: "Karo | Todo App",
  description: "A minimalist ToDo manager",
}

export default function RootLayout({children}: RootProps) {
	return (
		<html lang="en">
			<body className={`${pixelify.variable}`}>
				{children}
			</body>
		</html>
	)
}
