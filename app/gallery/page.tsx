import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTABanner from '../../components/CTABanner';
import PageBanner from '../../components/common/PageBanner';
import GalleryGrid from '../../components/GalleryGrid';
import data from '../../data/content.json';

export default function GalleryPage() {
  const { gallery } = data;

  return (
    <main className="min-h-screen bg-white">
      <div className="sticky top-0 z-50 flex w-full flex-col bg-white shadow-md">
        <Header />
        <Navbar />
      </div>

      <PageBanner page="gallery" />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-[#ff6b00]"></div>
              <span className="text-[13px] font-semibold tracking-widest text-[#ff6b00] uppercase">
                {gallery.tag}
              </span>
              <div className="w-10 h-0.5 bg-[#ff6b00]"></div>
            </div>
            <h2 className="text-4xl md:text-[42px] font-bold text-[#0b1c3d] mb-4">
              {gallery.titleStart} <span className="text-[#ff6b00]">{gallery.highlight}</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-[15px]">
              {gallery.description}
            </p>
          </div>

          {/* Photo Grid */}
          <GalleryGrid photos={gallery.photos} />

          {/* Load More */}
          <div className="flex justify-center">
            <button className="bg-[#ff6b00] hover:bg-[#e65c00] text-white px-8 py-3.5 rounded-full font-bold text-[15px] transition shadow-md shadow-orange-500/20">
              {gallery.loadMoreBtn}
            </button>
          </div>
          
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  );
}
