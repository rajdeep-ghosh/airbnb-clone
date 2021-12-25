import Header from "../components/Header";
import Hero from "../components/Hero";
import Explore from "../components/Explore";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import { experience } from "../data";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-gray-50 selection:bg-airbnb_red antialiased">
        <Hero />
        <Explore />
        <Banner title="Not sure where to go? Perfect." cta="I'm flexible" first={true} />
        <Cards section="live" content={experience.live} />
        <Cards section="discover" content={experience.discover} />
        <Banner title="Try hosting" cta="Learn more" first={false} />
      </main>

      <Footer />
    </>
  );
}
