import Image from "next/image";
import airbnbLogo from "../assets/img/airbnb-logo.svg";
import airbnbIcon from "../assets/img/airbnb-icon.svg";
import { SearchIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header className="sticky top-0 p-3 md:px-5 grid grid-cols-3 z-50 bg-white !font-Nunito-Sans shadow-md">
      {/* Left */}
      <div className="relative h-10 cursor-pointer my-auto">
        <Image
          src={airbnbLogo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          className="!hidden md:!block"
        />
        <Image
          src={airbnbIcon}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          className="md:!hidden"
        />
      </div>

      {/* Middle */}
      <div className="flex justify-between items-center p-2 border-2 rounded-full">
        <input className="flex-grow" type="text" placeholder="Where are you going?" />
        <button className="search__btn">
          <SearchIcon className="h-6 inline" /> <span>Search</span>
        </button>
      </div>

      {/* Right */}
    </header>
  );
}

export default Header;
