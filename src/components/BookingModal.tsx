import React, { useState } from 'react';
import { X, Check, QrCode, Ticket, Clock, Calendar, Sparkles, User, ShieldCheck, Download, Share2 } from 'lucide-react';
import { PRICING_PLANS, SPACE_ZONES } from '../data/hubData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedZoneId?: string;
  preselectedPlanId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedZoneId,
  preselectedPlanId,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<string>(preselectedPlanId || 'day-pass');
  const [selectedZone, setSelectedZone] = useState<string>(preselectedZoneId || 'silent-sanctuary');
  const [studentName, setStudentName] = useState<string>('Alex Chen');
  const [studentId, setStudentId] = useState<string>('UNI-849204');
  const [reservationTime, setReservationTime] = useState<string>('Tonight (9:00 PM – 5:00 AM)');
  const [includeCoffee, setIncludeCoffee] = useState<boolean>(true);
  const [includeMonitor, setIncludeMonitor] = useState<boolean>(true);
  
  // Confirmed ticket state
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [assignedSeat, setAssignedSeat] = useState<string>('Bay S-14 (Dual 4K)');

  if (!isOpen) return null;

  const currentPlanObj = PRICING_PLANS.find((p) => p.id === selectedPlan) || PRICING_PLANS[1];
  const currentZoneObj = SPACE_ZONES.find((z) => z.id === selectedZone) || SPACE_ZONES[0];

  const handleGeneratePass = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate a random desk bay based on zone
    const prefix = selectedZone === 'silent-sanctuary' ? 'S' : selectedZone === 'collaborative-commons' ? 'C' : 'N';
    const num = Math.floor(Math.random() * 28) + 1;
    setAssignedSeat(`Desk ${prefix}-${num < 10 ? '0' + num : num}`);
    setIsGenerated(true);
  };

  const handleReset = () => {
    setIsGenerated(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#141416] border border-[#27272A] rounded-2xl shadow-2xl overflow-hidden text-white flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#27272A] bg-[#0B0B0C]">
          <div className="flex items-center gap-2">
            <Ticket className="w-4 h-4 text-[#E5A855]" />
            <h3 className="text-sm font-semibold tracking-tight">
              {isGenerated ? 'Digital Access Credential' : 'Reserve Workstation & Pass'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#A1A1AA] hover:text-white rounded-md hover:bg-[#1A1A1E] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {!isGenerated ? (
            <form onSubmit={handleGeneratePass} className="space-y-5">
              {/* Student Identification */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                    Student Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="e.g. Jordan Smith"
                      className="w-full bg-[#0B0B0C] border border-[#27272A] focus:border-[#E5A855] text-xs text-white px-3 py-2 rounded-md focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                    University Student ID #
                  </label>
                  <input
                    type="text"
                    required
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    placeholder="e.g. UNI-90281"
                    className="w-full bg-[#0B0B0C] border border-[#27272A] focus:border-[#E5A855] text-xs text-white px-3 py-2 rounded-md focus:outline-none"
                  />
                </div>
              </div>

              {/* Pass Tier Selection */}
              <div>
                <label className="block text-xs font-medium text-[#A1A1AA] mb-1.5">
                  Select Pass or Membership
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {PRICING_PLANS.map((plan) => (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`p-2.5 text-left rounded-lg border transition-all text-xs ${
                        selectedPlan === plan.id
                          ? 'bg-[#27272A] border-[#E5A855] text-white shadow-sm'
                          : 'bg-[#0B0B0C] border-[#27272A] text-[#A1A1AA] hover:text-white'
                      }`}
                    >
                      <div className="flex justify-between font-semibold">
                        <span>{plan.name}</span>
                        <span className="text-[#E5A855]">{plan.price}</span>
                      </div>
                      <div className="text-[10px] text-[#71717A] mt-0.5">{plan.duration}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Zone Selection */}
              <div>
                <label className="block text-xs font-medium text-[#A1A1AA] mb-1.5">
                  Preferred Workstation Zone
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {SPACE_ZONES.map((zone) => (
                    <button
                      key={zone.id}
                      type="button"
                      onClick={() => setSelectedZone(zone.id)}
                      className={`p-2.5 text-left rounded-lg border transition-all text-xs ${
                        selectedZone === zone.id
                          ? 'bg-[#27272A] border-[#E5A855] text-white shadow-sm'
                          : 'bg-[#0B0B0C] border-[#27272A] text-[#A1A1AA] hover:text-white'
                      }`}
                    >
                      <div className="font-semibold text-white">{zone.name}</div>
                      <div className="text-[10px] text-emerald-400 mt-0.5">
                        {zone.availableSeats} seats open
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Window */}
              <div>
                <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                  Arrival & Study Window
                </label>
                <select
                  value={reservationTime}
                  onChange={(e) => setReservationTime(e.target.value)}
                  className="w-full bg-[#0B0B0C] border border-[#27272A] focus:border-[#E5A855] text-xs text-white px-3 py-2 rounded-md focus:outline-none"
                >
                  <option value="Tonight (9:00 PM – 5:00 AM)">Tonight · 9:00 PM – 5:00 AM (Overnight Session)</option>
                  <option value="Now (Immediate 4-Hour Access)">Now · Immediate Access (Next 4 Hours)</option>
                  <option value="Tomorrow Morning (8:00 AM – 2:00 PM)">Tomorrow Morning · 8:00 AM – 2:00 PM</option>
                  <option value="Tomorrow Evening (4:00 PM – 10:00 PM)">Tomorrow Evening · 4:00 PM – 10:00 PM</option>
                </select>
              </div>

              {/* Add-ons */}
              <div className="pt-2 border-t border-[#27272A] space-y-2">
                <div className="text-xs font-medium text-[#A1A1AA]">Complimentary Student Add-ons:</div>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 text-xs text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeMonitor}
                      onChange={(e) => setIncludeMonitor(e.target.checked)}
                      className="accent-[#E5A855] rounded"
                    />
                    <span>Dual 4K Type-C 90W Charging Monitor Desk Setup (Free)</span>
                  </label>

                  <label className="flex items-center gap-2 text-xs text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeCoffee}
                      onChange={(e) => setIncludeCoffee(e.target.checked)}
                      className="accent-[#E5A855] rounded"
                    />
                    <span>Include Specialty Single-Origin Welcome Pour-Over (Free on Day Pass)</span>
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#E5A855] hover:bg-[#D49742] text-[#0B0B0C] font-bold text-xs uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#E5A855]/10"
                >
                  <QrCode className="w-4 h-4" />
                  <span>Generate Instant Digital Turnstile Pass</span>
                </button>
                <p className="mt-2 text-center text-[10px] text-[#71717A]">
                  Proof of concept simulator · Instant digital credential issued for demo
                </p>
              </div>
            </form>
          ) : (
            /* Digital Boarding Pass Ticket Presentation */
            <div className="space-y-5 animate-in zoom-in-95 duration-200">
              <div className="bg-[#0B0B0C] border border-[#E5A855]/70 rounded-xl overflow-hidden shadow-2xl relative">
                {/* Gold Top Banner */}
                <div className="bg-[#E5A855] px-4 py-2 text-[#0B0B0C] flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                  <span>Study Hub Cafe · Verified Campus Credential</span>
                  <span>Active Now</span>
                </div>

                <div className="p-5 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[11px] text-[#71717A] uppercase font-mono">Student Scholar</p>
                      <h4 className="text-lg font-bold text-white tracking-tight">{studentName}</h4>
                      <p className="text-xs text-[#A1A1AA] font-mono">{studentId}</p>
                    </div>

                    <div className="text-right">
                      <p className="text-[11px] text-[#71717A] uppercase font-mono">Assigned Bay</p>
                      <p className="text-base font-bold text-[#E5A855] font-mono">{assignedSeat}</p>
                      <p className="text-[10px] text-emerald-400">Guaranteed Reserved</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#27272A] text-xs">
                    <div>
                      <p className="text-[10px] text-[#71717A] uppercase font-mono">Zone</p>
                      <p className="font-semibold text-white">{currentZoneObj.name}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#71717A] uppercase font-mono">Pass Tier</p>
                      <p className="font-semibold text-[#E5A855]">{currentPlanObj.name}</p>
                    </div>
                  </div>

                  {/* Stylized QR Code Graphic for Door Scanner */}
                  <div className="pt-4 border-t border-[#27272A] flex flex-col items-center justify-center text-center">
                    <div className="p-3 bg-white rounded-lg shadow-inner inline-block">
                      {/* Stylized SVG QR Code */}
                      <svg
                        className="w-28 h-28 text-black"
                        viewBox="0 0 100 100"
                        fill="currentColor"
                      >
                        {/* Position detection corners */}
                        <path d="M10 10 h24 v24 h-24 z M14 14 v16 h16 v-16 z M18 18 h8 v8 h-8 z" />
                        <path d="M66 10 h24 v24 h-24 z M70 14 v16 h16 v-16 z M74 18 h8 v8 h-8 z" />
                        <path d="M10 66 h24 v24 h-24 z M14 70 v16 h16 v-16 z M18 74 h8 v8 h-8 z" />
                        {/* QR Data Pattern */}
                        <rect x="42" y="12" width="6" height="6" />
                        <rect x="52" y="18" width="6" height="6" />
                        <rect x="42" y="28" width="16" height="6" />
                        <rect x="12" y="42" width="6" height="6" />
                        <rect x="24" y="42" width="6" height="12" />
                        <rect x="36" y="42" width="8" height="8" />
                        <rect x="50" y="40" width="10" height="10" />
                        <rect x="68" y="42" width="14" height="6" />
                        <rect x="88" y="42" width="6" height="10" />
                        <rect x="42" y="56" width="6" height="16" />
                        <rect x="56" y="56" width="10" height="6" />
                        <rect x="72" y="56" width="6" height="12" />
                        <rect x="84" y="60" width="8" height="6" />
                        <rect x="42" y="78" width="16" height="6" />
                        <rect x="66" y="76" width="8" height="14" />
                        <rect x="80" y="78" width="12" height="6" />
                      </svg>
                    </div>
                    <p className="mt-2 text-[10px] text-[#A1A1AA] font-mono">
                      SCAN AT TURNSTILE OR MOBILE READER
                    </p>
                    <p className="text-[9px] text-[#71717A]">
                      Validation Hash: SHC-89240-SEC-2026
                    </p>
                  </div>
                </div>

                <div className="bg-[#141416] px-5 py-2.5 border-t border-[#27272A] flex items-center justify-between text-[11px] text-[#A1A1AA]">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>24/7 Security Authorized</span>
                  </span>
                  <span>Free Coffee Voucher Loaded</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 py-2.5 bg-[#0B0B0C] border border-[#27272A] hover:bg-[#1A1A1E] text-xs font-medium text-white rounded-md transition-colors"
                >
                  Create Another Pass
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-2.5 bg-[#E5A855] hover:bg-[#D49742] text-[#0B0B0C] text-xs font-bold rounded-md transition-colors"
                >
                  Done (Ready for Turnstile)
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
