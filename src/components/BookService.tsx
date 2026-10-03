import Image from 'next/image';
import Icon from '@/components/Icon';
import { Field, SelectField, inputClass } from '@/components/common/FormFields';
import { site, type BookServiceData, type SectionProps } from '@/data';
import { cn } from '@/lib/cn';

export default function BookService({ data, className }: SectionProps<BookServiceData> = {}) {
  const book = data || site.book;
  const { form, helpBadge } = book;
  const { fields } = form;

  return (
    <section className={cn('relative overflow-hidden bg-linear-to-b from-[#f6f8fc] to-white py-16 md:py-20', className)}>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-6 xl:grid-cols-[minmax(0,1fr)_520px]">
          <div className="relative flex flex-col lg:min-h-[640px]">
            <div className="absolute -right-28 bottom-16 left-[30%] top-0 hidden lg:block">
              <Image
                src={book.image}
                alt="Technician servicing a split AC"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[45%_center]"
              />
              <div className="absolute inset-y-0 left-0 w-1/2 bg-linear-to-r from-[#f6f8fc] via-[#f6f8fc]/70 to-transparent" />
              <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-[#f6f8fc] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white to-transparent" />
            </div>

            <div className="relative z-10 lg:max-w-[360px]">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-0.5 w-10 bg-[#ff6b00]" />
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff6b00]">{book.badge}</span>
              </div>

              <h2 className="mb-5 text-[34px] font-extrabold leading-[1.15] text-[#0b1c3d] sm:text-4xl xl:text-[42px]">
                {book.heading.main}
                <br />
                <span className="whitespace-nowrap">
                  <span className="text-[#ff6b00]">{book.heading.highlight}</span> {book.heading.end}
                </span>
              </h2>

              <p className="mb-9 text-[15px] leading-relaxed text-gray-500">{book.description}</p>

              <ul className="space-y-6">
                {book.featuresLeft.map((feature) => (
                  <li key={feature.title} className="flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#fff1e8] text-[#ff6b00]">
                      <Icon name={feature.icon} className="h-6 w-6" />
                    </span>
                    <div>
                      <h4 className="mb-0.5 text-[16px] font-bold text-[#0b1c3d]">{feature.title}</h4>
                      <p className="text-[13px] text-gray-500">{feature.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-8 h-72 overflow-hidden rounded-2xl sm:h-96 lg:hidden">
              <Image
                src={book.image}
                alt="Technician servicing a split AC"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <div className="relative z-10 -mt-12 mx-4 overflow-hidden rounded-2xl bg-[#0b1c3d] p-6 shadow-[0_18px_40px_rgba(11,28,61,0.3)] sm:mx-8 sm:p-7 lg:mx-0 lg:ml-[14%] lg:mt-auto lg:max-w-[480px]">
              <Icon
                name="acUnit"
                strokeWidth={1}
                className="pointer-events-none absolute -right-6 top-1/2 h-40 w-40 -translate-y-1/2 text-white/10"
              />
              <div className="relative flex items-center gap-5">
                <Icon name="headset" strokeWidth={1.4} className="h-14 w-14 shrink-0 text-white" />
                <div>
                  <h4 className="text-xl font-bold text-white">{helpBadge.title}</h4>
                  <p className="mb-4 text-sm text-gray-300">{helpBadge.subtitle}</p>
                  <a
                    href={`tel:${helpBadge.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2 rounded-full bg-[#ff6b00] px-5 py-2.5 text-[15px] font-bold text-white shadow-md shadow-orange-500/25 transition hover:bg-[#e55f00]"
                  >
                    <Icon name="phone" className="h-4 w-4" />
                    {helpBadge.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 self-start overflow-hidden rounded-xl border border-gray-100 bg-white shadow-[0_10px_40px_rgba(11,28,61,0.12)]">
            <div className="relative overflow-hidden bg-[#0b1c3d] px-6 py-6 sm:px-8">
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
              />
              <Field label={fields.date.label} required={fields.date.required} icon="calendar">
                <input type="date" name="date" required className={`${inputClass} text-gray-500`} />
              </Field>
              <SelectField
                name="time"
                label={fields.time.label}
                required={fields.time.required}
                icon="clock"
                placeholder={fields.time.placeholder}
                options={fields.time.options}
              />
              <Field label={fields.address.label} required={fields.address.required} icon="location" className="sm:col-span-2">
                <input type="text" name="address" placeholder={fields.address.placeholder} required className={inputClass} />
              </Field>
              <Field label={fields.notes.label} icon="clipboardCheck" className="sm:col-span-2">
                <textarea name="notes" rows={3} placeholder={fields.notes.placeholder} className={`${inputClass} resize-none`} />
              </Field>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-md bg-[#ff6b00] px-4 py-3.5 text-sm font-bold text-white shadow-md shadow-orange-500/25 transition hover:bg-[#e55f00] sm:col-span-2"
              >
                {form.submitBtn}
                <Icon name="arrowRight" className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-y-8 gap-x-2 border-t border-gray-100 pt-10 sm:gap-8 lg:grid-cols-4 lg:gap-0">
          {book.featuresBottom.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 sm:gap-4 lg:justify-center lg:border-l lg:border-gray-200 lg:px-4 lg:first:border-l-0"
            >
              <span className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#ff6b00]/70 text-[#ff6b00]">
                <Icon name={feature.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
              <div>
                <h4 className="mb-0.5 text-[14px] sm:text-[15px] font-bold text-[#0b1c3d]">{feature.title}</h4>
                <p className="text-[12px] sm:text-[13px] text-gray-500">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
