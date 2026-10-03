import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { site, type SectionProps, type ServicesData } from '@/data';
import { cn } from '@/lib/cn';

const pad = (n: number) => String(n).padStart(2, '0');

export default function ServicesGrid({ data, className }: SectionProps<ServicesData> = {}) {
  const { badge, heading, description, readMoreLabel, list: items } = data || site.services;

  return (
    <section className={cn('relative overflow-hidden bg-white py-16 lg:py-24', className)}>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-0.5 w-10 bg-[#ff6b00]" />
            <span className="text-sm font-bold uppercase tracking-widest text-[#ff6b00]">{badge}</span>
            <span className="h-0.5 w-10 bg-[#ff6b00]" />
          </div>
          <h2 className="mb-4 text-3xl font-extrabold text-[#0b1c3d] sm:text-4xl lg:text-[44px]">
            {heading.main} <span className="text-[#ff6b00]">{heading.highlight}</span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto">{description}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((service, i) => (
            <Link key={service.id} href={service.href} className="group flex flex-col relative h-auto">
              <article className="flex-1 flex flex-col relative overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#0b1c3d]/10 group-hover:bg-[#0b1c3d]/30 transition" />
                  <span className="absolute bottom-2 right-4 text-5xl font-extrabold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
                    {pad(i + 1)}
                  </span>
                </div>

                <div className="flex flex-1 gap-4 px-5 pb-6">
                  <div className="relative -mt-10 h-20 w-20 shrink-0">
                    <div className="absolute inset-x-0 bottom-0 top-10 border-2 border-t-0 border-[#1f6fd6]" />
                    <span className="absolute -left-1 top-9 h-2.5 w-2.5 bg-[#ff6b00]" />
                    <span className="absolute -right-1 top-9 h-2.5 w-2.5 bg-[#ff6b00]" />
                    <div className="relative z-10 mx-auto flex h-[60px] w-[60px] items-center justify-center bg-white text-[#0b1c3d] shadow-md transition group-hover:bg-[#ff6b00] group-hover:text-white">
                      <Icon name={service.icon} className="h-8 w-8" strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="pt-5 flex flex-col flex-1">
                    <div className="mb-1 flex items-center gap-3 text-xs text-gray-500 font-medium">
                      Service {pad(i + 1)}
                      <span className="h-px w-8 bg-gray-300" />
                    </div>
                    <h3 className="mb-2 text-[17px] leading-snug font-bold text-[#0b1c3d]">{service.title}</h3>
                    <div className="mt-auto pt-2">
                      <div
                        className="inline-flex items-center gap-2 text-[13px] font-bold text-gray-500 underline underline-offset-4 transition group-hover:text-[#ff6b00]"
                      >
                        {readMoreLabel}
                        <Icon name="arrowRight" className="h-3 w-3 text-[#ff6b00] transition group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
}
