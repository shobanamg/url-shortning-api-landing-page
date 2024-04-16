import BoostLink from '@/components/sections/BoostLink';
import Features from '@/components/sections/Features';
import Hero from '@/components/sections/Hero';
import UrlShorter from '@/components/urlShorter/UrlShorter';

const Home = () => {
  return (
    <main className="overflow-hidden text-center">
      <Hero />
      <section className="bg-light-violet p-6">
        <UrlShorter />
      </section>
      <Features />
      <BoostLink />
    </main>
  );
};

export default Home;
