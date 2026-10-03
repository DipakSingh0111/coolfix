'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { site, type HeroBannerData, type SectionProps } from '@/data';
import { cn } from '@/lib/cn';

export default function Slider({ data, className }: SectionProps<HeroBannerData> = {}) {
  const { slides } = data || site.hero;
  const count = slides.length;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setCurrent((index + count) % count);
  }, [count]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % count), 5000);
    return () => clearInterval(timer);
  }, [paused, current, count]);

  return (
    <section
      className={cn('relative h-[560px] w-full overflow-hidden bg-[#f3f7fc] md:h-[calc(100svh-196px)] md:max-h-[720px] md:min-h-[320px]', className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {slides.map((slide, index) => {
        const active = index === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${active ? 'z-10 opacity-100' : 'z-0 opacity-0'}`}
            aria-hidden={!active}
          >
            <div className="absolute inset-y-0 right-0 w-full md:w-[60%]">
              <Image
                src={slide.image.src}
                alt={slide.heading.highlight}
                fill
                preload={index === 0}
                sizes="(min-width: 768px) 60vw, 100vw"
                className={`object-cover transition-transform duration-[6000ms] ease-out ${active ? 'scale-105' : 'scale-100'}`}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#f3f7fc] from-40% via-[#f3f7fc]/70 via-50% to-transparent to-60% max-md:from-[#f3f7fc]/95 max-md:via-[#f3f7fc]/80 max-md:to-[#f3f7fc]/50" />

            <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 pt-16 pb-16 sm:px-6 lg:px-8 md:pb-[clamp(1.25rem,4vh,2.5rem)] short:pb-3">
              <div
                className={`max-w-xl transition-all delay-200 duration-700 lg:max-w-[min(36rem,48%)] w-full ${active ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
              >
                <div className="mb-4 inline-flex items-center gap-2 sm:gap-3 rounded-full border border-orange-200 bg-white px-3 py-1 sm:px-4 sm:py-1.5 shadow-sm md:mb-[clamp(0.75rem,2.5vh,1.5rem)] short:mb-2 short:py-1">
                  <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#ff6b00]" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0b1c3d]">{slide.badge}</span>
                </div>

                <h1 className="mb-4 text-[2.1rem] font-extrabold leading-[1.15] text-[#0b1c3d] sm:text-5xl md:mb-[clamp(0.75rem,2.5vh,1.5rem)] md:text-[clamp(2.25rem,7.2vh,4rem)] short:mb-2.5 short:text-[clamp(2rem,6.6vh,2.5rem)]">
                  {slide.heading.main}
                  <br />
                  <span className="text-[#ff6b00]">{slide.heading.highlight}</span>{' '}
                  <span className="inline-block whitespace-nowrap">{slide.heading.end}</span>
                </h1>

                <p className="mb-6 max-w-lg text-sm sm:text-base leading-relaxed text-gray-600 sm:text-lg md:mb-[clamp(1.25rem,4vh,2.25rem)] md:text-[clamp(0.95rem,2.5vh,1.125rem)] short:mb-4 short:line-clamp-2">
                  {slide.description}
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full">
                  <Link
                    href={slide.primaryBtn.href}
                    tabIndex={active ? 0 : -1}
                    className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-[#ff6b00] px-6 sm:px-7 py-3 sm:py-3.5 font-bold md:py-[clamp(0.7rem,1.8vh,0.875rem)] text-white shadow-lg shadow-orange-500/30 transition hover:bg-[#e55f00]"
                  >
                    <Icon name="calendar" className="h-5 w-5" />
                    {slide.primaryBtn.label}
                  </Link>
                  <Link
                    href={slide.secondaryBtn.href}
                    tabIndex={active ? 0 : -1}
                    className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-md border-2 border-[#0b1c3d] bg-white px-6 sm:px-7 py-2.5 sm:py-3 font-bold md:py-[clamp(0.575rem,1.8vh,0.75rem)] text-[#0b1c3d] transition hover:bg-[#0b1c3d] hover:text-white"
                  >
                    {slide.secondaryBtn.label}
                    <Icon name="arrowRight" className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <button
        type="button"
        onClick={() => goTo(current - 1)}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#0b1c3d] text-white shadow-lg transition hover:bg-[#ff6b00] md:flex"
      >
        <Icon name="chevronLeft" className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => goTo(current + 1)}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#0b1c3d] text-white shadow-lg transition hover:bg-[#ff6b00] md:flex"
      >
        <Icon name="chevronRight" className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all ${index === current ? 'w-8 bg-[#ff6b00]' : 'w-2.5 bg-[#0b1c3d]/30 hover:bg-[#0b1c3d]/60'}`}
          />
        ))}
      </div>
    </section>
  );
}
