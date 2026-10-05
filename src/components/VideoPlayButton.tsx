'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

type VideoPlayButtonProps = {
  src: string;
  ariaLabel?: string;
  className?: string;
  children: ReactNode;
};

export default function VideoPlayButton({ src, ariaLabel = 'Play video', className, children }: VideoPlayButtonProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <button type="button" aria-label={ariaLabel} onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={ariaLabel}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0b1c3d]/85 p-4 backdrop-blur-sm"
          >
            <div onClick={(e) => e.stopPropagation()} className="animate-fade-up relative w-full max-w-4xl">
              <button
                type="button"
                aria-label="Close video"
                onClick={() => setOpen(false)}
                className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-[#0b1c3d] transition hover:bg-[#ff6b00] hover:text-white"
              >
                ✕
              </button>
              <video
                src={src}
                controls
                autoPlay
                playsInline
                className="aspect-video w-full rounded-2xl bg-black shadow-2xl"
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
