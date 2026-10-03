import Image from 'next/image';
import Icon from '@/components/Icon';
import { Field, SelectField, inputClass } from '@/components/common/FormFields';
import { site, type ContactPageData, type SectionProps } from '@/data';
import { cn } from '@/lib/cn';

export default function ContactSection({ data, className }: SectionProps<ContactPageData> = {}) {
  const contact = data || site.contact;
  const { form, map } = contact;
  const { fields } = form;

  return (
    <section className={cn('relative overflow-hidden bg-linear-to-br from-[#f4f8fe] via-white to-[#f4f8fe] py-16 lg:py-20', className)}>
      <div className="pointer-events-none absolute -left-24 top-[46%] h-64 w-64 rounded-full bg-[#ffe3cf]/70" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-0.5 w-10 bg-[#ff6b00]" />
            <span className="text-sm font-bold uppercase tracking-wider text-[#ff6b00]">{contact.badge}</span>
          </div>

          <h2 className="mb-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-[#0b2a5b] sm:text-4xl lg:text-[42px]">
            {contact.heading.main}
            <br />
            <span className="text-[#ff6b00]">{contact.heading.highlight}</span> {contact.heading.end}
          </h2>

          <div className="grid gap-8 sm:grid-cols-[1fr_minmax(200px,0.85fr)] sm:gap-6">
            <div>
              <p className="mb-8 text-[15px] leading-relaxed text-gray-600">{contact.description}</p>

              <ul className="space-y-7">
                {contact.info.map((item) => (
                  <li key={item.id} className="flex gap-4">
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white shadow-md ${
                        item.color === 'orange' ? 'bg-[#ff6b00] shadow-orange-500/30' : 'bg-[#0b2a5b] shadow-blue-900/30'
                      }`}
                    >
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <div className="pt-0.5">
                      <div className="mb-0.5 text-[17px] font-bold text-[#0b2a5b]">{item.title}</div>
                      <div className="text-[15px] font-medium text-gray-700">{item.value}</div>
                      {item.subText && <div className="mt-0.5 text-[13px] text-gray-500">{item.subText}</div>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative hidden min-h-[320px] pb-3 pl-3 pt-3 sm:block">
              <div className="absolute left-0 top-0 h-1/2 w-3/4 rounded-[28px] rounded-br-none bg-[#0b2a5b]" />
              <div className="absolute bottom-0 left-0 h-1/3 w-1/2 rounded-[22px] rounded-tr-none bg-[#ff6b00]" />
              <div className="relative h-full overflow-hidden rounded-[36px] rounded-br-[20px] rounded-tl-[60px] border-4 border-white shadow-[0_16px_40px_rgba(11,28,61,0.18)]">
                <Image
                  src={contact.image}
                  alt="Technician servicing a split AC"
                  fill
                  sizes="(min-width: 1024px) 280px, 40vw"
                  className="object-cover object-[60%_20%]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-[0_10px_40px_rgba(11,28,61,0.1)]">
          <div className="relative overflow-hidden bg-[#0b2a5b] px-6 py-6 sm:px-8">
            <Icon
              name="snowflake"
              strokeWidth={1.2}
              className="pointer-events-none absolute -right-4 top-1/2 h-36 w-36 -translate-y-1/2 text-white/15"
            />
            <h3 className="relative mb-2 text-2xl font-extrabold text-white sm:text-[28px]">
              {form.heading.main} <span className="text-[#ff6b00]">{form.heading.highlight}</span>
            </h3>
            <p className="relative max-w-sm text-[13px] leading-relaxed text-gray-300">{form.description}</p>
          </div>

          <form className="grid gap-5 p-6 sm:grid-cols-2 sm:p-8">
            <Field label={fields.name.label} required={fields.name.required} icon="userCheck">
              <input type="text" name="name" placeholder={fields.name.placeholder} required className={inputClass} />
            </Field>
            <Field label={fields.phone.label} required={fields.phone.required} icon="phone">
              <input type="tel" name="phone" placeholder={fields.phone.placeholder} required className={inputClass} />
            </Field>
            <Field label={fields.email.label} required={fields.email.required} icon="envelope">
              <input type="email" name="email" placeholder={fields.email.placeholder} required className={inputClass} />
            </Field>
            <Field label={fields.date.label} icon="calendar">
              <input type="date" name="date" className={`${inputClass} text-gray-500`} />
            </Field>
            <SelectField
              name="serviceType"
              label={fields.serviceType.label}
              required
              icon="settings"
              placeholder={fields.serviceType.placeholder}
              options={fields.serviceType.options}
            />
            <SelectField
              name="acType"
              label={fields.acType.label}
              icon="acUnit"
              placeholder={fields.acType.placeholder}
              options={fields.acType.options}
            />
            <Field label={fields.message.label} required={fields.message.required} icon="clipboardCheck" className="sm:col-span-2">
              <textarea name="message" rows={3} placeholder={fields.message.placeholder} required className={`${inputClass} resize-none`} />
            </Field>

            <div className="flex gap-3 pt-1 sm:col-span-2">
              <button
                type="submit"
                className="flex flex-[2] items-center justify-center gap-2 rounded-md bg-[#ff6b00] px-4 py-3 text-sm font-bold text-white shadow-md shadow-orange-500/25 transition hover:bg-[#e55f00]"
              >
                {form.submitBtn}
                <Icon name="arrowRight" className="h-4 w-4" />
              </button>
              <button
                type="reset"
                className="flex-1 rounded-md border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-[#0b2a5b] transition hover:bg-gray-50"
              >
                {form.resetBtn}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="relative mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:mt-16 lg:px-8">
        <div className="grid overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(11,28,61,0.1)] lg:grid-cols-[1fr_300px]">
          <div className="relative h-[320px] lg:h-[300px]">
            <iframe
              title={`Map: ${map.address}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(map.embedQuery)}&z=15&output=embed`}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="pointer-events-none absolute left-1/2 top-1/2 w-56 -translate-x-1/2 -translate-y-[calc(100%+44px)] rounded-lg bg-white px-4 py-3 shadow-lg">
              <div className="mb-1 text-sm font-bold text-[#0b2a5b]">{map.locationTitle}</div>
              <div className="text-xs leading-snug text-gray-600">{map.address}</div>
              <span className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white" />
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#0b2a5b]">{map.cardTitle}</h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-600">{map.cardText}</p>
            <a
              href={map.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#ff6b00] px-6 py-3 text-sm font-bold text-white shadow-md shadow-orange-500/25 transition hover:bg-[#e55f00]"
            >
              <Icon name="navigation" className="h-4 w-4" />
              {map.btnText}
              <Icon name="arrowRight" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
