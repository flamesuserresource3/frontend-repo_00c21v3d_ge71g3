import React, { useEffect } from 'react';

export default function Booking() {
  useEffect(() => {
    // Inject Cal.com embed script once
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.Cal) {
        // @ts-ignore
        window.Cal('init', '20min', { origin: 'https://app.cal.com' });
        // @ts-ignore
        window.Cal.ns['20min']('inline', {
          elementOrSelector: '#my-cal-inline-20min',
          config: { layout: 'month_view' },
          calLink: 'velodent-ogbkfv/20min',
        });
        // @ts-ignore
        window.Cal.ns['20min']('ui', { hideEventTypeDetails: false, layout: 'month_view' });
      }
    };
    document.head.appendChild(script);

    return () => {
      // Clean up the script if component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="booking" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Book a 20-Min Strategy Call</h2>
          <p className="text-black/70 mt-2">See how Velodent automates your front desk and grows your clinic.</p>
        </div>
        <div className="rounded-2xl border border-black/10 shadow-xl bg-white/80 backdrop-blur p-4">
          <div id="my-cal-inline-20min" style={{ width: '100%', height: '100%', overflow: 'scroll' }} />
        </div>
      </div>
    </section>
  );
}
