'use client';

import React, { useEffect, useState } from 'react';

export default function GalleryGrid({ photos }: { photos: string[] }) {
  const [selected, setSelected] = useState<number | null>(null);

  const close = () => setSelected(null);
  const prev = () =>
    setSelected((s) => (s === null ? s : (s - 1 + photos.length) % photos.length));
  const next = () =>
    setSelected((s) => (s === null ? s : (s + 1) % photos.length));

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {photos.map((photo, idx) => (
          <button
            type="button"
            key={idx}
            id={`gallery-item-${idx}`}
            onClick={() => setSelected(idx)}
            className="relative aspect-[4/3] rounded-lg overflow-hidden group shadow-sm border border-gray-100 cursor-zoom-in"
            aria-label={`Open gallery image ${idx + 1}`}
          >
            <img
              src={photo}
              alt={`Gallery item ${idx + 1}`}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#0b1c3d]/0 group-hover:bg-[#0b1c3d]/20 transition duration-300" />
          </button>
        ))}
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          {/* Close (X) */}
          <button
            type="button"
            id="gallery-lightbox-close"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 md:top-6 md:right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#ff6b00] transition"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {/* Prev */}
          {photos.length > 1 && (
            <button
              type="button"
              id="gallery-lightbox-prev"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#ff6b00] transition"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          <img
            src={photos[selected]}
            alt={`Gallery item ${selected + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full md:max-w-[85vw] rounded-lg object-contain shadow-2xl"
          />

          {/* Next */}
          {photos.length > 1 && (
            <button
              type="button"
              id="gallery-lightbox-next"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#ff6b00] transition"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/80">
            {selected + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}
