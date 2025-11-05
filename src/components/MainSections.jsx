import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const MainSections = () => {
  return (
    <>
      {/* About Section (Only cards updated as requested) */}
      <section id="about" className="pt-12 md:pt-14 -mt-2 md:-mt-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            {/* Left: Headline (unchanged) */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
                Premium AI Front-Desk Automation That Drives Higher Revenue Instantly.
              </h2>
              <p className="text-black/60 max-w-prose">
                A minimalist, modern assistant that manages the entire patient journey — from booking to billing.
              </p>
            </div>

            {/* Right: Four Cards with premium motion + micro details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {[
                {
                  title: 'Reduce No-Shows',
                  detail: 'Automated reminders increase kept appointments.',
                },
                {
                  title: 'Fill Empty Slots',
                  detail: 'AI keeps your schedule fully optimized.',
                },
                {
                  title: 'Insurance Verification',
                  detail: 'Real-time eligibility checks before visit.',
                },
                {
                  title: 'Payment Handling',
                  detail: 'Faster collection and claim follow-through.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  className="group rounded-xl border border-black/10 bg-white p-4 md:p-5 shadow-sm/10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                  custom={idx}
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                >
                  <div className="flex flex-col">
                    <h3 className="text-base md:text-lg font-medium tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-black/60 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other sections would remain unchanged; omitted here */}
    </>
  );
};

export default MainSections;
