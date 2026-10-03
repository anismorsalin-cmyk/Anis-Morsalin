import React from 'react';
import { Package, ShieldCheck, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AmazonLockersProps {
  onOpenBooking: () => void;
}

export const AmazonLockersSection: React.FC<AmazonLockersProps> = ({ onOpenBooking }) => {
  return (
    <section id="lockers" className="py-20 border-b border-[#27272A] bg-[#0E0E10] font-sans">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="bg-[#141416] border border-[#27272A] rounded-2xl p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#E5A855] tracking-widest">
              <Package className="w-4 h-4" />
              <span>Campus Convenience Hub</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              24/7 Amazon Package Pick-Up & Returns.{' '}
              <span className="font-serif italic font-normal text-[#E5A855] block sm:inline">
                Never miss a dorm delivery.
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed">
              Campus dorm mailrooms close at 4:30 PM and don't reopen until morning. With Study Hub
              Locker integration, you can ship your textbooks, laptops, care packages, and return
              items safely 24 hours a day, 7 days a week.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-white">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E5A855] shrink-0" />
                <span>Zero miss delivery guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E5A855] shrink-0" />
                <span>Prepaid drop-off box with label printer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E5A855] shrink-0" />
                <span>One-tap QR code door unlock</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E5A855] shrink-0" />
                <span>Free for all Study Hub Members</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0B0B0C] border border-[#27272A] rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-[#141416] border border-[#27272A] flex items-center justify-center text-[#E5A855] mx-auto mb-3">
              <Package className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-white uppercase">Study Hub Locker Node</h4>
            <p className="text-xs text-[#A1A1AA] mt-1 font-light">
              Select <span className="text-[#E5A855] font-medium">"Study Hub East Quad Locker"</span> as your
              delivery address at Amazon checkout.
            </p>
            <button
              onClick={onOpenBooking}
              className="mt-5 w-full py-2.5 bg-[#E5A855] hover:bg-[#D49742] text-[#0B0B0C] text-xs font-bold uppercase rounded-md transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Activate Locker in Membership</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
