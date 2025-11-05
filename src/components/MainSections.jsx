import React from 'react';
import { Bot, Phone, Shield, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

function Card({ icon: Icon, title, desc }) {
  return (
    <div className="group p-6 rounded-xl border border-black/10 bg-white shadow-sm hover:shadow-md transition">
      <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center mb-4">
        <Icon className="w-5 h-5" />
      </div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-black/70 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

const revealVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function MainSections() {
  return (
    <div className="bg-white">
      {/* About (UPDATED) */}
      <section id="about" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              We automate your front desk and increase revenue
            </h2>
            <p className="text-black/70 leading-relaxed">
              A premium AI receptionist purpose‑built for dental clinics. It runs your entire front desk with
              human‑level clarity so your team can focus on care — and your practice grows without extra hiring.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[{
              Icon: Bot,
              title: 'Automate the entire front desk end‑to‑end',
              desc: 'Calls, scheduling, verification, reminders, and collections — handled.'
            },{
              Icon: LineChart,
              title: 'Increase revenue with no extra hiring',
              desc: 'Fill schedules and convert more opportunities without adding headcount.'
            },{
              Icon: Phone,
              title: 'Faster solutions, less manual hassle',
              desc: 'Quick responses and streamlined workflows that keep the day moving.'
            },{
              Icon: Shield,
              title: 'Quick, smart, and compliant communication',
              desc: 'Clear, on‑brand outreach with privacy and compliance in mind.'
            }].map(({ Icon, title, desc }, idx) => (
              <motion.div
                key={title}
                className="p-5 rounded-xl border border-black/10 bg-white/90"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={idx + 1}
              >
                <div className="w-9 h-9 rounded-full border border-black flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <p className="text-sm font-medium leading-snug mb-1">{title}</p>
                <p className="text-xs text-black/70 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 border-t border-black/10">
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">Services</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card icon={Bot} title="AI Receptionist" desc="Answers calls, books, reschedules, and cancels appointments 24/7." />
            <Card icon={Phone} title="Follow-ups & Reminders" desc="Automated SMS/voice reminders to reduce no-shows and re-activate patients." />
            <Card icon={LineChart} title="Scheduling Automation" desc="Fills empty slots and balances provider schedules automatically." />
            <Card icon={Shield} title="Insurance Verification" desc="Verifies coverage and benefits before the appointment to speed up the visit." />
            <Card icon={LineChart} title="Payment Handling" desc="Collects co-pays, balances, and sends secure payment links." />
            <Card icon={LineChart} title="Lead Generation" desc="Converts ad leads with instant outreach and 6-month hygiene recalls." />
          </div>
          <p className="text-sm text-black/60 mt-4">Also calculates treatment schedules like braces tightening and sends automated call reminders.</p>
        </motion.div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-16 border-t border-black/10">
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">Case Studies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <a key={i} href="#case-studies" className="block p-6 rounded-xl border border-black/10 hover:shadow-md transition bg-white">
                <h4 className="font-semibold mb-2">Clinic {i}</h4>
                <p className="text-sm text-black/70 mb-3">How AI automation cut no-shows by 42% and added +$68k in 90 days.</p>
                <span className="inline-flex items-center gap-2 text-sm">Read more <span>→</span></span>
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 border-t border-black/10">
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">What clinics say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Dr. Patel', quote: 'We cut no-shows almost in half within a month. Patients love the reminders.' },
              { name: 'SmileWorks', quote: 'Front desk is finally calm. The AI handles calls and collections reliably.' },
              { name: 'Bright Dental', quote: 'Booked 63 extra hygiene visits last quarter thanks to automated recalls.' },
            ].map((t) => (
              <div key={t.name} className="p-6 rounded-xl border border-black/10 bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  <span className="font-medium">{t.name}</span>
                </div>
                <p className="text-black/80">“{t.quote}”</p>
                <div className="flex gap-1 mt-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-black text-black" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 border-t border-black/10">
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">FAQ</h3>
          <div className="space-y-4">
            {[
              {
                q: 'How does the 2X ROI guarantee work?',
                a: 'If we don\'t generate at least 2X what you pay us within 90 days, we work for free until we do.'
              },
              {
                q: 'Will the AI receptionist sound robotic?',
                a: 'No. It uses natural language and clinic-specific playbooks to sound human and helpful.'
              },
              {
                q: 'Can it integrate with our PMS and insurance?',
                a: 'Yes. We support most PMS systems and automate verification and payment workflows.'
              },
            ].map((item) => (
              <details key={item.q} className="group border border-black/10 rounded-lg p-4 bg-white">
                <summary className="cursor-pointer list-none font-medium">{item.q}</summary>
                <p className="mt-2 text-black/70">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://cal.com/velodent-ogbkfv/20min" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white hover:opacity-90">
              Book Now
            </a>
          </div>
        </motion.div>
      </section>

      {/* Contact footer */}
      <footer className="border-t border-black/10 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div>
            <p className="font-semibold">Velodent</p>
            <p className="text-sm text-black/60">AI automation for dental clinics.</p>
          </div>
          <div className="text-sm text-black/60">
            <p>Contact: hello@velodent.ai</p>
            <p>Chat: Coming soon</p>
          </div>
          <a href="https://cal.com/velodent-ogbkfv/20min" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-black text-white hover:opacity-90">Book Now</a>
        </div>
      </footer>
    </div>
  );
}
