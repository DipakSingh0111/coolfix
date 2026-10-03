import Image from 'next/image';
import Link from 'next/link';
import Icon from './Icon';
import data from '../data/content.json';

export default function Header() {
  const { topbar, header } = data;

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="relative hidden h-11 bg-[#0b1c3d] text-sm text-white md:block">
        <div
          className="absolute inset-y-0 left-0 w-[48%] bg-[#ff6b00] lg:w-[38%]"
          style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 28px) 100%, 0 100%)' }}
        />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Icon name="gear" className="h-4 w-4" />
            <span className="text-[13px] font-semibold">{topbar.tagline}</span>
          </div>

          <div className="flex items-center gap-5 text-gray-200">
            {topbar.highlights.map((item, idx) => (
              <div key={item.label} className="flex items-center gap-5">
                {idx > 0 && <span className="h-4 w-px bg-white/20" />}
                <div className="flex items-center gap-2">
                  <Icon name={item.icon} className="h-4 w-4 text-[#ff6b00]" />
                  <span className="text-[13px]">{item.label}</span>
                </div>
              </div>
            ))}

            <div className="ml-2 hidden items-center gap-2 border-l border-white/20 pl-5 lg:flex">
              {topbar.socials.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#ff6b00]"
                >
                  <Icon name={social.icon} className="h-3.5 w-3.5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Logo + Contact Info */}
      <div className="border-b border-gray-100 bg-white py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="-ml-2 shrink-0 sm:-ml-2.5">
            <Image
              src={header.logo.src}
              alt={header.logo.alt}
              width={header.logo.width}
              height={header.logo.height}
              preload
              className="h-12 w-auto sm:h-14"
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {header.contacts.map((contact, idx) => (
              <div key={contact.label} className="flex items-center gap-8">
                {idx > 0 && <span className="h-12 w-px bg-gray-200" />}
                <a href={contact.href} className="group flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-[#ff6b00] transition group-hover:bg-[#ff6b00] group-hover:text-white">
                    <Icon name={contact.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-gray-500">{contact.label}</span>
                    <span className="block text-base font-bold text-[#0b1c3d]">{contact.value}</span>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
