import Image from 'next/image';
import { site, type SectionProps, type WorkingProcessData } from '@/data';
import { cn } from '@/lib/cn';

export default function Steps({ data, className }: SectionProps<WorkingProcessData> = {}) {
  const { badge, heading, list: steps } = data || site.workingProcess;

  return (
    <section className={cn('mx-auto max-w-7xl px-4 pt-10 pb-8 text-center sm:px-6 sm:pt-16 lg:px-8 lg:pt-20 lg:pb-12', className)}>
      <div className="mb-4 flex items-center justify-center gap-4">
        <span className="h-0.5 w-10 bg-[#ff6b00]" />
        <span className="text-sm font-semibold uppercase tracking-widest text-gray-600">{badge}</span>
        <span className="h-0.5 w-10 bg-[#ff6b00]" />
      </div>
      <h2 className="mb-12 text-3xl font-bold text-[#0b1c3d] sm:text-4xl">
        {heading.main} <span className="text-[#ff6b00]">{heading.highlight}</span>
      </h2>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-10 md:gap-0 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step.id} className="group relative flex flex-col items-center px-1 sm:px-4">
            <Image
              src={step.image}
              alt={step.title}
              width={170}
              height={170}
              unoptimized={step.image.endsWith('.svg')}
              className="-mb-2 sm:-mb-4 h-[100px] w-[100px] sm:h-[170px] sm:w-[170px] transition duration-300 group-hover:-translate-y-1"
            />

            <h3 className="mb-1 text-[15px] sm:text-lg font-bold text-[#0b1c3d] leading-tight">{step.title}</h3>
            <p className="max-w-[200px] text-[13px] sm:text-[15px] leading-snug text-gray-500">{step.description}</p>

            {index < steps.length - 1 && (
              <div className="absolute inset-y-6 right-0 hidden w-px bg-gray-200 lg:block">
                <svg
                  className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 bg-white py-1 text-[#0b1c3d]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
