import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] flex items-center">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
            >
              AI Front-Desk for Modern Dental Clinics
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="mt-4 text-base sm:text-lg text-black/70 max-w-xl"
            >
              Convert more calls, fill your schedule, and automate admin work with a premium, minimalist experience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="mt-8 flex items-center gap-3"
            >
              <a href="#booking" className="inline-flex items-center justify-center rounded-md bg-black text-white px-4 py-2 text-sm hover:opacity-90 transition-opacity">
                Book a Demo
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-md border border-black/15 px-4 py-2 text-sm hover:bg-black hover:text-white transition-colors">
                Learn more
              </a>
            </motion.div>
          </div>
          <div className="aspect-[4/3] rounded-xl border border-black/10 bg-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
