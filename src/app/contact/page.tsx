import type { Metadata } from 'next';

import PageBanner from '@/components/common/PageBanner';
import ContactSection from '@/components/ContactSection';

import { site } from '@/data';

export const metadata: Metadata = {
  title: `${site.pageBanners.pages.contact.title} | CoolFix`,
  description: site.contact.description,
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">

      <PageBanner page="contact" />
      <ContactSection />

    </main>
  );
}
