function Hero() {
  return (
    <section className="bg-[url('../assets/img/hero.jpg')] bg-top bg-cover h-fit pt-60 px-12 pb-24 font-Nunito-Sans">
      <div className="max-w-[40%] space-y-6">
        <h1 className="text-[clamp(2rem,_5.5vw,_3.25rem)] leading-[1.2] font-black text-white capitalize">
          shine like the whole universe is yours
        </h1>
        <button className="btn w-40 h-[3.25rem] py-3 px-6 text-xl font-semibold bg-white text-indigo-900 ring-white ring-offset-indigo-900 whitespace-nowrap capitalize">
          explore now
        </button>
      </div>
    </section>
  );
}

export default Hero;
