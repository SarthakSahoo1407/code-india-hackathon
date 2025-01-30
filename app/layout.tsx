import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })
export const metadata = {
  title: "Swalekh Developer Portal",
  description: "Swalekh enables seamless Indic language typing integration in applications. Subscribe to our APIs to enhance multilingual text input across web and mobile platforms.",
  keywords: "Swalekh, Indic typing, multilingual input, API integration, developer tools, Indian language typing, text input API, regional language SDK, phonetic typing, web development tools",
  author: "Reverie Language Technologies",
  ogTitle: "Swalekh Developer Portal - Seamless Indic Language Integration",
  ogDescription: "Integrate Indic typing easily with Swalekh’s APIs. Enable smooth multilingual input for your applications and enhance user experience.",
  ogImage: "https://swalekh.reverieinc.com/reverie-horizontal-logo-1x.svg",
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

