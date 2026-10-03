import React from 'react';
import { Coffee, Users, Wifi, Package, CreditCard, Clock } from 'lucide-react';
import { HUB_PERKS } from '../data/hubData';

export const FeaturesBar: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'coffee':
        return Coffee;
      case 'users':
        return Users;
      case 'wifi':
        return Wifi;
      case 'package':
        return Package;
      case 'credit-card':
        return CreditCard;
      case 'clock':
        return Clock;
      default:
        return Coffee;
    }
  };

  return (
    <section id="features" className="py-16 border-y border-[#27272A] bg-[#0E0E10] font-sans">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[11px] uppercase font-mono tracking-widest text-[#E5A855]">
            Core Ecosystem
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1.5">
            Everything you need.{' '}
            <span className="font-serif italic font-normal text-[#A1A1AA]">
              Under one roof.
            </span>
          </h2>
        </div>

        {/* 6 Icons Grid matching the flyer precisely */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {HUB_PERKS.map((perk) => {
            const Icon = getIcon(perk.iconName);
            return (
              <div
                key={perk.id}
                className="bg-[#141416] border border-[#27272A] hover:border-[#E5A855]/60 rounded-xl p-5 text-center flex flex-col items-center justify-between transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0B0B0C] border border-[#27272A] flex items-center justify-center text-[#E5A855] group-hover:scale-105 transition-transform mb-3">
                  <Icon className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-tight group-hover:text-[#E5A855] transition-colors">
                    {perk.title}
                  </h3>
                  <p className="text-[11px] text-[#A1A1AA] font-light mt-1.5 leading-snug">
                    {perk.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
