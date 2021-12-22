import Header from "../components/Header";
import Hero from "../components/Hero";
import Explore from "../components/Explore";

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="antialiased">
        <Hero />
        <Explore />
      </main>
    </>
  );
}
