import Image from "next/image";
import airbnbLogo from "../assets/img/airbnb-logo.svg";
import airbnbIcon from "../assets/img/airbnb-icon.svg";
import { SearchIcon, MenuIcon } from "@heroicons/react/outline";
import { GlobeAltIcon, UserCircleIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header 
      className="sticky top-0 flex justify-between items-center p-3 md:px-5 z-50 bg-white !font-Nunito-Sans shadow-md"
    >
      {/* Left */}
      <div className="relative h-10 cursor-pointer my-auto">
        <Image
          src={airbnbLogo}
          width="105px"
          height="50px"
          objectFit="contain"
          className="!hidden md:!block"
        />
        <Image
          src={airbnbIcon}
          layout="fill"
          objectFit="contain"
          className="md:!hidden"
        />
      </div>

      {/* Middle */}
      <div className="flex justify-between items-center p-2 w-[40vw] max-w-3xl border-2 rounded-full sm:shadow-sm">
        <input
          className="flex-1 px-5 text-lg bg-transparent outline-none"
          type="text"
          placeholder="Where are you going?"
        />
        <button className="btn rounded-full bg-airbnb_red text-white ring-airbnb_red">
          <SearchIcon className="h-6 inline" />{" "}
          <span className="hidden md:inline">Search</span>
        </button>
      </div>

      {/* Right */}
      <div className="flex space-x-3 items-center text-zinc-500">
        <p className="hidden md:inline text-sm">Become a host</p>
        <GlobeAltIcon className="h-5 cursor-pointer" />
        <div className="flex items-center space-x-2 p-2 border-2 rounded-full">
          <MenuIcon className="h-5" />
          <UserCircleIcon className="h-5" />
        </div>
      </div>
    </header>
  );
}

export default Header;
