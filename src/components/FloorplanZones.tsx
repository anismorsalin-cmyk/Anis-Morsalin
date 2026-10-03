import React, { useState } from 'react';
import { SPACE_ZONES } from '../data/hubData';
import { ArrowRight, Check } from 'lucide-react';

interface FloorplanZonesProps {
  onSelectZoneForBooking: (zoneId: string) => void;
}

export const FloorplanZones: React.FC<FloorplanZonesProps> = ({ onSelectZoneForBooking }) => {
  const [activeZoneId, setActiveZoneId] = useState<string>(SPACE_ZONES[0].id);
  const activeZone = SPACE_ZONES.find((z) => z.id === activeZoneId) || SPACE_ZONES[0];

  return (
    <section id="spaces" className="py-24 border-b border-[#27272A] bg-[#0B0B0C] font-sans">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 gap-4">
          <div>
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#E5A855]">
              Spatial Architecture
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">
              Study · Connect · Create ·{' '}
              <span className="font-serif italic font-normal text-[#E5A855]">
                Belong
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-sm font-light">
            Four purpose-built environments designed so deep research and high-energy group sprints
            thrive without friction.
          </p>
        </div>

        {/* 4 Neon Pillars Switcher */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-1.5 bg-[#141416] border border-[#27272A] rounded-xl max-w-2xl">
          {SPACE_ZONES.map((zone) => {
            const isActive = zone.id === activeZoneId;
            return (
              <button
                key={zone.id}
                onClick={() => setActiveZoneId(zone.id)}
                className={`py-2 px-3 text-xs font-bold uppercase rounded-lg transition-all text-center tracking-wider font-mono ${
                  isActive
                    ? 'bg-[#E5A855] text-[#0B0B0C] shadow-md'
                    : 'text-[#A1A1AA] hover:text-white hover:bg-[#1A1A1E]'
                }`}
              >
                {zone.pillar}
              </button>
            );
          })}
        </div>

        {/* Focused Zone Card */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#141416] border border-[#27272A] rounded-2xl p-6 sm:p-8">
          <div className="lg:col-span-7 aspect-[16/10] rounded-xl overflow-hidden border border-[#27272A]">
            <img
              src={activeZone.imageUrl}
              alt={activeZone.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#E5A855] uppercase tracking-wider mb-2">
                <span>Pillar: {activeZone.pillar}</span>
                <span>·</span>
                <span className="text-[#A1A1AA]">{activeZone.noiseLevel}</span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                {activeZone.name}
              </h3>
              <p className="text-sm font-serif italic text-[#E5A855] mt-0.5">
                {activeZone.tagline}
              </p>

              <p className="mt-4 text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed">
                {activeZone.description}
              </p>

              <div className="mt-6 space-y-2 border-t border-[#27272A] pt-4">
                {activeZone.highlightSpecs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white">
                    <Check className="w-3.5 h-3.5 text-[#E5A855] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 flex items-center justify-between">
              <span className="text-xs text-emerald-400 font-mono">
                {activeZone.availableSeats} of {activeZone.totalSeats} seats open
              </span>

              <button
                onClick={() => onSelectZoneForBooking(activeZone.id)}
                className="px-5 py-2.5 bg-[#E5A855] hover:bg-[#D49742] text-[#0B0B0C] text-xs font-bold uppercase rounded-md transition-colors flex items-center gap-1.5"
              >
                <span>Reserve Seat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
