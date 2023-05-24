import React from "react";
import { MdTravelExplore } from "react-icons/md";
const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 bg-white">
      {/* desktop navbar */}
      <div className="w-full  py-5 flex flex-row px-20 justify-between">
        <div className="flex flex-row gap-2 items-center">
          <MdTravelExplore className="text-sky-500" size={30} />
          <span className="text-2xl font-extrabold text-black">Travel</span>
        </div>
        <div className="">
          <ul className="flex flex-row  items-center gap-10 text-md font-medium cursor-pointer ">
            <li className="hover:underline transition">Home</li>
            <li className="hover:underline transition">Packages</li>
            <li className="hover:underline transition">Shop</li>
            <li className="hover:underline transition">About</li>
            <li className="hover:underline transition">Pages</li> 
            <li className="hover:underline transition">News</li>
            <li className="hover:underline transition">Contact</li>
            <button className="py-2 px-4 rounded-2xl bg-sky-500 text-white hover:bg-sky-600 transition-all">Book Now</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
