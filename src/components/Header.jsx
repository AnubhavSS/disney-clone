import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import man from "../assets/images/man.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

const Header = () => {
  const [toggle, settoggle] = useState(false);
  const [search, setsearch] = useState("");
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    // {
    //   name: "SEARCH",
    //   icon: HiMagnifyingGlass,
    // },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center gap-8">
        <img src={logo} className="w-[80px] object-cover md:w-[115px]" />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} key={index} />
          )}
        </div>
        <div className="md:hidden" onClick={() => settoggle((prev) => !prev)}>
          <HeaderItem name={""} Icon={HiDotsVertical} />
          {toggle && (
            <div className="absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-100 px-5 py-3">
              {menu.map(
                (item, index) =>
                  index > 2 && (
                    <HeaderItem name={item.name} Icon={item.icon} key={index} />
                  )
              )}
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-10">
        {" "}
        <input
          placeholder="Search..."
          className="bg-slate-950 py-2 px-4 text-gray-300"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <img src={man} className="w-[40px] rounded-full" />
      </div>
    </div>
  );
};

export default Header;
