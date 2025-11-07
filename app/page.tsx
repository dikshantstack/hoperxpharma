import Navbar from "@/components/landing/Navbar";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20 bg-linear-to-br from-emerald-600 to-emerald-400 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='white' stroke-width='2'/%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="relative text-center text-white max-w-4xl px-6">
          <h1 className="text-6xl lg:text-7xl font-bold mb-4">
            HopeRxPharma
          </h1>
          <p className="text-2xl lg:text-3xl mb-6 opacity-95">
            Your Trusted Partner in Pharmaceutical Solutions
          </p>
          <p className="text-lg lg:text-xl mb-10 opacity-80 max-w-2xl mx-auto">
            Innovative and reliable solutions to streamline pharmacy operations and enhance patient care
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              href="/trial"
              className="inline-block px-5 py-1 bg-white text-emerald-600 font-semibold text-lg rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/about"
              className="inline-block px-5 py-1 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
