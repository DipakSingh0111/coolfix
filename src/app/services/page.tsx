import type { Metadata } from 'next';

import PageBanner from '@/components/common/PageBanner';
import ServicesGrid from '@/components/ServicesGrid';
import CTABanner from '@/components/CTABanner';
import Highlights from '@/components/Highlights';

import { site } from '@/data';

export const metadata: Metadata = {
  title: `${site.pageBanners.pages.services.title} | CoolFix`,
  description: site.services.description,
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">

      <PageBanner page="services" />
      <ServicesGrid />
      <CTABanner />
      <Highlights />

    </main>
  );
}
