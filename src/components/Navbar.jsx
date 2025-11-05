import React from 'react';
import { Calendar, LineChart, Bot } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-black/10 bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center">
              <Bot className="w-4 h-4" />
            </div>
            <span className="font-semibold tracking-tight">Velodent</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:opacity-70 transition-opacity">Home</a>
            <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
            <a href="#services" className="hover:opacity-70 transition-opacity">Services</a>
            <a href="#dashboard" className="hover:opacity-70 transition-opacity">Dashboard</a>
            <a href="#case-studies" className="hover:opacity-70 transition-opacity">Case Studies</a>
            <a href="#testimonials" className="hover:opacity-70 transition-opacity">Testimonials</a>
            <a href="#faq" className="hover:opacity-70 transition-opacity">FAQ</a>
          </nav>
          <a href="https://cal.com/velodent-ogbkfv/20min" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white hover:opacity-90 transition">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">Book Now</span>
          </a>
        </div>
      </div>
    </header>
  );
}
