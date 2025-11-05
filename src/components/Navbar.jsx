import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/10">
      <div className="mx-auto max-w-6xl h-16 px-4 sm:px-6 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">Velodent</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="hover:opacity-70 transition-opacity">Home</a>
          <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
          <a href="#booking" className="hover:opacity-70 transition-opacity">Book Demo</a>
        </nav>
        <a href="#booking" className="inline-flex items-center justify-center rounded-md border border-black/10 px-3 py-1.5 text-sm hover:bg-black hover:text-white transition-colors">
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Navbar;
