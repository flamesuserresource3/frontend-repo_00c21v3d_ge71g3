import React from 'react';

const MainSections = () => {
  return (
    <>
      {/* Mid Section */}
      <section id="about" className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            {/* Headline */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                A Minimalist AI Assistant That Works Like Magic
              </h2>
              <p className="mt-3 text-black/70 max-w-prose">
                Designed for clarity and speed. Keep your schedule full while your team focuses on care.
              </p>
            </div>

            {/* Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {['Reduce No-Shows', 'Fill Empty Slots', 'Insurance Verification', 'Payment Handling'].map((title) => (
                <div key={title} className="rounded-xl border border-black/10 bg-white p-4 md:p-5">
                  <h3 className="text-base md:text-lg font-medium tracking-tight">{title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSections;
