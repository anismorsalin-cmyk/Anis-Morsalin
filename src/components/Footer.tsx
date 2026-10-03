import React from 'react';
import { Coffee, ArrowUp, QrCode } from 'lucide-react';

interface FooterProps {
  onOpenPresenterQr: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPresenterQr, onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#27272A] bg-[#0B0B0C] py-14 text-xs text-[#71717A]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1F1F23]">
          <div>
            <div className="flex items-center gap-2 text-white font-bold tracking-tight text-base uppercase">
              <span>The Study Hub</span>
              <span className="text-[#E5A855] font-serif italic normal-case">Café</span>
            </div>
            <p className="text-xs text-[#A1A1AA] mt-1 font-light">
              Coffee · Community · Convenience
            </p>
          </div>

          <div className="text-center md:text-right">
            <div className="text-sm font-bold text-white uppercase tracking-wider">
              Coffee Today. Bigger Tomorrows.
            </div>
            <div className="text-xs text-[#E5A855] font-mono mt-0.5">
              @TheStudyHubCafe
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#71717A]">
          <div>
            &copy; {new Date().getFullYear()} The Study Hub Café. Open 24/7 for university scholars.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPresenterQr}
              className="hover:text-white transition-colors"
            >
              Scan to Join List
            </button>
            <button
              onClick={onOpenBooking}
              className="text-[#E5A855] font-bold hover:underline"
            >
              JOIN THE HUB
            </button>
            <button
              onClick={scrollToTop}
              className="p-1 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
