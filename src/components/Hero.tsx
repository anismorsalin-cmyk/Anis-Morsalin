import React from 'react';
import { ArrowRight, QrCode } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenPresenterQr: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenPresenterQr }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden font-sans">
      {/* Subtle warm ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-[#E5A855]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Top Taglines from Flyer */}
        <div className="flex flex-wrap items-center justify-between text-xs text-[#A1A1AA] uppercase font-mono tracking-widest pb-6 border-b border-[#27272A]/70 mb-10 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="text-white font-medium">Coffee · Community · Convenience</span>
          </div>
          <div className="text-[#E5A855] font-semibold flex items-center gap-1.5">
            <span>Good Coffee</span>
            <span className="text-[#71717A]">/</span>
            <span className="font-serif italic normal-case text-sm text-[#F5BE75]">Brighter Futures</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Serif + Sans Serif Typography */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              We’re creating a place where students can{' '}
              <span className="font-serif italic font-normal text-[#E5A855] block sm:inline">
                study, work, connect and grab coffee 24/7.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#A1A1AA] font-light leading-relaxed">
              More than a café.{' '}
              <span className="font-serif italic font-normal text-white text-lg sm:text-xl">
                A place to belong.
              </span>
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 bg-[#E5A855] hover:bg-[#D49742] text-[#0B0B0C] font-extrabold text-xs uppercase tracking-wider rounded-md transition-all shadow-lg shadow-[#E5A855]/15 flex items-center gap-2.5 active:scale-95"
              >
                <span>JOIN THE HUB</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenPresenterQr}
                className="px-5 py-3.5 bg-[#141416] hover:bg-[#1A1A1E] text-white border border-[#27272A] hover:border-[#E5A855]/60 text-xs font-semibold rounded-md transition-all flex items-center gap-2"
              >
                <QrCode className="w-4 h-4 text-[#E5A855]" />
                <span>Scan to Join List</span>
              </button>
            </div>

            {/* Flyer Sticky Note Card */}
            <div className="mt-10 max-w-md">
              <div className="bg-[#F4F4F5] text-[#0B0B0C] p-4 sm:p-5 rounded-md shadow-2xl transform -rotate-1 border border-zinc-300 relative">
                <div className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 mb-1">
                  Campus Note · 24/7 Reality
                </div>
                <div className="text-lg sm:text-xl font-extrabold tracking-tight uppercase leading-tight font-sans text-zinc-900">
                  "Your campus doesn't stop at 5 PM.{' '}
                  <span className="font-serif italic normal-case text-amber-700 font-medium">
                    Neither do we.
                  </span>"
                </div>
                <div className="mt-2 text-right text-base text-zinc-800 font-bold">🖤</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Atmosphere */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#27272A] bg-[#141416] shadow-2xl">
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
                  alt="Students studying late at Study Hub Cafe"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/30 to-transparent"></div>

                {/* Neon Wall Sign Overlay (from flyer) */}
                <div className="absolute top-6 right-6 text-right">
                  <div className="bg-[#0B0B0C]/85 border border-[#27272A] px-3.5 py-2.5 rounded-lg backdrop-blur-md text-[11px] font-mono tracking-widest space-y-1">
                    <div className="text-[#E5A855] font-bold">STUDY</div>
                    <div className="text-white font-bold">CONNECT</div>
                    <div className="text-[#E5A855] font-bold">CREATE</div>
                    <div className="text-white font-bold">BELONG</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
