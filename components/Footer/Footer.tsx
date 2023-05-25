import React from "react";
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { GrTwitter } from "react-icons/gr";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { TbBrandTripadvisor } from "react-icons/tb";
import {IoIosArrowForward} from 'react-icons/io'

const Footer = () => {
  return (
    <div className="w-full h-[140vh] md:h-[80vh] relative  xl:h-[70vh]">
      <div className="absolute h-full w-full bg-black/40 z-1"></div>
      <video
        className=" w-[100%] h-[100%] top-0 bottom-0 object-cover mix-blend-multiply"
        src="/video/video.mp4"
        autoPlay
        muted
        loop
        typeof="video/mp4"
      ></video>
      <div className="w-full h-full absolute top-0 left-0 z-1">
        <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
          <div className="w-[90%] flex flex-col gap-5 md:flex-row md:justify-center ">
            <h1 className="text-xl text-white font-bold py-1">
              <span className="text-sm font-light block">KEEP IN TOUCH</span>
              Travel With Us
            </h1>
            <input
              className="p-2  rounded-2xl bg-transparent ring-1 ring-white outline-none text-sm placeholder:text-white text-white md:w-[40%]"
              type="text"
              placeholder="Enter Enter Address"
            />
            <button className=" inline-flex gap-2 items-center justify-center bg-sky-500 hover:bg-sky-600 rounded-2xl py-2 md:py-0 font-semibold text-white md:px-4 ">
              SEND <FiSend />
            </button>
          </div>
          <div className="w-[90%] bg-white py-5 px-4 mt-5 rounded-2xl flex flex-col md:flex-row md:justify-between">
            <div className="w-[70%]">
              <div className="flex flex-row gap-2 items-center">
                <MdTravelExplore className="text-sky-500" size={30} />
                <span className="text-2xl font-extrabold text-black">
                  Travel
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At quam
                officiis, ab modi labore placeat. Culpa quasi animi cupiditate
                nobis quaerat repellendus in, voluptas, magnam obcaecati sit
                nesciunt minima quod.
              </p>
              <div className="flex flex-row gap-2 py-2 ">
                <GrTwitter className="cursor-pointer rounded-full p-2 hover:bg-gray-700 hover:text-white" size={40} />
                <AiFillInstagram className="cursor-pointer rounded-full p-2 hover:bg-gray-700 hover:text-white" size={40} />
                <AiFillYoutube className="cursor-pointer rounded-full p-2 hover:bg-gray-700 hover:text-white" size={40} />
                <TbBrandTripadvisor className="cursor-pointer rounded-full p-2 hover:bg-gray-700 hover:text-white" size={40} />
              </div>
            </div>
            <div className=" w-full md:w-[40%] flex flex-row gap-5 py-2 md:justify-end">
              <div>
                <h1 className="text-black text-md font-bold">OUR AGENCY</h1>
                <ul className="text-sm font-semibold flex flex-col gap-4 py-2">
                <li className="inline-flex items-center cursor-pointer hover:underline"> <IoIosArrowForward/>Services</li>
                  <li className="inline-flex items-center cursor-pointer hover:underline"> <IoIosArrowForward/>Insurance</li>
                  <li className="inline-flex items-center cursor-pointer hover:underline"> <IoIosArrowForward/>Agency</li>
                  <li className="inline-flex items-center cursor-pointer hover:underline"> <IoIosArrowForward/>Tourism</li>
                  <li className="inline-flex items-center cursor-pointer hover:underline"> <IoIosArrowForward/>Payment</li>

                </ul>
              </div>
              <div >
                <h1 className="text-black text-md font-bold">OUR PARTNERS</h1>
                <ul className="w-full text-sm font-semibold flex flex-col gap-4 py-2 ">
                <li className="inline-flex items-center cursor-pointer hover:underline"> <IoIosArrowForward/>Booking</li>
                  <li className="inline-flex items-center cursor-pointer hover:underline"> <IoIosArrowForward/>Rental Car</li>
                  <li className="inline-flex items-center cursor-pointer hover:underline"> <IoIosArrowForward/>Hostel World</li>
                  <li className="inline-flex items-center cursor-pointer hover:underline"> <IoIosArrowForward/>Trivago</li>
                  <li className="inline-flex items-center cursor-pointer hover:underline"> <IoIosArrowForward/>Trip Advisior</li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
