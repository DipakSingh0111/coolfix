import Topbar from '@/components/Topbar';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import { site, type HeaderData, type SectionProps, type TopbarData } from '@/data';
import { cn } from '@/lib/cn';

type SiteHeaderData = {
  topbar?: TopbarData;
  header?: HeaderData;
};

export default function SiteHeader({ data, className }: SectionProps<SiteHeaderData> = {}) {
  const topbar = data?.topbar || site.topbar;
  const header = data?.header || site.header;

  return (
    <div className={cn('sticky top-0 z-50 flex w-full flex-col bg-white', className)}>
      <Topbar data={topbar} />
      <Header data={header} />
      <Navbar data={header} />
    </div>
  );
}
