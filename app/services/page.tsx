import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTABanner from '../../components/CTABanner';
import Highlights from '../../components/Highlights';
import PageBanner from '../../components/common/PageBanner';
import ServicesGrid from '../../components/ServicesGrid';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="sticky top-0 z-50 flex w-full flex-col bg-white shadow-md">
        <Header />
        <Navbar />
      </div>

      <PageBanner page="services" />

      <ServicesGrid />

      <CTABanner />

      <Highlights />

      <Footer />
    </main>
  );
}
