'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from './Icon';
import data from '../data/content.json';

type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export default function Navbar() {
  const links: NavLink[] = data.navbar.links;
  const { cta } = data.navbar;
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-[0_4px_20px_rgba(11,28,61,0.08)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <ul className="hidden items-center gap-1 lg:flex -ml-5">
            {links.map((link) => {
              const active = link.href === pathname;
              return (
                <li key={link.label} className="group relative">
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 rounded-md px-5 py-2 text-[15px] font-semibold transition ${
                      active ? 'bg-[#ff6b00] text-white' : 'text-[#0b1c3d] hover:text-[#ff6b00]'
                    }`}
                  >
                    {link.label}
                    {link.children && <Icon name="chevronDown" className="h-4 w-4 transition group-hover:rotate-180" />}
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
            className="flex items-center gap-2 rounded-md bg-[#ff6b00] px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-orange-500/30 transition hover:bg-[#e55f00]"
          >
            <Icon name="calendar" className="h-4 w-4" />
            {cta.label}
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
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
    </nav>
  );
}
