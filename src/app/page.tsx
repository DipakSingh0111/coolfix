import Slider from '@/components/Slider';
import Steps from '@/components/Steps';
import About from '@/components/About';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import Highlights from '@/components/Highlights';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Slider />
      <Steps />
      <About />
      <Services />
      <Stats />
      <Testimonials />
      <CTABanner />
      <Highlights />
    </main>
  );
}
