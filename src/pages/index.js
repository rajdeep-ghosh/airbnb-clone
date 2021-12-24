import Header from "../components/Header";
import Hero from "../components/Hero";
import Explore from "../components/Explore";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import { experience } from "../data";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-gray-50 selection:bg-airbnb_red antialiased">
        <Hero />
        <Explore />
        <Banner />
        <Cards section={experience.live} />
      </main>
    </>
  );
}
