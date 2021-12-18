import Image from "next/image";
import airbnbLogo from "../assets/img/airbnb-logo.svg";
import airbnbIcon from "../assets/img/airbnb-icon.svg";

function Header() {
  return (
    <header className="sticky top-0 p-3 md:px-5 grid grid-cols-3 z-50 bg-white shadow-md">
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

      {/* Right */}
    </header>
  );
}

export default Header;
