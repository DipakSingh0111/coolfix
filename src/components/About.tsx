import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/Icon';
import VideoPlayButton from '@/components/VideoPlayButton';
import { site, type AboutUsData, type SectionProps } from '@/data';
import { cn } from '@/lib/cn';

type AboutProps = SectionProps<AboutUsData> & {
  showButton?: boolean;
};

export default function About({ data, className, showButton = true }: AboutProps = {}) {
  const about = data || site.about;

  return (
    <section id="about" className={cn('overflow-hidden bg-white pt-8 pb-12 lg:pt-12 lg:pb-20', className)}>
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="text-sm font-bold uppercase tracking-wider text-[#ff6b00]">{about.badge}</span>
            <span className="h-0.5 w-12 bg-[#ff6b00]" />
          </div>

          <h2 className="mb-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0b2a5b] sm:text-5xl lg:text-[54px]">
            {about.heading.main}
            <br />
            {about.heading.middle} <span className="text-[#ff6b00]">{about.heading.highlight}</span>
          </h2>

          <p className="mb-8 leading-relaxed text-gray-600">{about.description}</p>

          <div className="mb-8 flex flex-wrap items-center gap-y-6">
            {about.stats.map((stat, idx) => (
              <div key={stat.label} className="flex items-center">
                {idx > 0 && <span className="mx-6 hidden h-16 w-px bg-gray-200 sm:block" />}
                <div className="flex items-center gap-4 pr-6 sm:pr-0">
                  <Icon name={stat.icon} className="h-14 w-14 shrink-0 text-[#1f4fa3]" strokeWidth={1.4} />
                  <span className="h-16 w-px bg-gray-200" />
                  <div>
                    <div className="text-[26px] font-extrabold leading-tight text-[#0b2a5b]">{stat.value}</div>
                    <div className="mt-1 text-sm text-gray-700">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mb-8 leading-relaxed text-gray-600">{about.goal}</p>

          {showButton && (
            <Link
              href={about.cta.href}
              className="group inline-flex items-center gap-3 rounded-full bg-[#ff6b00] px-9 py-3.5 font-bold text-white shadow-lg shadow-orange-500/30 transition hover:bg-[#e55f00]"
            >
              {about.cta.label}
              <Icon name="arrowRight" className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        <div className="relative mx-auto aspect-[1.1] w-full max-w-[560px]">
          <div className="absolute right-[2%] top-0 h-[30%] w-[56%] rounded-tl-md rounded-br-[28px] bg-[#1f4fa3]" />
          <div className="absolute left-0 top-[47%] h-[36%] w-[26%] rounded-bl-md bg-[#1f4fa3]" />
          <div className="absolute right-[1%] top-[46%] h-[24%] w-[6%] rounded-r-xl bg-[#ff6b00]" />
          <div
            className="absolute -right-[6%] top-[24%] hidden h-[22%] w-[15%] opacity-70 sm:block"
            style={{ backgroundImage: 'radial-gradient(#9db8e3 1.6px, transparent 1.6px)', backgroundSize: '13px 13px' }}
          />

          <div className="absolute left-[4%] top-[6.5%] h-[68%] w-[88%] overflow-hidden rounded-2xl border-[6px] border-white shadow-[0_12px_35px_rgba(11,28,61,0.18)]">
            <Image
              src={about.image.main}
              alt="AC technician repairing an air conditioner"
              fill
              sizes="(min-width: 1024px) 500px, 90vw"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-0 right-[3%] h-[47%] w-[62%] overflow-hidden rounded-2xl border-[6px] border-white shadow-[0_16px_40px_rgba(11,28,61,0.25)]">
            <Image
              src={about.image.secondary}
              alt="Smiling AC technician"
              fill
              sizes="(min-width: 1024px) 350px, 60vw"
              className="object-cover"
            />
            <VideoPlayButton
              src={about.videoUrl}
              ariaLabel="Watch our video"
              className="absolute left-[45%] top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#ff6b00] text-white ring-4 ring-white/70 transition hover:scale-110 sm:h-14 sm:w-14"
            >
              <span className="absolute inset-0 animate-ping rounded-full bg-[#ff6b00]/40" />
              <Icon name="play" className="relative ml-0.5 h-5 w-5 sm:h-6 sm:w-6" />
            </VideoPlayButton>
          </div>
        </div>
      </div>
    </section>
  );
}
