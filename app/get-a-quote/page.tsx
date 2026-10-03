import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageBanner from '../../components/common/PageBanner';
import Icon from '../../components/Icon';
import { Field, SelectField, inputClass } from '../../components/common/FormFields';
import data from '../../data/content.json';

export const metadata: Metadata = {
  title: 'Get A Quote | CoolFix',
  description: data.quote.description,
};

const bleedLeft = 'lg:ml-[calc(-1*(max(0px,(100vw_-_80rem)/2)_+_2rem))]';

export default function GetAQuotePage() {
  const { quote } = data;
  const { form, helpBadge } = quote;
  const { fields } = form;

  return (
    <main className="min-h-screen bg-white">
      <div className="sticky top-0 z-50 flex w-full flex-col bg-white shadow-md">
        <Header />
        <Navbar />
      </div>

      <PageBanner page="getAQuote" />

      <section className="relative overflow-hidden bg-white pt-14 md:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-0 xl:grid-cols-[minmax(0,1fr)_480px]">
            <div className="flex flex-col">
              <div className="lg:pr-12">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-0.5 w-8 bg-[#ff6b00]" />
                  <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#ff6b00]">{quote.tag}</span>
                  <span className="h-0.5 w-8 bg-[#ff6b00]" />
                </div>

                <h2 className="mb-5 text-[32px] font-extrabold leading-[1.15] text-[#0b2a5b] sm:text-4xl xl:text-[44px]">
                  {quote.titleStart}
                  <br />
                  <span className="text-[#ff6b00]">{quote.highlight}</span>
                </h2>

                <p className="mb-8 max-w-[560px] text-[15px] leading-relaxed text-gray-500">{quote.description}</p>

                <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                  {quote.featuresTop.map((feature) => (
                    <li key={feature.label} className="flex flex-col items-center gap-3 text-center">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fff1e8] text-[#ff6b00]">
                        <Icon name={feature.icon} className="h-8 w-8" />
                      </span>
                      <span className="max-w-[110px] text-sm font-bold leading-snug text-[#0b2a5b]">{feature.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`relative -mx-4 mt-10 h-[300px] sm:-mx-6 sm:h-[360px] lg:-mr-10 lg:h-auto lg:min-h-[320px] lg:flex-1 ${bleedLeft}`}>
                <Image
                  src={quote.image}
                  alt="Technician servicing a split AC"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover object-[center_28%]"
                />

                <div className="absolute bottom-6 right-6 flex h-[146px] w-[146px] flex-col items-center justify-center rounded-full border-2 border-[#ff6b00] bg-white text-center shadow-[0_10px_30px_rgba(11,28,61,0.25)] lg:right-20">
                  <Icon name="headset" className="mb-1 h-7 w-7 text-[#ff6b00]" />
                  <span className="text-[15px] font-bold leading-tight text-[#0b2a5b]">{helpBadge.title}</span>
                  <span className="text-[11px] text-gray-500">{helpBadge.subtitle}</span>
                  <a href={`tel:${helpBadge.phone.replace(/\s/g, '')}`} className="whitespace-nowrap text-[13px] font-extrabold text-[#ff6b00]">
                    {helpBadge.phone}
                  </a>
                </div>
              </div>

              <div className={`-mx-4 bg-[#eef4fc] px-4 py-6 sm:-mx-6 sm:px-6 lg:-mr-10 lg:pr-20 ${bleedLeft}`}>
                <ul className="ml-auto grid max-w-[760px] grid-cols-2 gap-y-5 sm:grid-cols-4">
                  {quote.featuresBottom.map((feature) => (
                    <li
                      key={feature.label}
                      className="flex items-center justify-center gap-3 px-3 sm:border-l sm:border-[#c9d6ea] sm:first:border-l-0"
                    >
                      <Icon name={feature.icon} strokeWidth={1.6} className="h-8 w-8 shrink-0 text-[#0b2a5b]" />
                      <span className="max-w-[90px] text-[13px] font-bold leading-tight text-[#0b2a5b]">{feature.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative z-10 mb-10 self-start overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_14px_44px_rgba(11,28,61,0.14)] lg:mb-6">
              <div className="relative overflow-hidden bg-[#0b2a5b] px-6 py-7 sm:px-8">
                <Icon
                  name="snowflake"
                  strokeWidth={1.2}
                  className="pointer-events-none absolute -right-4 top-1/2 h-36 w-36 -translate-y-1/2 text-white/15"
                />
                <h3 className="relative mb-2 text-2xl font-extrabold text-white sm:text-[30px]">
                  {form.titleStart} <span className="text-[#ff6b00]">{form.highlight}</span>
                </h3>
                <p className="relative max-w-xs text-[13px] leading-relaxed text-gray-300">{form.description}</p>
              </div>

              <form className="grid gap-5 p-6 sm:grid-cols-2 sm:p-8">
                <Field label={fields.name.label} required={fields.name.required} icon="userCheck">
                  <input type="text" name="name" placeholder={fields.name.placeholder} required className={inputClass} />
                </Field>
                <Field label={fields.phone.label} required={fields.phone.required} icon="phone">
                  <input type="tel" name="phone" placeholder={fields.phone.placeholder} required className={inputClass} />
                </Field>
                <Field label={fields.email.label} required={fields.email.required} icon="envelope">
                  <input type="email" name="email" placeholder={fields.email.placeholder} className={inputClass} />
                </Field>
                <SelectField
                  name="serviceType"
                  label={fields.serviceType.label}
                  required={fields.serviceType.required}
                  icon="settings"
                  placeholder={fields.serviceType.placeholder}
                  options={fields.serviceType.options}
                />
                <SelectField
                  name="acType"
                  label={fields.acType.label}
                  required={fields.acType.required}
                  icon="acUnit"
                  placeholder={fields.acType.placeholder}
                  options={fields.acType.options}
                  className="sm:col-span-2"
                />
                <Field label={fields.date.label} required={fields.date.required} icon="calendar" className="sm:col-span-2">
                  <input type="date" name="date" className={`${inputClass} text-gray-500`} />
                </Field>
                <Field label={fields.address.label} required={fields.address.required} icon="location" className="sm:col-span-2">
                  <input type="text" name="address" placeholder={fields.address.placeholder} className={inputClass} />
                </Field>
                <Field label={fields.message.label} icon="clipboardCheck" className="sm:col-span-2">
                  <textarea name="message" rows={3} placeholder={fields.message.placeholder} className={`${inputClass} resize-none`} />
                </Field>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-3 rounded-full bg-[#ff6b00] px-6 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-orange-500/30 transition hover:bg-[#e55f00] sm:col-span-2"
                >
                  {form.submitBtn}
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#ff6b00]">
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </span>
                </button>

                <p className="flex items-center justify-center gap-2 text-center text-[11px] text-gray-500 sm:col-span-2">
                  <Icon name="lock" className="h-3.5 w-3.5 shrink-0 text-gray-600" />
                  {form.privacyText}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
