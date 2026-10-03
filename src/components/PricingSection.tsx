import React from 'react';
import { HUB_PLANS } from '../data/hubData';
import { ArrowRight, Check } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlanForBooking: (planId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlanForBooking }) => {
  return (
    <section id="passes" className="py-24 border-b border-[#27272A] bg-[#0E0E10] font-sans">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-xl mx-auto pb-14">
          <span className="text-[11px] uppercase font-mono tracking-widest text-[#E5A855]">
            Student Membership Perks
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">
            Passes Built for Student Budgets.{' '}
            <span className="font-serif italic font-normal text-[#A1A1AA]">
              Zero hidden fees.
            </span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#A1A1AA] font-light">
            Flexible walk-in day passes or all-inclusive 24/7 semester memberships.
          </p>
        </div>

        {/* 3 Clean Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HUB_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-7 flex flex-col justify-between border transition-all ${
                plan.highlight
                  ? 'bg-[#141416] border-[#E5A855] shadow-xl shadow-[#E5A855]/10 relative'
                  : 'bg-[#141416]/50 border-[#27272A] hover:border-[#3F3F46]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E5A855] text-[#0B0B0C] text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full font-mono">
                  Campus Favorite
                </div>
              )}

              <div>
                <h3 className="text-base font-bold text-white uppercase">{plan.name}</h3>

                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-xs text-[#71717A] font-mono">/ {plan.period}</span>
                </div>

                <p className="mt-3 text-xs text-[#A1A1AA] font-light leading-relaxed">
                  {plan.desc}
                </p>

                <div className="mt-6 pt-5 border-t border-[#27272A] space-y-2.5">
                  {plan.perks.map((perk, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-white">
                      <Check className="w-3.5 h-3.5 text-[#E5A855] shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={() => onSelectPlanForBooking(plan.id)}
                  className={`w-full py-3 text-xs font-bold uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-2 ${
                    plan.highlight
                      ? 'bg-[#E5A855] hover:bg-[#D49742] text-[#0B0B0C] shadow-md'
                      : 'bg-[#0B0B0C] hover:bg-[#1A1A1E] text-white border border-[#27272A]'
                  }`}
                >
                  <span>JOIN THE HUB</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-[#71717A] font-mono uppercase tracking-wider">
          Coffee today. <span className="font-serif italic lowercase text-sm text-[#A1A1AA]">bigger tomorrows.</span>
        </div>
      </div>
    </section>
  );
};
