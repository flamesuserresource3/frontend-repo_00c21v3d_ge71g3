import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainSections from './components/MainSections';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <MainSections />
    </div>
  );
}

export default App;
