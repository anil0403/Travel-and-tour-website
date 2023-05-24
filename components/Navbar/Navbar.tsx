import { useState, useCallback } from "react";
import { MdTravelExplore } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(true);
  const toggleHandler = useCallback(() => {
    setMenuToggle((prev) => !prev);
  }, []);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white ">
      {/* desktop navbar */}
      <div className=" w-full  py-5 flex flex-row lg:px-20 px-5 justify-between">
        <div className="flex flex-row gap-2 items-center justify-between">
          <MdTravelExplore className="text-sky-500" size={30} />
          <span className="text-2xl font-extrabold text-black">Travel</span>
        </div>

        <div className="hidden md:block lg:block">
          <ul className="flex flex-row  items-center lg:gap-10 md:gap-5 text-md font-medium cursor-pointer ">
            <li className="hover:underline transition">Home</li>
            <li className="hover:underline transition">Packages</li>
            <li className="hover:underline transition">Shop</li>
            <li className="hover:underline transition">About</li>
            <li className="hover:underline transition">Pages</li>
            <li className="hover:underline transition">News</li>
            <li className="hover:underline transition">Contact</li>
            <button className="py-2 px-4 rounded-2xl bg-sky-500 text-white hover:bg-sky-600 transition-all">
              Book Now
            </button>
          </ul>
        </div>
        <CgMenuGridR
          onClick={toggleHandler}
          className="text-sky-500 md:hidden lg:hidden cursor-pointer"
          size={30}
        />

        {menuToggle && (
          <div className="w-full h-max absolute top-20 left-0 flex flex-col  items-center z-50">
            <ul className="bg-white m-5 px-14 pb-5 pt-8 flex flex-col items-center rounded-xl gap-3 relative">
              <AiOutlineCloseCircle
                onClick={toggleHandler}
                className="absolute right-4 top-4 bg-sky-500 rounded-full cursor-pointer"
                color="white"
                size={30}
              />
              <li className="hover:underline cursor-pointer transition">
                Home
              </li>
              <li className="hover:underline cursor-pointer transition">
                Packages
              </li>
              <li className="hover:underline cursor-pointer transition">
                Shop
              </li>
              <li className="hover:underline cursor-pointer transition">
                About
              </li>
              <li className="hover:underline cursor-pointer transition">
                Pages
              </li>
              <li className="hover:underline cursor-pointer transition">
                News
              </li>
              <li className="hover:underline cursor-pointer transition">
                Contact
              </li>
              <button className="py-2 px-4 rounded-2xl bg-sky-500 text-white hover:bg-sky-600 transition-all cursor-pointer">
                Book Now
              </button>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
