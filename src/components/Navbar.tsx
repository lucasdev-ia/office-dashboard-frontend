import Image from "next/image";
import logoPadrao from "../assets/logo_padrao.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div>
          <Image
            src={logoPadrao}
            alt="Office Logo"
            width={120}
            height={30}
            priority
          />
        </div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
}
