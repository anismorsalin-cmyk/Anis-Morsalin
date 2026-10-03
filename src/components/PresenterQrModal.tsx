import React, { useState } from 'react';
import { X, QrCode, Copy, Check, Instagram, Music, Share2 } from 'lucide-react';

interface PresenterQrModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PresenterQrModal: React.FC<PresenterQrModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://thestudyhubcafe.com';

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#141416] border border-[#27272A] rounded-2xl shadow-2xl overflow-hidden text-white flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#27272A] bg-[#0B0B0C]">
          <div className="flex items-center gap-2">
            <QrCode className="w-4 h-4 text-[#E5A855]" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-white">
              The Study Hub Café
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#A1A1AA] hover:text-white rounded-md transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body matching flyer */}
        <div className="p-6 text-center space-y-5">
          <div className="space-y-1">
            <h4 className="text-lg font-extrabold uppercase tracking-tight text-white">
              Scan to Join Our List
            </h4>
            <p className="text-xs text-[#A1A1AA] font-light">
              Get priority notification for 24/7 desk reservations & free welcome pour-over.
            </p>
          </div>

          {/* QR Code Container */}
          <div className="inline-block p-4 bg-white rounded-2xl shadow-xl">
            <svg
              className="w-44 h-44 text-black"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path d="M10 10 h24 v24 h-24 z M14 14 v16 h16 v-16 z M18 18 h8 v8 h-8 z" />
              <path d="M66 10 h24 v24 h-24 z M70 14 v16 h16 v-16 z M74 18 h8 v8 h-8 z" />
              <path d="M10 66 h24 v24 h-24 z M14 70 v16 h16 v-16 z M18 74 h8 v8 h-8 z" />
              <rect x="38" y="10" width="6" height="6" />
              <rect x="48" y="14" width="8" height="6" />
              <rect x="38" y="24" width="6" height="8" />
              <rect x="50" y="26" width="6" height="6" />
              <rect x="10" y="38" width="6" height="8" />
              <rect x="22" y="38" width="10" height="6" />
              <rect x="36" y="38" width="6" height="6" />
              <rect x="46" y="38" width="10" height="8" />
              <rect x="62" y="38" width="8" height="6" />
              <rect x="76" y="38" width="6" height="8" />
              <rect x="86" y="38" width="8" height="6" />
              <rect x="38" y="50" width="8" height="6" />
              <rect x="52" y="50" width="6" height="8" />
              <rect x="64" y="48" width="6" height="12" />
              <rect x="76" y="52" width="12" height="6" />
              <rect x="38" y="62" width="6" height="10" />
              <rect x="48" y="64" width="10" height="6" />
              <rect x="62" y="66" width="8" height="6" />
              <rect x="76" y="64" width="6" height="10" />
              <rect x="88" y="66" width="6" height="6" />
              <rect x="38" y="78" width="10" height="6" />
              <rect x="54" y="76" width="6" height="8" />
              <rect x="66" y="78" width="10" height="6" />
              <rect x="82" y="78" width="10" height="6" />
              <rect x="42" y="88" width="6" height="6" />
              <rect x="54" y="88" width="8" height="6" />
              <rect x="70" y="88" width="6" height="6" />
              <rect x="82" y="88" width="8" height="6" />
            </svg>
          </div>

          {/* Socials from flyer */}
          <div className="flex items-center justify-center gap-3 text-xs font-bold text-white pt-2">
            <span className="flex items-center gap-1.5 text-[#E5A855]">
              <span>📸</span>
              <span>🎵</span>
              <span className="text-white">@TheStudyHubCafe</span>
            </span>
          </div>

          <div className="text-[11px] text-[#71717A] uppercase font-mono tracking-wider pt-2 border-t border-[#27272A]">
            Coffee today. Bigger tomorrows.
          </div>

          <button
            onClick={handleCopy}
            className="w-full py-2.5 bg-[#0B0B0C] hover:bg-[#1A1A1E] text-white border border-[#27272A] rounded-md text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Link Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#E5A855]" />
                <span>Copy Live Website Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
