import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/hubData';
import { ChevronDown, HelpCircle, Shield, GraduationCap, Coffee } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#0B0B0C] border-t border-[#27272A] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-xs text-[#E5A855] font-semibold uppercase tracking-wider mb-2">
            06. Student & Faculty Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently asked questions.{' '}
            <span className="font-serif italic font-normal text-[#A1A1AA]">
              Clear answers.
            </span>
          </h2>
          <p className="mt-4 text-sm text-[#A1A1AA] max-w-xl mx-auto">
            Everything university students, resident directors, and academic evaluators need to
            know about day-to-day operations and student access.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#141416] border border-[#27272A] rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 text-white hover:text-[#E5A855] transition-colors focus-visible:outline-none"
                >
                  <span className="text-sm sm:text-base font-semibold tracking-tight">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#A1A1AA] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#E5A855]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed border-t border-[#1F1F23]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
