import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full border-b border-black/10 bg-white">
      <div className="mx-auto max-w-6xl h-16 px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className="text-lg font-semibold tracking-tight">Velodent</a>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="hover:opacity-70 transition">Home</a>
          <a href="#about" className="hover:opacity-70 transition">About</a>
          <a href="#services" className="hover:opacity-70 transition">Services</a>
          <a href="#cases" className="hover:opacity-70 transition">Case Studies</a>
          <a href="#testimonials" className="hover:opacity-70 transition">Testimonials</a>
          <a href="#faq" className="hover:opacity-70 transition">FAQ</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a href="#booking" className="inline-flex items-center justify-center rounded-md bg-black text-white px-3 py-2 text-sm">
            Book Now
          </a>
          <a href="/dashboard" className="inline-flex items-center justify-center rounded-md border border-black/15 px-3 py-2 text-sm hover:bg-black hover:text-white transition-colors">
            Dashboard
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
