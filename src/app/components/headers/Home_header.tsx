import React from "react";
import Image from "next/image";
import Logo from "../../../images/logo.png";
import { SearchIcon } from "lucide-react";

export default function Home_header() {
  return (
    <section className=" max-w-sm md:max-w-4xl m-auto px-4 ">
      {/* logo  */}
      <div className="flex justify-between items-center">
        <div className="logo m-auto">
          <Image
            src={Logo}
            width={200}
            height={100}
            alt="logo"
            className=" block m-auto  object-contain h-20 invert_img"
          />
        </div>
      </div>
      {/* Search */}
      <div className="flex justify-center items-center mt-5">
        <div className="search_container border-solid border border-zinc-400  p-3 rounded-full w-9/12 lg:w-80">
          <input
            type="text"
            placeholder="Search"
            className="search_input rounded-3xl  pl-2 w-10/12 dark:bg-transparent"
          />
          <button className="search_btn float-right mt-1">
            {" "}
            <SearchIcon className=" h-4 text-zinc-500" />
          </button>
        </div>
      </div>
      <div className="divider border  w-full bg-zinc-600 mt-10 m-auto"></div>
      {/* divider */}
    </section>
  );
}
