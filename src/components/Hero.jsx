import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const listStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-white">
      {/* Plain white background only (no shapes/gradients/images) */}
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
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight transition-colors hover:underline underline-offset-8 decoration-black/30"
          >
            Velodent — AI Automation for Dental Clinics
          </motion.h1>

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

          {/* CTA directly under video (reduced to balanced medium size) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 flex flex-col items-center justify-center gap-4"
          >
            <a
              href="https://cal.com/velodent-ogbkfv/20min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black text-white text-base md:text-lg font-medium transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black"
            >
              Book Now
            </a>
          </motion.div>

          {/* Updated premium supporting lines under the video */}
          <motion.ul
            variants={listStagger}
            initial="hidden"
            animate="visible"
            className="mt-2 max-w-2xl mx-auto text-left sm:text-center grid gap-1.5 text-sm sm:text-base text-black/80"
          >
            {[
              '2× ROI Guarantee',
              'Full front-desk automation',
              'Appointment scheduling + follow-ups',
              'Insurance verification and claims assistance',
              'No-show reduction and patient reactivation',
            ].map((line, idx) => (
              <motion.li key={idx} variants={fadeUp} className="leading-relaxed">
                {line}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
