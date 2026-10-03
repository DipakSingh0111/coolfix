import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { site, type HeaderData, type SectionProps } from '@/data';
import { cn } from '@/lib/cn';

export default function Header({ data, className }: SectionProps<HeaderData> = {}) {
  const header = data || site.header;

  return (
    <header className={cn('w-full border-b border-gray-100 bg-white py-4', className)}>
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
    </header>
  );
}
