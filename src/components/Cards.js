import Image from "next/image";

function Cards({ section, content }) {
  return (
    <section className="mt-12 !font-Nunito-Sans selection:text-white">
      <h1 className="text-3xl font-extrabold">{content.heading}</h1>
      <div className="py-7 flex space-x-4 lg:justify-between overflow-scroll snap-x scrollbar-hide -mb-6">
        {content.items.map((item, idx) => (
          <div key={idx} className="group snap-center cursor-pointer">
            <div className={`relative ${section == "live" ? `h-56 w-56 lg:h-[17rem] lg:w-[17rem]` : `h-72 w-72 lg:h-96 lg:w-96`} drop-shadow-2xl rounded-xl`}>
              <Image
                src={`/images/${item.img}`}
                layout="fill"
                alt={item.title}
                objectFit="cover"
                className="rounded-xl group-hover:scale-95 transition-all duration-200"
              />
            </div>
            <h3 className="mt-5 text-xl md:text-2xl font-bold">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;
