import Header from "../components/Header";
import Hero from "../components/Hero";
import Explore from "../components/Explore";

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="bg-gray-50 antialiased">
        <Hero />
        <Explore />
      </main>
    </>
  );
}
