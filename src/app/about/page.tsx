import type { Metadata } from 'next';

import PageBanner from '@/components/common/PageBanner';
import About from '@/components/About';
import Stats from '@/components/Stats';
import WhyChooseUs from '@/components/WhyChooseUs';
import Steps from '@/components/Steps';

import { site } from '@/data';

export const metadata: Metadata = {
  title: `${site.pageBanners.pages.about.title} | CoolFix`,
  description: site.about.description,
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">

      <PageBanner page="about" />
      <About showButton={false} />
      <Stats />
      <WhyChooseUs />
      <Steps />

    </main>
  );
}
