'use client';

import { useEffect, useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Cover is a pre-extracted static JPEG — no pdfjs, no PDF download, instant.
// Generate once with: python extract_cover.py
const COVER_SRC = '../app/favicon.ico';

// ─── Minimized thumbnail ──────────────────────────────────────────────────────
function MinimizedThumbnail({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div className="fixed right-4 z-[200] w-[80px] bottom-24 md:bottom-40">
      <Link
        href="/newsletter"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onDismiss}
        className="
          flex flex-col
          bg-[#1e3143] border border-[#1484bc]/25
          rounded-lg shadow-2xl overflow-hidden
          hover:border-[#1484bc]/60
          transition-all duration-200
        "
      >
        <div className="w-full aspect-[3/4] bg-[#0d1f2e] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={COVER_SRC} alt="Annual Report Cover" className="w-full h-full object-cover" />
        </div>
        <div className="px-2 py-1.5">
          <p className="text-[#1484bc] text-[10px] flex items-center gap-0.5">
            View report
            <ArrowRight className="w-2.5 h-2.5 flex-shrink-0" />
          </p>
        </div>
      </Link>

      <button
        onClick={onDismiss}
        aria-label="Dismiss newsletter prompt"
        className="
          absolute -top-2 -right-2
          w-5 h-5 rounded-full
          bg-[#2a4257] border border-[#1484bc]/20
          hover:bg-[#1484bc] transition-colors
          flex items-center justify-center
          text-[#aec2cc] hover:text-white
        "
      >
        <X className="w-3 h-3" />
      </button>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function NewsletterPopup() {
  const [visible,   setVisible]   = useState(false);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 700);
    return () => clearTimeout(timer);
  }, []);

  if (!visible && !minimized) return null;
  if (minimized) return <MinimizedThumbnail onDismiss={() => setMinimized(false)} />;

  const minimize = () => { setVisible(false); setMinimized(true); };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) minimize(); }}
    >
      <div className="relative bg-[#1e3143] rounded-lg shadow-2xl w-full max-w-sm border border-[#1484bc]/20 flex flex-col overflow-hidden">

        <button
          onClick={minimize}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#2a4257] hover:bg-[#1484bc] transition-colors flex items-center justify-center text-[#aec2cc] hover:text-white flex-shrink-0"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Cover — explicit height cap prevents it growing unboundedly on tall
            desktop monitors. On mobile this is ~200px; on desktop ~280px.
            object-contain letterboxes; no clipping at any aspect ratio.       */}
        <div className="bg-[#131f2a] flex items-center justify-center overflow-hidden rounded-t-lg h-[200px] sm:h-[280px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={COVER_SRC}
            alt="Annual Report Cover"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text + CTA — always fully visible, never competes with image */}
        <div className="px-6 pt-4 pb-5 flex-shrink-0">
          <p className="text-[#1484bc] text-[10px] font-semibold tracking-[0.2em] uppercase mb-1.5">
            UFirm Newsletter
          </p>
          <h3 className="text-[#fafbf9] font-bold text-lg leading-tight mb-1.5">
            Annual Report 2025–26
          </h3>
          <p className="text-[#aec2cc] text-xs leading-relaxed mb-4">
            Expert perspectives on real estate, integrated facility management, and automated facility maintenance.
          </p>

          <div className="flex gap-3">
            <Link
              href="/newsletter"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setVisible(false)}
              className="flex-1 flex items-center justify-center gap-2 bg-[#1484bc] hover:bg-[#006990] active:bg-[#005577] text-white py-2.5 px-4 text-sm font-medium transition-colors rounded-[4px]"
            >
              Read Our Report
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={minimize}
              className="px-4 py-2.5 border border-[#aec2cc]/25 text-[#aec2cc] hover:border-[#1484bc]/60 hover:text-[#c8d8e2] text-sm transition-colors rounded-[4px]"
            >
              Later
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}