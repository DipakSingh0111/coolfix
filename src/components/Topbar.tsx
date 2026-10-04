import Icon from '@/components/Icon';
import { site, type SectionProps, type TopbarData } from '@/data';
import { cn } from '@/lib/cn';

export default function Topbar({ data, className }: SectionProps<TopbarData> = {}) {
  const topbar = data || site.topbar;

  return (
    <div className={cn('relative hidden h-13 overflow-hidden bg-[#0b2a5b] text-white md:block', className)}>
      <div className="mx-auto flex h-full max-w-7xl items-stretch justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-stretch gap-8 lg:gap-10">
          <div className="relative flex items-center gap-2.5 pr-6">
            <div
              className="absolute inset-y-0 right-0 w-screen bg-[#ff6b00]"
              style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 22px) 100%, 0 100%)' }}
            />
            <Icon name="cog" className="relative h-5 w-5" />
            <span className="relative text-sm font-medium">{topbar.tagline}</span>
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            {topbar.highlights.map((item, idx) => (
              <div key={item.label} className="flex items-center gap-4">
                {idx > 0 && <span className="h-5 w-px bg-white/40" />}
                <div className="flex items-center gap-2">
                  <Icon name={item.icon} className="h-5 w-5 text-[#ff6b00]" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          {topbar.socials.map((social) => (
            <a
              key={social.icon}
              href={social.href || '#'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-[#06183a] transition hover:bg-[#ff6b00]"
            >
              <Icon name={social.icon} className="h-4 w-4 text-white" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
