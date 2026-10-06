"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { site, type SectionProps, type ServicesData } from "@/data";
import { cn } from "@/lib/cn";

function subscribe(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function getPerView() {
  if (window.matchMedia("(min-width: 1024px)").matches) return 3;
  if (window.matchMedia("(min-width: 640px)").matches) return 2;
  return 1;
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Services({
  data,
  className,
}: SectionProps<ServicesData> = {}) {
  const {
    badge,
    heading,
    description,
    readMoreLabel,
    list: items,
  } = data || site.services;
  const perView = useSyncExternalStore(subscribe, getPerView, () => 3);
  const maxIndex = Math.max(items.length - perView, 0);
  const [rawIndex, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const index = Math.min(rawIndex, maxIndex);

  const goTo = (i: number) => setIndex(i < 0 ? maxIndex : i > maxIndex ? 0 : i);

  useEffect(() => {
    if (paused || maxIndex === 0) return;
    const timer = setInterval(
      () =>
        setIndex((prev) =>
          Math.min(prev, maxIndex) >= maxIndex ? 0 : prev + 1,
        ),
      4000,
    );
    return () => clearInterval(timer);
  }, [paused, maxIndex, index]);

  return (
    <section
      id="services"
      className={cn(
        "relative overflow-hidden bg-[#f5f8fc] pt-2 pb-8 lg:pt-2 lg:pb-16",
        className,
      )}
    >
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full border-[40px] border-[#e6eef8]" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full border-[40px] border-[#e6eef8]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-0.5 w-8 bg-[#ff6b00]" />
            <span className="text-sm font-bold uppercase tracking-wider text-[#ff6b00]">
              {badge}
            </span>
            <span className="h-0.5 w-8 bg-[#ff6b00]" />
          </div>
          <h2 className="mb-4 text-3xl font-extrabold text-[#0b1c3d] sm:text-4xl lg:text-[42px] whitespace-nowrap">
            {heading.main}{" "}
            <span className="text-[#ff6b00]">{heading.highlight}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div
          className="relative lg:px-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-roledescription="carousel"
        >
          <div className="overflow-hidden">
            <div
              className="-mx-3 flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${(index * 100) / perView}%)` }}
            >
              {items.map((service, i) => {
                const visible = i >= index && i < index + perView;
                return (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="group flex flex-col relative shrink-0 px-3 py-4 h-auto"
                    style={{ flexBasis: `${100 / perView}%` }}
                    aria-hidden={!visible}
                  >
                    <article className="flex-1 flex flex-col relative overflow-hidden rounded-xl bg-white shadow-[0_8px_30px_rgba(11,28,61,0.08)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,28,61,0.14)]">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <span className="absolute bottom-2 right-4 text-5xl font-extrabold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
                          {pad(i + 1)}
                        </span>
                      </div>

                      <div className="flex flex-1 gap-5 px-5 pb-6">
                        <div className="relative -mt-10 h-24 w-24 shrink-0">
                          <div className="absolute inset-x-0 bottom-0 top-10 border-2 border-t-0 border-[#1f6fd6]" />
                          <span className="absolute -left-1 top-9 h-2.5 w-2.5 bg-[#ff6b00]" />
                          <span className="absolute -right-1 top-9 h-2.5 w-2.5 bg-[#ff6b00]" />
                          <div className="relative z-10 mx-auto flex h-[72px] w-[72px] items-center justify-center bg-white text-[#0b1c3d] shadow-md transition group-hover:bg-[#ff6b00] group-hover:text-white">
                            <Icon
                              name={service.icon}
                              className="h-10 w-10"
                              strokeWidth={1.5}
                            />
                          </div>
                        </div>

                        <div className="pt-4 flex flex-col flex-1">
                          <div className="mb-1 flex items-center gap-3 text-sm text-gray-500">
                            Service {pad(i + 1)}
                            <span className="h-px w-10 bg-gray-300" />
                          </div>
                          <h3 className="mb-2 text-xl font-bold text-[#0b1c3d]">
                            {service.title}
                          </h3>
                          <div className="mt-auto pt-2">
                            <div
                              tabIndex={visible ? 0 : -1}
                              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 underline underline-offset-4 transition group-hover:text-[#ff6b00]"
                            >
                              {readMoreLabel}
                              <Icon
                                name="arrowRight"
                                className="h-4 w-4 text-[#ff6b00] transition group-hover:translate-x-1"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous services"
            className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#0b1c3d] text-white shadow-lg transition hover:bg-[#ff6b00] lg:flex"
          >
            <Icon name="chevronLeft" className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next services"
            className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#0b1c3d] text-white shadow-lg transition hover:bg-[#ff6b00] lg:flex"
          >
            <Icon name="chevronRight" className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${i === index ? "w-7 bg-[#ff6b00]" : "w-2.5 bg-gray-300 hover:bg-gray-400"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
