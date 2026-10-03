import Icon from '@/components/Icon';
import { site, type SectionProps, type TopbarData } from '@/data';
import { cn } from '@/lib/cn';

export default function Topbar({ data, className }: SectionProps<TopbarData> = {}) {
  const topbar = data || site.topbar;

  return (
    <div className={cn('relative hidden h-14 bg-[#0b1c3d] text-base text-white md:block', className)}>
      <div
        className="absolute inset-y-0 left-0 w-[48%] bg-[#ff6b00] lg:w-[38%]"
        style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 28px) 100%, 0 100%)' }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Icon name="gear" className="h-5 w-5" />
          <span className="text-[15px] font-semibold">{topbar.tagline}</span>
        </div>

        <div className="flex items-center gap-5 text-gray-200">
          {topbar.highlights.map((item, idx) => (
            <div key={item.label} className="flex items-center gap-5">
              {idx > 0 && <span className="h-5 w-px bg-white/20" />}
              <div className="flex items-center gap-2.5">
                <Icon name={item.icon} className="h-5 w-5 text-[#ff6b00]" />
                <span className="text-[15px]">{item.label}</span>
              </div>
            </div>
          ))}

          <div className="ml-2 hidden items-center gap-3 border-l border-white/20 pl-5 lg:flex">
            {topbar.socials.map((social) => {
              const getSocialStyle = (iconName: string) => {
                switch (iconName.toLowerCase()) {
                  case 'facebook': return { backgroundColor: '#3b5998' };
                  case 'instagram': return { background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' };
                  case 'youtube': return { backgroundColor: '#ff0000' };
                  case 'whatsapp': return { backgroundColor: '#25d366' };
                  default: return { backgroundColor: 'rgba(255, 255, 255, 0.1)' };
                }
              };
              return (
                <a
                  key={social.icon}
                  href={social.href || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={getSocialStyle(social.icon)}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition hover:opacity-80"
                >
                  <Icon name={social.icon} className="h-4 w-4 text-white" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
