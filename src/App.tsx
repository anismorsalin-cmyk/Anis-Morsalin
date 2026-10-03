import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesBar } from './components/FeaturesBar';
import { FloorplanZones } from './components/FloorplanZones';
import { AmazonLockersSection } from './components/AmazonLockersSection';
import { MenuSection } from './components/MenuSection';
import { PricingSection } from './components/PricingSection';
import { LocationVisitSection } from './components/LocationVisitSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { PresenterQrModal } from './components/PresenterQrModal';
import { QrCode, ArrowRight } from 'lucide-react';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [presenterQrModalOpen, setPresenterQrModalOpen] = useState(false);
  const [selectedZoneId, setSelectedZoneId] = useState<string | undefined>(undefined);
  const [selectedPlanId, setSelectedPlanId] = useState<string | undefined>(undefined);

  const handleOpenBooking = () => {
    setSelectedZoneId(undefined);
    setSelectedPlanId(undefined);
    setBookingModalOpen(true);
  };

  const handleSelectZoneForBooking = (zoneId: string) => {
    setSelectedZoneId(zoneId);
    setBookingModalOpen(true);
  };

  const handleSelectPlanForBooking = (planId: string) => {
    setSelectedPlanId(planId);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F4F4F5] font-sans selection:bg-[#E5A855]/20 selection:text-[#E5A855] antialiased">
      {/* Header Navigation */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenPresenterQr={() => setPresenterQrModalOpen(true)}
      />

      <main>
        {/* 1. Hero with Flyer Copy & Campus Ripped Note */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onOpenPresenterQr={() => setPresenterQrModalOpen(true)}
        />

        {/* 2. The 6 Core Features Strip from Flyer */}
        <FeaturesBar />

        {/* 3. Study · Connect · Create · Belong (The 4 Neon Pillars) */}
        <FloorplanZones onSelectZoneForBooking={handleSelectZoneForBooking} />

        {/* 4. Amazon Package Pick-Up & Returns */}
        <AmazonLockersSection onOpenBooking={handleOpenBooking} />

        {/* 5. Specialty Coffee & Drinks + Sustenance Menu */}
        <MenuSection onOpenBooking={handleOpenBooking} />

        {/* 6. Student Membership Perks & Passes */}
        <PricingSection onSelectPlanForBooking={handleSelectPlanForBooking} />

        {/* 7. Location & 24/7 Access */}
        <LocationVisitSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPresenterQr={() => setPresenterQrModalOpen(true)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Floating Action Trigger */}
      <div className="fixed bottom-6 right-6 z-30 flex items-center gap-2">
        <button
          onClick={() => setPresenterQrModalOpen(true)}
          aria-label="Scan to Join List"
          className="w-11 h-11 bg-[#141416]/95 hover:bg-[#1A1A1E] text-white border border-[#27272A] hover:border-[#E5A855] rounded-full shadow-2xl backdrop-blur-md flex items-center justify-center transition-all hover:scale-105"
          title="Scan to Join List"
        >
          <QrCode className="w-4 h-4 text-[#E5A855]" />
        </button>

        <button
          onClick={handleOpenBooking}
          className="px-4 py-2.5 bg-[#E5A855] hover:bg-[#D49742] text-[#0B0B0C] font-extrabold text-xs uppercase tracking-wider rounded-full shadow-2xl flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
        >
          <span>JOIN THE HUB</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Booking / Join Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedZoneId={selectedZoneId}
        preselectedPlanId={selectedPlanId}
      />

      {/* Presenter / Flyer QR Modal */}
      <PresenterQrModal
        isOpen={presenterQrModalOpen}
        onClose={() => setPresenterQrModalOpen(false)}
      />
    </div>
  );
}
