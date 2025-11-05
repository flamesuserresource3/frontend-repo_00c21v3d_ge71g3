import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import MainSections from './components/MainSections.jsx';
import Booking from './components/Booking.jsx';

function App() {
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

export default App;
