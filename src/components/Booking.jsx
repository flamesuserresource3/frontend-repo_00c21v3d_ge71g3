import React from 'react';

const Booking = () => {
  return (
    <section id="booking" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-black/10 bg-white/60 backdrop-blur p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold tracking-tight">Book a Demo</h3>
            <span className="text-sm text-black/50">Cal integration</span>
          </div>
          <div className="aspect-[16/9] w-full rounded-lg border border-black/10 bg-white" />
        </div>
      </div>
    </section>
  );
};

export default Booking;
