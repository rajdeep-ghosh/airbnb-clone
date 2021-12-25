function Banner({ title, cta, first }) {
  return (
    <section
      className={`mx-6 sm:mx-14 xl:mx-40 mt-12 ${first ? `bg-[url('/images/banner/banner-m.jpg')] xs:bg-[url('/images/banner/banner.jpg')]` : `bg-[url('/images/banner/banner2-m.jpg')] xs:bg-[url('/images/banner/banner2.jpg')]`} bg-center bg-cover py-24 p-12 aspect-[0.75/1] xs:aspect-auto !font-Nunito-Sans rounded-2xl`}
    >
      <span className="flex flex-col items-center xs:items-start space-y-6 w-full xs:max-w-[40%] !font-Nunito-Sans">
        <h1
          className={`text-[clamp(1.75rem,_3vw,_2.25rem)] leading-tight font-extrabold ${
            first ? `text-[#3f3f1a] ` : `text-[#fafafc]`
          } text-center xs:text-left selection:text-white`}
        >
          {title}
        </h1>
        {!first && (
          <p className="text-center xs:text-left font-semibold text-[#fafafc]">
            Earn extra income and unlock new oppurtunities by sharing your
            space.
          </p>
        )}
        <button
          className={`btn sm:w-40 sm:h-[3.25rem] py-2 sm:py-3 px-4 sm:px-6 sm:text-lg font-semibold ${
            first
              ? `bg-[#3f3f1a] text-[#ffffd6] ring-[#3f3f1a] ring-offset-[#ffffd6]`
              : `bg-[#fafafc] text-[#2e2e48] ring-[#fafafc] ring-offset-[#2e2e48]`
          } whitespace-nowrap`}
        >
          {cta}
        </button>
      </span>
    </section>
  );
}

export default Banner;
