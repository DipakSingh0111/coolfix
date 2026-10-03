import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageBanner from '../../components/common/PageBanner';
import About from '../../components/About';
import Stats from '../../components/Stats';
import WhyChooseUs from '../../components/WhyChooseUs';
import Steps from '../../components/Steps';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="sticky top-0 z-50 flex w-full flex-col bg-white shadow-md">
        <Header />
        <Navbar />
      </div>

      <PageBanner page="about" />

      <About showButton={false} />
      
      <Stats />
      
      <WhyChooseUs />
      
      <Steps />

      <Footer />
    </main>
  );
}
