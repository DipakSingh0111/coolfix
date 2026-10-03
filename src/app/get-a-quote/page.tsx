import type { Metadata } from 'next';

import PageBanner from '@/components/common/PageBanner';
import GetQuote from '@/components/GetQuote';

import { site } from '@/data';

export const metadata: Metadata = {
  title: `${site.pageBanners.pages.getAQuote.title} | CoolFix`,
  description: site.getQuote.description,
};

export default function GetAQuotePage() {
  return (
    <main className="min-h-screen bg-white">

      <PageBanner page="getAQuote" />
      <GetQuote />

    </main>
  );
}
