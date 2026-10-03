import type { Metadata } from 'next';

import PageBanner from '@/components/common/PageBanner';
import BookService from '@/components/BookService';

import { site } from '@/data';

export const metadata: Metadata = {
  title: `${site.pageBanners.pages.book.title} | CoolFix`,
  description: site.book.description,
};

export default function BookServicePage() {
  return (
    <main className="min-h-screen bg-white">

      <PageBanner page="book" />
      <BookService />

    </main>
  );
}
