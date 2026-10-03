import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Highlights from '../components/Highlights';
import CTABanner from '../components/CTABanner';
import Steps from '../components/Steps';
import Stats from '../components/Stats';
import data from '../data/content.json';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="sticky top-0 z-50 flex w-full flex-col bg-white shadow-md">
        <Header />
        <Navbar />
      </div>
      <Slider />

      <Steps />

      <About />
      <Services />

      <Stats />

      <Testimonials />
      <CTABanner />
      <Highlights />

      <Footer />
    </main>
  );
}
