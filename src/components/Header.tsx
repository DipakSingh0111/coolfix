import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { site, type HeaderData, type SectionProps } from '@/data';
import { cn } from '@/lib/cn';

const tones: Record<string, string> = {
  orange: 'bg-[#fde8dc] text-[#ff6b00] group-hover:bg-[#ff6b00]',
  blue: 'bg-[#dde8fa] text-[#1d5fd1] group-hover:bg-[#1d5fd1]',
};

export default function Header({ data, className }: SectionProps<HeaderData> = {}) {
  const header = data || site.header;

  return (
    <header className={cn('w-full bg-white py-4', className)}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src={header.logo.src}
            alt={header.logo.alt}
            width={header.logo.width}
            height={header.logo.height}
            preload
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <div className="hidden flex-1 items-center justify-around lg:flex">
          <span className="h-12 w-px bg-gray-200" />
          {header.contacts.map((contact, idx) => (
            <div key={contact.label} className="contents">
              {idx > 0 && <span className="h-12 w-px bg-gray-200" />}
              <a href={contact.href} className="group flex items-center gap-4">
                <span
                  className={cn(
                    'flex h-12 w-12 items-center justify-center rounded-full transition group-hover:text-white',
                    tones[contact.tone] ?? tones.orange,
                  )}
                >
                  <Icon name={contact.icon} className="h-5.5 w-5.5" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-gray-600">{contact.label}</span>
                  <span className="block text-lg font-bold text-[#0b1c3d]">{contact.value}</span>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
