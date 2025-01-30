import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })
export const metadata = {
  title: "Swalekh Developer Portal",
  description:
    "Swalekh is a powerful web-based tool designed to help developers integrate seamless Indic language typing in their applications...",
  keywords:
    "Swalekh, Indic typing, multilingual input, API subscription, developer tools, Indic languages...",
  authors: [{ name: "Reverie Language Technologies" }],
  openGraph: {
    title: "Swalekh Developer Portal - Empower Your Applications with Indic Typing",
    description:
      "Swalekh provides easy-to-integrate solutions for Indic typing...",
    images: ["https://swalekh.reverieinc.com/reverie-horizontal-logo-1x.svg"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>{children}</body>
    </html>
  )
}

