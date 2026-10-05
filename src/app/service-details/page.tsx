import type { Metadata } from 'next';

import PageBanner from '@/components/common/PageBanner';
import ServiceDetails from '@/components/ServiceDetails';

import { site } from '@/data';

const [{ hero, sections }] = site.serviceDetails.items;

export const metadata: Metadata = {
  title: `${hero.heading.main} ${hero.heading.highlight} | CoolFix`,
  description: sections[0].text,
};

export default function ServiceDetailsPage() {
  return (
    <main className="min-h-screen bg-white">

      <PageBanner page="serviceDetails" />
      <ServiceDetails data={site.serviceDetails} />

    </main>
  );
}
