import Image from "next/image";

function Cards({ section }) {
  return (
    <section className="mx-6 sm:mx-14 xl:mx-40 mt-12 !font-Nunito-Sans selection:text-white">
      <h1 className="text-3xl font-extrabold">{section.heading}</h1>
      <div className="py-7 flex space-x-4 lg:justify-between overflow-scroll snap-x scrollbar-hide">
        {section.items.map((item, idx) => (
          <div key={idx} className="group snap-center cursor-pointer">
            <div className="relative h-56 lg:h-[17rem] w-56 lg:w-[17rem] drop-shadow-2xl rounded-xl">
              <Image
                src={item.img}
                layout="fill"
                alt={item.title}
                objectFit="cover"
                className="rounded-xl group-hover:scale-95 transition-all duration-200"
              />
            </div>
            <h3 className="mt-3 text-xl md:text-2xl font-bold">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;
