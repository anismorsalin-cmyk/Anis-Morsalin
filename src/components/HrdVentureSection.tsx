import React, { useState } from 'react';
import { HRD_VENTURE_METRICS } from '../data/hubData';
import {
  GraduationCap,
  Briefcase,
  TrendingUp,
  ShieldCheck,
  Award,
  Users2,
  PieChart,
  FileText,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface HrdVentureSectionProps {
  onOpenPresenterQr: () => void;
}

export const HrdVentureSection: React.FC<HrdVentureSectionProps> = ({ onOpenPresenterQr }) => {
  const [activeTab, setActiveTab] = useState<'model' | 'hrd' | 'financials'>('model');

  return (
    <section id="impact" className="py-24 bg-[#0B0B0C] border-t border-[#27272A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="text-xs text-[#E5A855] font-semibold uppercase tracking-wider mb-2">
              05. Academic Proof of Concept & HRD Model
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              A self-sustaining venture built for{' '}
              <span className="font-serif italic font-normal text-[#A1A1AA]">
                university partnership.
              </span>
            </h2>
            <p className="mt-4 text-sm text-[#A1A1AA] leading-relaxed">
              Study Hub Cafe isn’t just a retail coffee shop—it is a university-anchored social
              enterprise solving campus library overflow while creating structured, certified
              on-campus employment for students.
            </p>
          </div>

          <button
            onClick={onOpenPresenterQr}
            className="whitespace-nowrap px-4 py-2.5 bg-[#141416] hover:bg-[#1A1A1E] text-white border border-[#27272A] hover:border-[#3F3F46] text-xs font-semibold rounded-md transition-all flex items-center gap-2"
          >
            <FileText className="w-3.5 h-3.5 text-[#E5A855]" />
            <span>Executive Pitch Deck & QR</span>
          </button>
        </div>

        {/* Live Venture Metrics Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HRD_VENTURE_METRICS.map((metric, i) => (
            <div
              key={i}
              className="bg-[#141416] border border-[#27272A] rounded-xl p-5 hover:border-[#3F3F46] transition-colors"
            >
              <div className="text-3xl font-extrabold text-[#E5A855] tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-white mt-1">{metric.label}</div>
              <div className="text-[11px] text-[#A1A1AA] mt-1.5 leading-snug">{metric.subtext}</div>
            </div>
          ))}
        </div>

        {/* Detailed Strategic Pillars Tabs */}
        <div className="mt-12 bg-[#141416] border border-[#27272A] rounded-2xl p-6 sm:p-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 border-b border-[#27272A] pb-4">
            <button
              onClick={() => setActiveTab('model')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors flex items-center gap-2 ${
                activeTab === 'model'
                  ? 'bg-[#E5A855] text-[#0B0B0C]'
                  : 'text-[#A1A1AA] hover:text-white hover:bg-[#1A1A1E]'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Campus Ecosystem Problem-Solution</span>
            </button>

            <button
              onClick={() => setActiveTab('hrd')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors flex items-center gap-2 ${
                activeTab === 'hrd'
                  ? 'bg-[#E5A855] text-[#0B0B0C]'
                  : 'text-[#A1A1AA] hover:text-white hover:bg-[#1A1A1E]'
              }`}
            >
              <Users2 className="w-4 h-4" />
              <span>HRD Student Apprenticeship Program</span>
            </button>

            <button
              onClick={() => setActiveTab('financials')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors flex items-center gap-2 ${
                activeTab === 'financials'
                  ? 'bg-[#E5A855] text-[#0B0B0C]'
                  : 'text-[#A1A1AA] hover:text-white hover:bg-[#1A1A1E]'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Financial Viability & Revenue Breakdown</span>
            </button>
          </div>

          {/* Tab Content 1: Problem - Solution */}
          {activeTab === 'model' && (
            <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-[#0B0B0C] border border-[#27272A] rounded-xl">
                <div className="text-xs font-mono text-rose-400 mb-1">01. CAMPUS DEFICIT</div>
                <h4 className="text-sm font-semibold text-white">Library Capacity Bottleneck</h4>
                <p className="mt-2 text-xs text-[#A1A1AA] leading-relaxed">
                  During midterms and finals, the university library operates at 114% capacity with
                  average desk wait times of 45 minutes. Late-night study rooms close at midnight,
                  forcing students into cramped dormitory hallways.
                </p>
              </div>

              <div className="p-4 bg-[#0B0B0C] border border-[#27272A] rounded-xl">
                <div className="text-xs font-mono text-[#E5A855] mb-1">02. COMMERCIAL GAP</div>
                <h4 className="text-sm font-semibold text-white">Commercial Cafes Are Hostile</h4>
                <p className="mt-2 text-xs text-[#A1A1AA] leading-relaxed">
                  Local coffee shops enforce 90-minute Wi-Fi timers, shut off outlets, play loud
                  music, and close at 8 PM. They treat studying students as low-spend table-hoggers
                  rather than valuable patrons.
                </p>
              </div>

              <div className="p-4 bg-[#0B0B0C] border border-[#27272A] rounded-xl">
                <div className="text-xs font-mono text-emerald-400 mb-1">03. STUDY HUB SOLUTION</div>
                <h4 className="text-sm font-semibold text-white">The 24/7 Symbiotic Sanctuary</h4>
                <p className="mt-2 text-xs text-[#A1A1AA] leading-relaxed">
                  A designated third space engineered specifically for student workflows. Guaranteed
                  outlets, dual monitors, whisper acoustics, and safe 24/7 keycard access located 3
                  minutes from the campus quad.
                </p>
              </div>
            </div>
          )}

          {/* Tab Content 2: HRD Student Apprenticeship */}
          {activeTab === 'hrd' && (
            <div className="pt-6">
              <div className="max-w-2xl">
                <h4 className="text-base font-semibold text-white">
                  University Student Career & Leadership Development
                </h4>
                <p className="text-xs text-[#A1A1AA] mt-1">
                  100% of front-line staff and shift supervisors are enrolled university students,
                  supported by faculty mentors and formal HRD industry credentials.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-[#0B0B0C] border border-[#27272A] rounded-xl">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white mb-2">
                    <Award className="w-4 h-4 text-[#E5A855]" />
                    <span>Specialty Barista Guild</span>
                  </div>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    SCA (Specialty Coffee Association) certified training in espresso extraction, milk
                    science, sensory calibration, and hygiene safety.
                  </p>
                  <div className="mt-3 text-[11px] text-[#71717A]">12 Student Positions · $18.50/hr</div>
                </div>

                <div className="p-4 bg-[#0B0B0C] border border-[#27272A] rounded-xl">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white mb-2">
                    <Briefcase className="w-4 h-4 text-[#E5A855]" />
                    <span>Operations & Shift Leads</span>
                  </div>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    Undergraduate business and HRD majors managing inventory, hourly scheduling,
                    night-shift security compliance, and POS accounting.
                  </p>
                  <div className="mt-3 text-[11px] text-[#71717A]">6 Student Leads · $22.00/hr + Practicum</div>
                </div>

                <div className="p-4 bg-[#0B0B0C] border border-[#27272A] rounded-xl">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white mb-2">
                    <Users2 className="w-4 h-4 text-[#E5A855]" />
                    <span>Tech & Peer Concierge</span>
                  </div>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    Computer Science & IT students maintaining Wi-Fi infrastructure, dual-monitor
                    bays, laser printers, and running peer study circles.
                  </p>
                  <div className="mt-3 text-[11px] text-[#71717A]">16 Student Concierges · $19.00/hr</div>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 3: Financials & Revenue Streams */}
          {activeTab === 'financials' && (
            <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-base font-semibold text-white">
                  Diversified Commercial Revenue Streams
                </h4>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  Unlike traditional cafes that depend solely on coffee sales, Study Hub Cafe
                  operates a balanced dual-engine model where recurring memberships and study passes
                  provide resilient baseline revenue, boosted by high-margin craft beverages.
                </p>

                <div className="space-y-3 pt-2">
                  <div>
                    <div className="flex justify-between text-xs text-[#F4F4F5] mb-1">
                      <span>Memberships & Daily Study Passes</span>
                      <span className="font-bold text-[#E5A855]">42%</span>
                    </div>
                    <div className="w-full bg-[#0B0B0C] h-2 rounded-full overflow-hidden border border-[#27272A]">
                      <div className="bg-[#E5A855] h-full rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-[#F4F4F5] mb-1">
                      <span>Specialty Espresso & Midnight Brain Food</span>
                      <span className="font-bold text-white">38%</span>
                    </div>
                    <div className="w-full bg-[#0B0B0C] h-2 rounded-full overflow-hidden border border-[#27272A]">
                      <div className="bg-white h-full rounded-full" style={{ width: '38%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-[#F4F4F5] mb-1">
                      <span>Laser Printing, Hardware Rental & Private Booths</span>
                      <span className="font-bold text-[#A1A1AA]">12%</span>
                    </div>
                    <div className="w-full bg-[#0B0B0C] h-2 rounded-full overflow-hidden border border-[#27272A]">
                      <div className="bg-[#A1A1AA] h-full rounded-full" style={{ width: '12%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-[#F4F4F5] mb-1">
                      <span>Corporate Hackathons & Academic Society Bookings</span>
                      <span className="font-bold text-[#71717A]">8%</span>
                    </div>
                    <div className="w-full bg-[#0B0B0C] h-2 rounded-full overflow-hidden border border-[#27272A]">
                      <div className="bg-[#71717A] h-full rounded-full" style={{ width: '8%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#0B0B0C] border border-[#27272A] rounded-xl p-5">
                <div className="text-xs font-mono text-[#71717A] uppercase tracking-wider">
                  Unit Economics Summary
                </div>
                <div className="mt-4 space-y-3 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-[#1F1F23]">
                    <span className="text-[#A1A1AA]">Total Usable Space:</span>
                    <span className="font-semibold text-white">4,200 sq ft</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#1F1F23]">
                    <span className="text-[#A1A1AA]">Total Workstation Capacity:</span>
                    <span className="font-semibold text-white">120 simultaneous seats</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#1F1F23]">
                    <span className="text-[#A1A1AA]">Gross Margin on F&B:</span>
                    <span className="font-semibold text-emerald-400">76.4%</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#1F1F23]">
                    <span className="text-[#A1A1AA]">Breakeven Seat Utilization:</span>
                    <span className="font-semibold text-white">62% (74 seats occupied)</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#A1A1AA]">University Dining Dollar Sync:</span>
                    <span className="font-semibold text-[#E5A855]">Active Direct API</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
