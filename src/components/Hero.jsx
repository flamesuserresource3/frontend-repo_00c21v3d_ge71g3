import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              AI Front-Desk for Dental Clinics
            </h1>
            <p className="mt-4 text-base md:text-lg text-black/70 max-w-xl">
              Streamline bookings, reduce no-shows, and automate front-office tasks with a clean, modern experience.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#booking" className="inline-flex items-center justify-center rounded-md bg-black text-white px-4 py-2 text-sm">
                Book Now
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-md border border-black/15 px-4 py-2 text-sm hover:bg-black hover:text-white transition-colors">
                Learn more
              </a>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-xl border border-black/10 bg-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
