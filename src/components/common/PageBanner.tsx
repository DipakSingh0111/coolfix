import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { site, type BannerPage, type PageBannersData, type SectionProps } from '@/data';
import { cn } from '@/lib/cn';

type PageBannerProps = SectionProps<PageBannersData> & {
  page: BannerPage;
};

export default function PageBanner({ page, data, className }: PageBannerProps) {
  const banners = data || site.pageBanners;
  const pageData = banners.pages[page];
  const { title } = pageData;
  const parent = 'parent' in pageData ? pageData.parent : undefined;
  const breadcrumbs: { label: string; href?: string }[] = [
    { label: banners.homeLabel, href: banners.homeHref },
    ...(parent ? [{ label: parent.label, href: parent.href }] : []),
    { label: title },
  ];

  return (
    <section className={cn('relative z-[1] block overflow-hidden py-20 sm:py-24 lg:pb-[90px] lg:pt-[110px]', className)}>
      <div className="absolute inset-0 -z-[1]">
        <Image src={banners.backgroundImage} alt="" fill preload sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[#1c1c1c] opacity-75" />
      </div>

      <div
        aria-hidden="true"
        className="absolute -bottom-[260px] -top-[260px] left-[40px] z-0 w-[140px] rotate-[34deg] bg-[#fe5800] opacity-60 sm:left-[120px] sm:w-[200px] lg:left-[207px] lg:w-[250px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-4xl font-bold capitalize leading-none text-white sm:text-5xl lg:text-[72px]">{title}</h1>

        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 text-base font-semibold capitalize leading-[30px] text-white md:text-xl">
            {breadcrumbs.map((crumb, idx) => (
              <Fragment key={`${crumb.label}-${idx}`}>
                {idx > 0 && (
                  <li aria-hidden="true">
                    <span>-</span>
                  </li>
                )}
                <li>
                  {crumb.href ? (
                    <Link href={crumb.href} className="transition-colors delay-100 duration-200 ease-linear hover:text-[#ff6b00]">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page">{crumb.label}</span>
                  )}
                </li>
              </Fragment>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
