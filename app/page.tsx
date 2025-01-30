import Link from "next/link"
import { AnimatedText } from "../components/AnimatedText"
import { CountdownTimer } from "../components/CountdownTimer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-900">
      <header className="p-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">Code India</h1>
          <Link
            href="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Register Now
          </Link>
        </nav>
      </header>

      <section className="flex-grow flex flex-col items-center justify-center text-center p-4">
        <AnimatedText text="Code India Hackathon" className="text-5xl md:text-7xl font-bold mb-4 text-blue-300" />
        <AnimatedText text="February 14th, 2024" className="text-2xl md:text-3xl mb-8 text-blue-200" />
        <CountdownTimer targetDate="2025-02-14T00:00:00" />
      </section>

      <section className="p-8 bg-gray-800">
        <h2 className="text-3xl font-bold mb-4 text-blue-300">Event Details</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-200">Rules & Regulations</h3>
            <ul className="list-disc list-inside text-white">
              <li>Teams of 2-4 members</li>
              <li>24-hour coding period</li>
              <li>Original work only</li>
              <li>Use of open-source libraries allowed</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-200">Schedule</h3>
            <ul className="list-disc list-inside text-white">
              <li>9:00 AM - Opening ceremony</li>
              <li>10:00 AM - Coding begins</li>
              <li>10:00 AM (Next day) - Coding ends</li>
              <li>2:00 PM - Winners announced</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

