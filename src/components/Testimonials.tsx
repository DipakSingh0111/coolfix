'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Icon from '@/components/Icon';
import VideoPlayButton from '@/components/VideoPlayButton';
import { site, type SectionProps, type TestimonialsData } from '@/data';
import { cn } from '@/lib/cn';

export default function Testimonials({ data, className }: SectionProps<TestimonialsData> = {}) {
  const { badge, heading, image, videoUrl, source, list: items } = data || site.testimonials;
  const count = items.length;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const review = items[current];

  const goTo = (index: number) => setCurrent((index + count) % count);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % count), 6000);
    return () => clearInterval(timer);
  }, [paused, current, count]);

  return (
    <section id="testimonials" className={cn('bg-white pt-6 pb-16 lg:pt-8 lg:pb-20', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl bg-[#e9effc] lg:grid-cols-[1fr_1.15fr]">
          <div className="relative min-h-[340px] overflow-hidden rounded-3xl sm:min-h-[420px]">
            <Image
              src={image}
              alt="AC technician servicing an outdoor unit"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
            <VideoPlayButton
              src={videoUrl}
              ariaLabel="Watch customer stories"
              className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-4 border-white/60 transition hover:scale-105"
            >
              <span className="absolute inset-0 animate-ping rounded-full bg-white/30" />
              <span className="relative flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white shadow-xl">
                <Icon name="play" className="ml-1 h-7 w-7 text-[#ff6b00]" />
              </span>
            </VideoPlayButton>
          </div>

          <div
            className="flex flex-col justify-center p-6 sm:p-10"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-orange-100 bg-white px-4 py-1.5 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b00]" />
              <span className="text-sm font-semibold text-[#0b1c3d]">{badge}</span>
            </div>

            <h2 className="mb-6 max-w-xl text-2xl font-extrabold leading-[1.2] text-[#0b1c3d] sm:text-4xl lg:text-[44px] tracking-tight">
              {heading.main} <span className="text-[#ff6b00]">{heading.highlight}</span>
            </h2>

            <div className="flex gap-6 rounded-2xl bg-[#0d2b66] p-6 sm:gap-8 sm:p-8" aria-roledescription="carousel">
              <div className="hidden w-14 shrink-0 flex-col items-center gap-6 rounded-full border border-white/25 py-2 sm:flex">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                  <Icon name="quote" className="h-5 w-5 text-white" />
                </span>
                <span className="flex rotate-180 items-center gap-2 pb-2 font-semibold text-white [writing-mode:vertical-rl]">
                  {source}
                  <Icon name="google" className="h-5 w-5 rotate-90" />
                </span>
              </div>

              <div className="flex min-w-0 flex-1 flex-col">
                <p key={review.id} className="animate-fade-up min-h-32 leading-relaxed text-white/90 sm:text-[17px]" aria-live="polite">
                  {review.quote}
                </p>

                <div className="my-6 h-px bg-white/15" />

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div key={review.id} className="animate-fade-up flex items-center gap-3 rounded-xl bg-white py-2 pl-2 pr-6">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-lg object-cover"
                    />
                    <div>
                      <div className="font-bold text-[#0b1c3d]">{review.name}</div>
                      <div className="text-xs text-gray-500">{review.role}</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => goTo(current - 1)}
                      aria-label="Previous review"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0b1c3d] transition hover:bg-[#ff6b00] hover:text-white"
                    >
                      <Icon name="arrowLeft" className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => goTo(current + 1)}
                      aria-label="Next review"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff6b00] text-white transition hover:bg-white hover:text-[#0b1c3d]"
                    >
                      <Icon name="arrowRight" className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
