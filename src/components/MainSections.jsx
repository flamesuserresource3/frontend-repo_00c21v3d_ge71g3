import React from 'react';
import { Bot, Phone, Calendar, Shield, CreditCard, LineChart, CheckCircle, Quote, Star, User } from 'lucide-react';

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

export default function MainSections() {
  return (
    <div className="bg-white">
      {/* About */}
      <section id="about" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Automation that feels human</h2>
            <p className="text-black/70 leading-relaxed">
              Velodent is an AI automation platform built specifically for dental clinics. From answering calls to
              verifying insurance and managing payments, our AI receptionist handles the full front desk so your team can
              focus on patient care. We guarantee 2X ROI or we work for free.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-black/10 text-center">
              <LineChart className="w-6 h-6 mx-auto mb-2" />
              <p className="text-sm">Reduce no-shows</p>
            </div>
            <div className="p-4 rounded-xl border border-black/10 text-center">
              <Calendar className="w-6 h-6 mx-auto mb-2" />
              <p className="text-sm">Fill empty slots</p>
            </div>
            <div className="p-4 rounded-xl border border-black/10 text-center">
              <Shield className="w-6 h-6 mx-auto mb-2" />
              <p className="text-sm">Insurance verified</p>
            </div>
            <div className="p-4 rounded-xl border border-black/10 text-center">
              <CreditCard className="w-6 h-6 mx-auto mb-2" />
              <p className="text-sm">Payments handled</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 border-t border-black/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">Services</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card icon={Bot} title="AI Receptionist" desc="Answers calls, books, reschedules, and cancels appointments 24/7." />
            <Card icon={Phone} title="Follow-ups & Reminders" desc="Automated SMS/voice reminders to reduce no-shows and re-activate patients." />
            <Card icon={Calendar} title="Scheduling Automation" desc="Fills empty slots and balances provider schedules automatically." />
            <Card icon={Shield} title="Insurance Verification" desc="Verifies coverage and benefits before the appointment to speed up the visit." />
            <Card icon={CreditCard} title="Payment Handling" desc="Collects co-pays, balances, and sends secure payment links." />
            <Card icon={LineChart} title="Lead Generation" desc="Converts ad leads with instant outreach and 6-month hygiene recalls." />
          </div>
          <p className="text-sm text-black/60 mt-4">Also calculates treatment schedules like braces tightening and sends automated call reminders.</p>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-16 border-t border-black/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" className="py-16 border-t border-black/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">Dashboard</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 p-6 rounded-xl border border-black/10 bg-white">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Monthly Bookings', value: '186' },
                  { label: 'Show Rate', value: '92%' },
                  { label: 'Revenue Attributed', value: '$84k' },
                ].map((m) => (
                  <div key={m.label} className="p-4 rounded-lg border border-black/10">
                    <p className="text-xs text-black/60">{m.label}</p>
                    <p className="text-xl font-semibold mt-1">{m.value}</p>
                  </div>
                ))}
              </div>
              <div className="h-48 rounded-lg border border-black/10 flex items-end gap-3 p-4">
                {[30,50,40,70,65,80,60,90,75,95,85,100].map((h, idx) => (
                  <div key={idx} className="flex-1 bg-black/10 rounded" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl border border-black/10 bg-white">
              <h4 className="font-semibold mb-3">Client Access</h4>
              <form className="space-y-3">
                <input type="email" placeholder="Email" className="w-full px-3 py-2 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
                <input type="password" placeholder="Password" className="w-full px-3 py-2 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
                <button type="button" className="w-full py-2 rounded-md bg-black text-white hover:opacity-90">Sign In</button>
              </form>
              <p className="text-xs text-black/60 mt-3">Demo only — connect your account for full analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 border-t border-black/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">What clinics say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Dr. Patel', quote: 'We cut no-shows almost in half within a month. Patients love the reminders.' },
              { name: 'SmileWorks', quote: 'Front desk is finally calm. The AI handles calls and collections reliably.' },
              { name: 'Bright Dental', quote: 'Booked 63 extra hygiene visits last quarter thanks to automated recalls.' },
            ].map((t) => (
              <div key={t.name} className="p-6 rounded-xl border border-black/10 bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{t.name}</span>
                </div>
                <p className="text-black/80">“{t.quote}”</p>
                <div className="flex gap-1 mt-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 border-t border-black/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
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
