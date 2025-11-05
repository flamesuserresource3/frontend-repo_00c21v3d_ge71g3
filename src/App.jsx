import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Booking from './components/Booking';
import MainSections from './components/MainSections';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <Booking />
      <MainSections />
    </div>
  );
}

export default App;
