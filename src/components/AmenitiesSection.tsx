import React from 'react';
import { Wifi, Printer, Video, Laptop, Moon, ShieldCheck, Zap, Headphones, CheckCircle2 } from 'lucide-react';

export const AmenitiesSection: React.FC = () => {
  const amenities = [
    {
      icon: Wifi,
      title: '1.0 Gbps Symmetrical Wi-Fi 6',
      description: 'Dedicated enterprise fiber optic connection with campus eduroam instant failover. Zero buffering, uninterrupted Zoom calls, and blazing large data set downloads.',
      tag: 'Zero Latency'
    },
    {
      icon: Printer,
      title: 'Wireless Laser Print & Binding Station',
      description: 'High-speed duplex A4/A3 laser printing, color plotters, document scanning, and spiral comb binding. AirPrint directly from your phone, laptop, or tablet.',
      tag: '50 Free Pgs / Pass'
    },
    {
      icon: Video,
      title: 'Soundproof Interview & Zoom Booths',
      description: 'Private 38 dB acoustic isolation booths equipped with 4K wide-angle webcams, studio ring lighting, and directional microphones for job interviews and graduate defenses.',
      tag: 'Instant Reservable'
    },
    {
      icon: Laptop,
      title: 'Hardware & Fast Charger Lending Library',
      description: 'Forgot your charger at the dorm? Free lending of Apple 96W USB-C bricks, MagSafe, iPad Pencils, Logitech mechanical keyboards, and 4K Type-C dongles.',
      tag: '100% Free for Members'
    },
    {
      icon: Moon,
      title: 'Restorative Circadian Nap Capsules',
      description: 'Ergonomic zero-gravity micro-nap pods designed with NASA sleep acoustics and 20-minute gentle vibration wake cycles for healthy non-REM refresh.',
      tag: 'Late-Night Wellness'
    },
    {
      icon: ShieldCheck,
      title: '24/7 Security & Campus Escort Service',
      description: 'NFC university card tap-to-enter after 9 PM. Monitored premises and an on-demand partnership with University Campus Safety for late-night dorm walking escorts.',
      tag: 'Campus Verified'
    }
  ];

  return (
    <section id="amenities" className="py-24 bg-[#0B0B0C] border-t border-[#27272A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs text-[#E5A855] font-semibold uppercase tracking-wider mb-2">
              02. Academic Productivity Infrastructure
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tools designed around student hurdles,{' '}
              <span className="font-serif italic font-normal text-[#A1A1AA]">
                not coffee shop compromises.
              </span>
            </h2>
          </div>
          <div className="text-xs text-[#A1A1AA] max-w-sm">
            Everything students waste time searching for during finals—printers, chargers, quiet
            rooms, fast Wi-Fi—is built into every square meter.
          </div>
        </div>

        {/* Amenity Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#141416] border border-[#27272A] hover:border-[#3F3F46] rounded-xl p-6 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0B0B0C] border border-[#27272A] flex items-center justify-center text-[#E5A855] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-[#A1A1AA] uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-white group-hover:text-[#E5A855] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1F1F23] flex items-center gap-2 text-xs text-[#71717A]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Available 24 hours daily</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
