import React from 'react';
import { Calendar, LineChart } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-black/10 bg-white/70">
      <div className="max-w-7xl mx-auto pl-4 sm:pl-6 lg:pl-10 pr-3 sm:pr-4 lg:pr-6">
        <div className="flex items-center h-20 w-full">
          {/* Brand (Velodent) - fully left */}
          <div className="flex-none flex items-center gap-2">
            <a
              href="#home"
              className="group relative inline-block font-bold tracking-tight text-black transition-transform duration-200"
            >
              <span className="inline-block text-lg sm:text-xl transition-transform group-hover:scale-[1.02] group-hover:opacity-95">
                Velodent
              </span>
              <span
                className="pointer-events-none absolute left-0 -bottom-1 h-[1px] w-0 bg-black/70 transition-all duration-200 group-hover:w-full"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Center navigation - balanced, equal spacing between items */}
          <nav className="hidden md:flex flex-1 items-center justify-center text-sm">
            <div className="flex items-center gap-6 lg:gap-8">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#services', label: 'Services' },
                { href: '#case-studies', label: 'Case Studies' },
                { href: '#testimonials', label: 'Testimonials' },
                { href: '#faq', label: 'FAQ' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative group inline-block text-black/80 hover:text-black transition-colors"
                >
                  <span className="inline-block transition-transform group-hover:-translate-y-0.5">
                    {item.label}
                  </span>
                  <span
                    className="pointer-events-none absolute left-0 -bottom-1 h-px w-0 bg-black/60 transition-all duration-200 group-hover:w-full"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </nav>

          {/* Right actions (Dashboard + Book Now) - fully right as a cluster */}
          <div className="ml-auto flex-none flex items-center gap-4">
            <a
              href="#dashboard"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/20 bg-white text-black hover:bg-black hover:text-white transition-colors shadow-sm"
            >
              <LineChart className="w-5 h-5" />
              <span className="text-sm md:text-base font-medium">Dashboard</span>
            </a>
            <a
              href="https://cal.com/velodent-ogbkfv/20min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black"
            >
              <Calendar className="w-5 h-5" />
              <span className="text-sm md:text-base font-medium">Book Now</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
