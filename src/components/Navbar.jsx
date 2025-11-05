import React from 'react';
import { Calendar, LineChart } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-black/10 bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand (Velodent) with subtle premium hover */}
          <div className="flex items-center gap-2">
            <a
              href="#home"
              className="group relative inline-block font-bold tracking-tight text-black transition-transform duration-200"
            >
              <span className="inline-block transition-transform group-hover:scale-[1.02] group-hover:opacity-95">
                Velodent
              </span>
              <span
                className="pointer-events-none absolute left-0 -bottom-1 h-[1px] w-0 bg-black/70 transition-all duration-200 group-hover:w-full"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Center navigation (no Dashboard here) */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
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
          </nav>

          {/* Right actions (keep Dashboard + Book Now) */}
          <div className="flex items-center gap-3">
            <a
              href="#dashboard"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/20 bg-white text-black hover:bg-black hover:text-white transition-colors shadow-sm"
            >
              <LineChart className="w-4 h-4" />
              <span className="text-sm font-medium">Dashboard</span>
            </a>
            <a
              href="https://cal.com/velodent-ogbkfv/20min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-90"
            >
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">Book Now</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
