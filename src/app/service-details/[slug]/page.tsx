import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import PageBanner from '@/components/common/PageBanner';
import ServiceDetails from '@/components/ServiceDetails';

import { site } from '@/data';

const findService = (slug: string) => site.serviceDetails.items.find((item) => item.slug === slug);

export const dynamicParams = false;

export function generateStaticParams() {
  return site.serviceDetails.items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps<'/service-details/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) return {};

  return {
    title: `${service.label} | CoolFix`,
    description: service.sections[0].text,
  };
}

export default async function ServiceDetailsSlugPage({ params }: PageProps<'/service-details/[slug]'>) {
  const { slug } = await params;
  if (!findService(slug)) notFound();

  return (
    <main className="min-h-screen bg-white">

      <PageBanner page="serviceDetails" />
      <ServiceDetails data={site.serviceDetails} slug={slug} />

    </main>
  );
}
