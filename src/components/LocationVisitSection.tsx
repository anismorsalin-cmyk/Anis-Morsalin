import React, { useState } from 'react';
import { MapPin, Navigation, Bus, Clock, Phone, ShieldCheck, Bike, ArrowUpRight } from 'lucide-react';

export const LocationVisitSection: React.FC = () => {
  const [activeTransitTab, setActiveTransitTab] = useState<'walk' | 'shuttle' | 'bike'>('walk');

  return (
    <section id="visit" className="py-24 bg-[#0B0B0C] border-t border-[#27272A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Info & Directions */}
          <div className="lg:col-span-6">
            <div className="text-xs text-[#E5A855] font-semibold uppercase tracking-wider mb-2">
              07. Campus Geography & Access
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Located at the physical heart of{' '}
              <span className="font-serif italic font-normal text-[#A1A1AA]">
                campus night life.
              </span>
            </h2>
            <p className="mt-4 text-sm text-[#A1A1AA] leading-relaxed">
              Positioned directly between the STEM Engineering Complex and the central undergraduate
              residential towers. Safe, well-illuminated walking paths, zero dark alleys, and a
              dedicated campus blue-light station outside our glass foyer.
            </p>

            {/* Address & Quick Stats */}
            <div className="mt-8 p-5 bg-[#141416] border border-[#27272A] rounded-xl space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E5A855] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Study Hub Cafe — Building 4</h4>
                  <p className="text-xs text-[#A1A1AA] mt-0.5">
                    420 Academic Way (East Quad Commons), Across from Science Library
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#1F1F23] flex items-center justify-between text-xs text-[#A1A1AA]">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Doors Open: 24/7/365
                </span>
                <span className="font-mono text-[#71717A]">Emergency Phone: Ext. 4400</span>
              </div>
            </div>

            {/* Transit Mode Tabs */}
            <div className="mt-6">
              <div className="flex gap-2 p-1 bg-[#141416] border border-[#27272A] rounded-lg max-w-fit text-xs">
                <button
                  onClick={() => setActiveTransitTab('walk')}
                  className={`px-3 py-1.5 font-medium rounded-md transition-colors flex items-center gap-1.5 ${
                    activeTransitTab === 'walk'
                      ? 'bg-[#27272A] text-white'
                      : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Campus Walk</span>
                </button>

                <button
                  onClick={() => setActiveTransitTab('shuttle')}
                  className={`px-3 py-1.5 font-medium rounded-md transition-colors flex items-center gap-1.5 ${
                    activeTransitTab === 'shuttle'
                      ? 'bg-[#27272A] text-white'
                      : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  <Bus className="w-3.5 h-3.5" />
                  <span>Night Owl Shuttle</span>
                </button>

                <button
                  onClick={() => setActiveTransitTab('bike')}
                  className={`px-3 py-1.5 font-medium rounded-md transition-colors flex items-center gap-1.5 ${
                    activeTransitTab === 'bike'
                      ? 'bg-[#27272A] text-white'
                      : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  <Bike className="w-3.5 h-3.5" />
                  <span>Bike & Scooter</span>
                </button>
              </div>

              <div className="mt-4 p-4 bg-[#141416] border border-[#27272A] rounded-xl text-xs text-[#A1A1AA] leading-relaxed">
                {activeTransitTab === 'walk' && (
                  <p>
                    <strong className="text-white">Walking Distances:</strong> 2 minutes from Main
                    University Library; 3 minutes from Engineering & Math Quad; 5 minutes from North
                    Freshman Dorms. Continuous LED pathway lighting all the way to our doors.
                  </p>
                )}
                {activeTransitTab === 'shuttle' && (
                  <p>
                    <strong className="text-white">Campus Night Shuttle:</strong> Campus Blue Line
                    and Night Owl Circulator Stop #12 drops passengers directly in front of the Study
                    Hub glass entrance every 15 minutes between 9:00 PM and 5:30 AM.
                  </p>
                )}
                {activeTransitTab === 'bike' && (
                  <p>
                    <strong className="text-white">Secure Cycle Storage:</strong> 40 sheltered,
                    CCTV-monitored bicycle racks and free electric scooter charging docks situated
                    in our private covered breezeway.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Stylized Campus Map Visualizer */}
          <div className="lg:col-span-6">
            <div className="bg-[#141416] border border-[#27272A] rounded-2xl overflow-hidden p-6 sm:p-8 relative">
              <div className="flex items-center justify-between text-xs text-[#A1A1AA] mb-4">
                <span className="font-mono text-[#E5A855]">CAMPUS GEOMETRIC MAP</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Zone Verified
                </span>
              </div>

              {/* Schematic Map Display */}
              <div className="relative aspect-[16/10] bg-[#0B0B0C] border border-[#27272A] rounded-xl overflow-hidden p-4 flex flex-col justify-between">
                {/* Background grid lines for architectural blueprint feel */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(#E5A855 1px, transparent 1px)`,
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Campus Landmarks */}
                <div className="relative z-10 flex justify-between items-start text-[11px]">
                  <div className="p-2.5 bg-[#141416] border border-[#27272A] rounded-lg">
                    <p className="font-semibold text-white">Central Library</p>
                    <p className="text-[#71717A] text-[10px]">Closes 10:00 PM</p>
                  </div>

                  <div className="p-2.5 bg-[#141416] border border-[#27272A] rounded-lg">
                    <p className="font-semibold text-white">Freshman Dorms</p>
                    <p className="text-[#71717A] text-[10px]">350m · Safe Path</p>
                  </div>
                </div>

                {/* Pin for Study Hub Cafe */}
                <div className="relative z-10 my-auto mx-auto text-center">
                  <div className="inline-flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-[#E5A855] text-[#0B0B0C] flex items-center justify-center font-bold shadow-lg shadow-[#E5A855]/20 animate-bounce">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="mt-2 bg-[#141416]/95 border border-[#E5A855] px-3 py-1.5 rounded-md backdrop-blur-sm shadow-xl">
                      <p className="text-xs font-bold text-white">STUDY HUB CAFE</p>
                      <p className="text-[10px] text-[#E5A855] font-mono">24/7 OPEN · DOORS ACTIVE</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Landmarks */}
                <div className="relative z-10 flex justify-between items-end text-[11px]">
                  <div className="p-2.5 bg-[#141416] border border-[#27272A] rounded-lg">
                    <p className="font-semibold text-white">Engineering Hall</p>
                    <p className="text-[#71717A] text-[10px]">1-min sprint</p>
                  </div>

                  <div className="p-2.5 bg-[#141416] border border-[#27272A] rounded-lg">
                    <p className="font-semibold text-white">Campus Night Shuttle</p>
                    <p className="text-emerald-400 text-[10px]">Stop #12 (Front door)</p>
                  </div>
                </div>
              </div>

              {/* Map Footer Notice */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#71717A]">
                <span>Tap campus keycard at North Glass Turnstile</span>
                <span className="text-[#A1A1AA]">University Wi-Fi Signal: 100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
