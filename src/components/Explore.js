import Image from "next/image";
import { explore } from "../data";

function Explore() {
  return (
    <section className="mx-6 sm:mx-14 xl:mx-40 mt-12 !font-Nunito-Sans selection:text-white">
      <h1 className="text-3xl font-extrabold">Explore nearby</h1>
      <div className="my-7 grid grid-cols-[repeat(auto-fit,_minmax(241px,_1fr))] gap-6 hide__XScrollbar">
        {explore?.map((item, idx) => (
          <div
            key={idx}
            className="group flex items-center space-x-6 hover:bg-white rounded-xl hover:drop-shadow-lg transition-all duration-200 cursor-pointer"
          >
            <div className="relative h-[85px] w-[85px] rounded-xl drop-shadow-2xl">
              <Image
                src={`/images/explore/${idx}.jpg`}
                layout="fill"
                objectFit="cover"
                alt={item.name}
                className="rounded-xl group-hover:scale-75 transition-all duration-200"
              />
            </div>
            <div className="transform group-hover:-translate-x-4 transition ease-linear duration-200">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <h3 className="text-gray-500">{item.time}-hour drive</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Explore;
