import type { Metadata } from 'next';

import PageBanner from '@/components/common/PageBanner';
import Gallery from '@/components/Gallery';
import CTABanner from '@/components/CTABanner';

import { site } from '@/data';

export const metadata: Metadata = {
  title: `${site.pageBanners.pages.gallery.title} | CoolFix`,
  description: site.gallery.description,
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">

      <PageBanner page="gallery" />
      <Gallery />
      <CTABanner />

    </main>
  );
}
