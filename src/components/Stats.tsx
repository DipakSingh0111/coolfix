import Image from 'next/image';
import CountUp from '@/components/common/CountUp';
import { site, type SectionProps, type StatsData } from '@/data';
import { cn } from '@/lib/cn';

export default function Stats({ data, className }: SectionProps<StatsData> = {}) {
  const { list } = data || site.stats;

  return (
    <section className={cn('border-t border-gray-100 bg-white pt-14 pb-6 md:pt-16 md:pb-8', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {list.map((stat) => {
            const num = stat.value.replace(/\D/g, '');
            const symbol = stat.value.replace(/\d/g, '');

            return (
              <div
                key={stat.label}
                className="relative flex flex-col items-center px-3 text-center lg:before:absolute lg:before:bottom-[12%] lg:before:left-0 lg:before:top-[28%] lg:before:w-px lg:before:bg-gray-200 lg:first:before:hidden"
              >
                <div className="relative flex h-[132px] w-[132px] items-center justify-center rounded-full bg-[#eaf2fd]">
                  <div className="flex h-[96px] w-[96px] items-center justify-center rounded-full bg-white">
                    <Image src={stat.icon} alt="" width={52} height={52} unoptimized className="h-[52px] w-[52px]" />
                  </div>
                  <span className="absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-white bg-[#ff6b00] text-white shadow-sm">
                    <svg viewBox="0 0 12 12" className="h-3 w-3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                      <path d="M6 1.5v9M1.5 6h9" />
                    </svg>
                  </span>
                </div>

                <div className="relative mt-6 text-[44px] font-extrabold leading-none tracking-tight sm:text-[52px]">
                  <CountUp end={Number(num)} className="tabular-nums text-[#0b2a5b]" />
                  <span className="text-[#ff6b00]">{symbol}</span>
                </div>

                <div className="mt-3 text-[15px] font-medium text-[#1f2937] sm:text-[17px]">{stat.label}</div>

                <div className="mt-5 flex h-[3px] w-20 overflow-hidden rounded-full bg-gray-200">
                  <span className="w-[40%] bg-[#ff6b00]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
