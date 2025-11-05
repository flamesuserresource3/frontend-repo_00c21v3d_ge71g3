import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainSections from './components/MainSections';
import Booking from './components/Booking';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <MainSections />
        <Booking />
      </main>
    </div>
  );
}
