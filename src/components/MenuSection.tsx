import React from 'react';
import { MENU_ITEMS } from '../data/hubData';
import { Coffee, ArrowRight } from 'lucide-react';

interface MenuSectionProps {
  onOpenBooking: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenBooking }) => {
  const coffees = MENU_ITEMS.filter((i) => i.category === 'coffee' || i.category === 'drinks');
  const bites = MENU_ITEMS.filter((i) => i.category === 'bites');

  return (
    <section id="menu" className="py-24 border-b border-[#27272A] bg-[#0B0B0C] font-sans">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 gap-4">
          <div>
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#E5A855]">
              Good Coffee · Brighter Futures
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">
              Specialty Coffee & Sustenance.{' '}
              <span className="font-serif italic font-normal text-[#E5A855]">
                Crafted for stamina.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-sm font-light">
            Direct-trade single-origin beans, matcha elixirs, and warm wholesome meals served well
            past midnight.
          </p>
        </div>

        {/* 2-Column Minimal Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {/* Brews */}
          <div className="bg-[#141416] border border-[#27272A] rounded-2xl p-6 sm:p-8">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#E5A855] pb-3 border-b border-[#27272A]">
              Specialty Coffee & Focus Tonics
            </h3>
            <div className="divide-y divide-[#1F1F23]">
              {coffees.map((item) => (
                <div key={item.id} className="py-4 flex justify-between items-baseline gap-4 group">
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#E5A855] transition-colors">
                      {item.name}
                    </div>
                    <div className="text-xs text-[#A1A1AA] font-light mt-0.5">
                      {item.description}
                    </div>
                  </div>
                  <div className="font-mono text-xs font-bold text-white shrink-0">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nourish */}
          <div className="bg-[#141416] border border-[#27272A] rounded-2xl p-6 sm:p-8">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#E5A855] pb-3 border-b border-[#27272A]">
              Brain Fuel & Midnight Bites
            </h3>
            <div className="divide-y divide-[#1F1F23]">
              {bites.map((item) => (
                <div key={item.id} className="py-4 flex justify-between items-baseline gap-4 group">
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#E5A855] transition-colors">
                      {item.name}
                    </div>
                    <div className="text-xs text-[#A1A1AA] font-light mt-0.5">
                      {item.description}
                    </div>
                  </div>
                  <div className="font-mono text-xs font-bold text-white shrink-0">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-[#27272A] text-center">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 bg-[#0B0B0C] hover:bg-[#1A1A1E] text-white border border-[#27272A] hover:border-[#E5A855] text-xs font-bold uppercase rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <span>Add Coffee Credit to Student Pass</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E5A855]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
