import Boost from '@/components/sections/BoostLink';
import Features from '@/components/sections/Features';
import Hero from '@/components/sections/Hero';
import UrlShortner from '@/components/sections/UrlShortner';

const Home = () => {
  return (
    <main className="overflow-hidden text-center">
      <Hero />
      <section className="bg-light-violet p-6">
        <UrlShortner />
      </section>
      <Features />
      <Boost />
    </main>
  );
};

export default Home;
