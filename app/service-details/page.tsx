import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageBanner from '../../components/common/PageBanner';
import Icon from '../../components/Icon';
import data from '../../data/content.json';

export const metadata: Metadata = {
  title: 'AC Repair & Maintenance | CoolFix',
  description: data.serviceDetails.content.sections[0].text,
};

export default function ServiceDetailsPage() {
  const { sidebar, content } = data.serviceDetails;
  const { hero, sections } = content;
  const { assistance } = sidebar;

  return (
    <main className="min-h-screen bg-white">
      <div className="sticky top-0 z-50 flex w-full flex-col bg-white shadow-md">
        <Header />
        <Navbar />
      </div>

      <PageBanner page="serviceDetails" />

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:px-8 xl:gap-10">
          <aside className="order-2 flex flex-col gap-6 lg:order-1">
            <div className="rounded-xl bg-[#0b2a5b] p-4 shadow-[0_10px_30px_rgba(11,28,61,0.18)] sm:p-5">
              <h3 className="mb-5 text-[22px] font-bold text-white">
                {sidebar.title}
                <span className="mt-2 block h-[3px] w-10 rounded bg-[#ff6b00]" />
              </h3>

              <ul className="space-y-2">
                {sidebar.services.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      aria-current={service.active ? 'page' : undefined}
                      className={`group flex items-center gap-3 rounded-md border px-3 py-3 text-[13px] font-medium transition ${
                        service.active
                          ? 'border-[#ff6b00] bg-[#ff6b00] text-white shadow-md shadow-orange-500/30'
                          : 'border-white/10 text-white hover:border-[#ff6b00]/60 hover:bg-white/5'
                      }`}
                    >
                      <Icon name={service.icon} strokeWidth={1.6} className="h-5 w-5 shrink-0" />
                      <span className="flex-1">{service.label}</span>
                      <Icon name="chevronRight" className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-[#0b2a5b] p-6 shadow-[0_10px_30px_rgba(11,28,61,0.18)]">
              <div className="mb-5 flex items-start gap-3">
                <Icon name="headset" strokeWidth={1.6} className="h-12 w-12 shrink-0 text-[#ff6b00]" />
                <div>
                  <h3 className="text-lg font-bold text-white">{assistance.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-gray-300">{assistance.description}</p>
                </div>
              </div>

              <a href={`tel:${assistance.phone.replace(/\s/g, '')}`} className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#ff6b00]">
                  <Icon name="phone" className="h-5 w-5" />
                </span>
                <span className="text-xl font-bold text-white">{assistance.phone}</span>
              </a>

              <Link
                href={assistance.btnLink}
                className="inline-flex items-center gap-2 rounded-full bg-[#ff6b00] px-7 py-3 text-sm font-bold text-white shadow-md shadow-orange-500/30 transition hover:bg-[#e55f00]"
              >
                {assistance.btnText}
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </div>
          </aside>

          <div className="order-1 lg:order-2">
            <div className="relative flex min-h-[380px] overflow-hidden rounded-xl bg-[#0b2a5b] sm:min-h-[400px]">
              <div className="absolute inset-y-0 right-0 w-full sm:w-[62%]">
                <Image
                  src={hero.image}
                  alt="Technician repairing a split AC"
                  fill
                  preload
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover object-[center_28%]"
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#0b2a5b] via-[#0b2a5b]/50 to-transparent" />
              </div>
              <div className="absolute inset-0 bg-[#0b2a5b]/40 sm:hidden" />

              <div className="relative z-10 flex max-w-[400px] flex-col justify-center px-6 py-10 sm:px-10">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white">{hero.tag}</span>
                  <span className="h-px w-10 bg-white/70" />
                </div>
                <h2 className="mb-4 text-[34px] font-extrabold leading-[1.1] text-white sm:text-[44px]">
                  {hero.titleStart}
                  <br />
                  <span className="text-[#ff6b00]">{hero.highlight}</span>
                </h2>
                <p className="mb-7 max-w-[260px] text-[15px] leading-snug text-gray-200">{hero.subtitle}</p>

                <ul className="grid grid-cols-4 gap-3">
                  {hero.features.map((feature) => (
                    <li key={feature.label} className="flex flex-col items-center gap-2 text-center">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/80 text-white">
                        <Icon name={feature.icon} strokeWidth={1.6} className="h-6 w-6" />
                      </span>
                      <span className="text-[11px] font-semibold leading-tight text-white">{feature.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-9 space-y-8">
              {sections.map((section) => (
                <article key={section.title}>
                  <h3 className="text-[22px] font-bold text-[#0b2a5b] sm:text-2xl">{section.title}</h3>
                  <span className="mt-2 block h-[3px] w-10 rounded bg-[#ff6b00]" />
                  <p className="mt-4 text-[15px] leading-relaxed text-gray-500">{section.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
