'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/Icon';
import { site, type HeaderData, type SectionProps } from '@/data';
import { cn } from '@/lib/cn';

type NavLink = {
  label: string;
  href: string;
  icon?: string;
  children?: { label: string; href: string }[];
};

const tabClip = { clipPath: 'polygon(0 0, 100% 0, calc(100% - 12px) 100%, 0 100%)' };

export default function Navbar({ data, className }: SectionProps<HeaderData> = {}) {
  const header = data || site.header;
  const links: NavLink[] = header.menu;
  const { cta } = header;
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className={cn('relative z-50 h-8 w-full bg-white', className)}>
      <div className="absolute inset-x-0 top-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-15 items-center justify-between rounded-xl border border-gray-100 bg-white pl-4 pr-2 shadow-[0_8px_30px_rgba(11,28,61,0.12)]">
          <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
            {links.map((link) => {
              const active = link.href === pathname;
              return (
                <li key={link.label} className="group relative">
                  <Link
                    href={link.href}
                    style={active ? tabClip : undefined}
                    className={cn(
                      'flex h-10 items-center gap-2 text-[15px] font-semibold transition',
                      active
                        ? 'rounded-l-md bg-[#ff6b00] pl-4 pr-9 text-white'
                        : 'px-1 text-[#0b1c3d] hover:text-[#ff6b00]',
                    )}
                  >
                    {link.icon && <Icon name={link.icon} className="h-5 w-5" />}
                    {link.label}
                    {link.children && <Icon name="chevronDown" className="ml-1 h-4 w-4 transition group-hover:rotate-180" />}
                  </Link>

                  {link.children && (
                    <ul className="invisible absolute left-0 top-full min-w-56 translate-y-2 rounded-md border-t-2 border-[#ff6b00] bg-white py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="block px-5 py-2 text-sm font-medium text-[#0b1c3d] transition hover:bg-orange-50 hover:pl-6 hover:text-[#ff6b00]"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-md bg-[#0b1c3d] text-white lg:hidden"
          >
            <Icon name={menuOpen ? 'close' : 'menu'} className="h-5 w-5" />
          </button>

          <Link
            href={cta.href}
            className="flex h-10 items-center gap-2 rounded-full bg-[#ff6b00] px-4 text-sm font-semibold text-white shadow-md shadow-orange-500/30 transition hover:bg-[#e55f00] sm:h-11 sm:gap-3 sm:px-5 sm:text-[15px]"
          >
            <Icon name="calendarClock" className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.6} />
            {cta.label}
            <Icon name="arrowRight" className="hidden h-4 w-4 sm:block" />
          </Link>
        </div>

        {menuOpen && (
          <div className="mt-2 rounded-xl border border-gray-100 bg-white shadow-lg lg:hidden">
            <ul className="px-4 py-2">
              {links.map((link) => {
                const active = link.href === pathname;
                const expanded = openDropdown === link.label;
                return (
                  <li key={link.label} className="border-b border-gray-100 last:border-0">
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`block flex-1 py-3 font-semibold ${active ? 'text-[#ff6b00]' : 'text-[#0b1c3d]'}`}
                      >
                        {link.label}
                      </Link>
                      {link.children && (
                        <button
                          type="button"
                          onClick={() => setOpenDropdown(expanded ? null : link.label)}
                          aria-label={`Toggle ${link.label}`}
                          className="p-2 text-[#0b1c3d]"
                        >
                          <Icon name="chevronDown" className={`h-4 w-4 transition ${expanded ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                    {link.children && expanded && (
                      <ul className="pb-2 pl-4">
                        {link.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              onClick={() => setMenuOpen(false)}
                              className="block py-2 text-sm text-gray-600 hover:text-[#ff6b00]"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
