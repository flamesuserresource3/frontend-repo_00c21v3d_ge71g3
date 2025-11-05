import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/0UnIIJngGgvQNHiD/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8),rgba(255,255,255,0.95))]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-6">
          <p className="uppercase tracking-widest text-xs">Premium AI for Dental Clinics</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">Velodent — AI Automation for Dental Clinics</h1>
          <ul className="text-gray-900/80 space-y-2 max-w-2xl mx-auto">
            <li>2X ROI guarantee</li>
            <li>Full front desk automation and follow-up management</li>
            <li>Appointment scheduling, insurance verification, payments</li>
          </ul>
          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href="https://cal.com/velodent-ogbkfv/20min"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-black text-white hover:opacity-90 transition"
            >
              Book Now
            </a>
          </div>

          <div className="mt-10 mx-auto max-w-4xl rounded-2xl overflow-hidden border border-black/10 shadow-xl bg-white">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Nw478YoO3og?si=0Pcoc1145T6JDndl"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
