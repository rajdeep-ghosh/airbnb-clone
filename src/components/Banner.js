function Banner() {
  return (
    <section className="mx-6 sm:mx-14 xl:mx-40 mt-12 bg-[url('/images/banner-m.jpg')] xs:bg-[url('/images/banner.jpg')] bg-center bg-cover py-24 p-12 aspect-[0.75/1] xs:aspect-auto !font-Nunito-Sans rounded-2xl">
      <span className="flex flex-col items-center xs:items-start space-y-6 w-full xs:max-w-[40%] !font-Nunito-Sans">
        <h1 className="text-[clamp(1.75rem,_3vw,_2.25rem)] leading-tight font-extrabold text-[#3f3f1a] text-center xs:text-left selection:text-white">
          Not sure where to go? Perfect.
        </h1>
        <button className="btn sm:w-40 sm:h-[3.25rem] py-2 sm:py-3 px-4 sm:px-6 sm:text-lg font-semibold bg-[#3f3f1a] text-[#ffffd6] ring-[#3f3f1a] ring-offset-[#ffffd6] whitespace-nowrap">
          I'm flexible
        </button>
      </span>
    </section>
  );
}

export default Banner;
