import React, { useState, useEffect } from 'react';
import { Coffee, QrCode, ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenPresenterQr: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenPresenterQr }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Spaces', href: '#spaces' },
    { label: 'Specialty Menu', href: '#menu' },
    { label: 'Passes', href: '#passes' },
    { label: 'Amazon Lockers', href: '#lockers' },
    { label: 'Location', href: '#visit' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0C]/90 backdrop-blur-md border-b border-[#27272A] py-3.5 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Mark matching the flyer */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span className="text-[10px] tracking-widest text-[#A1A1AA] uppercase font-mono leading-none">
              THE
            </span>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white uppercase font-sans">
                STUDY HUB
              </span>
              <span className="text-lg sm:text-xl font-serif italic text-[#E5A855] font-normal leading-none">
                Café
              </span>
            </div>
            <span className="text-[9px] text-[#71717A] tracking-wider uppercase font-mono mt-0.5 hidden sm:block">
              Coffee · Community · Convenience
            </span>
          </div>
        </a>

        {/* Clean Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-[#A1A1AA]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTAs matching flyer */}
        <div className="flex items-center gap-3">
          {/* QR Code trigger */}
          <button
            onClick={onOpenPresenterQr}
            className="p-2 text-[#A1A1AA] hover:text-white hover:bg-[#141416] border border-[#27272A] rounded-md transition-colors flex items-center gap-1.5 text-xs font-mono"
            title="Scan QR Code / Join List"
          >
            <QrCode className="w-3.5 h-3.5 text-[#E5A855]" />
            <span className="hidden sm:inline text-[11px]">Join List</span>
          </button>

          {/* Join The Hub Button */}
          <button
            onClick={onOpenBooking}
            className="px-4 py-2 text-xs font-bold text-[#0B0B0C] bg-[#E5A855] hover:bg-[#D49742] rounded-md transition-all shadow-sm flex items-center gap-1.5 active:scale-95"
          >
            <span>JOIN THE HUB</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#A1A1AA] hover:text-white bg-[#141416] border border-[#27272A] rounded-md"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0B0C]/98 border-b border-[#27272A] px-6 py-4 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-medium text-[#A1A1AA] hover:text-white py-1.5 border-b border-[#1F1F23]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-xs font-bold text-center text-[#0B0B0C] bg-[#E5A855] hover:bg-[#D49742] rounded-md flex items-center justify-center gap-2"
            >
              <span>JOIN THE HUB</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
