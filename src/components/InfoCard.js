import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({ info }) {
  return (
    <div className="py-7 sm:px-2 flex flex-col space-y-4 sm:flex-row sm:space-x-5 sm:space-y-0 border-b first:border-t last:border-b-0 sm:infocard__hover">
      <div className="relative h-56 w-full sm:h-24 sm:w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={info.img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="space-y-4 sm:space-y-0 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">{info.location}</p>
            <HeartIcon className="h-6 hover:scale-125 cursor-pointer hover:fill-rose-600 hover:text-rose-600 transition-all" />
          </div>

          <h4 className="text-lg">{info.title}</h4>
          <p className="text-sm text-gray-500 pt-2 flex-grow">
            {info.description}
          </p>
        </div>

        <div className="flex justify-between items-end">
          <p className="flex items-center">
            <StarIcon className="h-4 pr-1 text-amber-500" />
            {info.star}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold sm:pb-1">{info.price}</p>
            <p className="hidden sm:block text-right font-extralight">{info.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
