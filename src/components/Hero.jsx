import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-white">
      {/* Plain white background only */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="text-center space-y-6">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="uppercase tracking-widest text-xs"
          >
            Premium AI for Dental Clinics
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight"
          >
            Premium AI Automation Engine For Modern Dental Practices
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg text-black/80 max-w-3xl mx-auto"
          >
            Velodent streamlines front-desk ops, patient onboarding, and recall systems using safe, compliant AI.
          </motion.p>

          {/* Video (unchanged) */}
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

          {/* CTA area: BIG premium text WITH subheading above the button; no decorative line */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col items-center justify-center"
          >
            {/* Big premium heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
              Book 20-Minute Strategy Call
            </h2>
            {/* Subheading */}
            <p className="mt-2 text-sm sm:text-base md:text-lg text-black/70 max-w-2xl mx-auto">
              See how we automate your front desk and grow your clinic
            </p>

            {/* Button placed slightly lower for premium spacing */}
            <a
              href="https://cal.com/velodent-ogbkfv/20min"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full bg-black text-white text-base md:text-lg font-medium transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black"
            >
              Book Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
