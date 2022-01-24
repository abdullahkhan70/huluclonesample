import Image from "next/image";
import HeaderItems from "./HeaderItems";
import { Labels } from "../utils/string";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <header className="flex flex-col md:justify-between md:flex-row m-5 items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItems title={Labels.HOME} Icon={HomeIcon} />
        <HeaderItems title={Labels.TREDNING} Icon={LightningBoltIcon} />
        <HeaderItems title={Labels.VERIFIED} Icon={BadgeCheckIcon} />
        <HeaderItems title={Labels.COLLECTION} Icon={CollectionIcon} />
        <HeaderItems title={Labels.SEARCH} Icon={SearchIcon} />
        <HeaderItems title={Labels.ACCOUNT} Icon={UserIcon} />
      </div>
      <Image
        className={"object-contain"}
        src={require("../assets/images/hulu_white.png")}
        width={200}
        height={100}
        alt={"The logo is not available."}
      />
    </header>
  );
}

export default Header;
