import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { Climate_Crisis } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono"
});

const climateCrises = Climate_Crisis({
  subsets: ["latin"],
  variable: "--font-climate-crises"
})


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Anorak | Portfolio",
		template: "%s • Anorak",
	},
	description: "Portfolio pessoal de Anorak",

	icons: {
		icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
		apple: "/apple-touch-icon.pmg",
	},
	manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="" lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} ${climateCrises.variable} antialiased
         `}
      >
        {children}
      </body>
    </html>
  );
}
