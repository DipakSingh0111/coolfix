import Image from 'next/image';
import Link from 'next/link';
import Icon from './Icon';
import data from '../data/content.json';

export default function CTABanner() {
  const cta = data.ctaBanner;

  return (
    <section className="relative w-full overflow-hidden bg-[#0b1c3d]">
      <Image src={cta.image} alt="" fill sizes="100vw" className="object-cover object-[70%_center]" />
      <div className="absolute inset-0 bg-linear-to-r from-[#0b1c3d] from-25% via-[#0b1c3d]/85 via-50% to-[#0b1c3d]/30 max-lg:to-[#0b1c3d]/80" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:px-8 lg:py-10">
        <div className="max-w-3xl text-white">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-0.5 w-10 bg-[#ff6b00]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-200">{cta.tagline}</span>
          </div>

          <h2 className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[42px] whitespace-nowrap">
            {cta.titleStart}
            <br />
            <span className="text-[#ff6b00]">{cta.titleHighlight}</span>
          </h2>

          <p className="max-w-md text-gray-200 sm:text-lg">{cta.description}</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href={cta.primaryBtn.href}
            className="flex items-center justify-center gap-3 whitespace-nowrap rounded-full bg-[#ff6b00] px-8 py-4 font-bold text-white shadow-lg shadow-orange-500/30 transition hover:bg-[#e55f00]"
          >
            <Icon name={cta.primaryBtn.icon} className="h-5 w-5" />
            {cta.primaryBtn.label}
          </a>
          <Link
            href={cta.secondaryBtn.href}
            className="group flex items-center justify-center gap-3 whitespace-nowrap rounded-full border-2 border-white px-8 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#0b1c3d]"
          >
            {cta.secondaryBtn.label}
            <Icon name={cta.secondaryBtn.icon} className="h-5 w-5 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <span className="absolute bottom-0 right-[6%] hidden h-1.5 w-[4%] bg-[#ff6b00] md:block" />
    </section>
  );
}
