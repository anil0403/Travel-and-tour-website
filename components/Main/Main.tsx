import React from "react";
import { AiFillFilter } from "react-icons/ai";
import { useState } from "react";
const Main = () => {
  const [price, setPrice] = useState(1000);
  return (
    <div className="w-full h-[80vh] relative ">
      <div className="absolute h-full w-full bg-black/40 z-1"></div>
      <video
        className=" w-[100%] h-[100%] top-0 bottom-0 object-cover"
        src="/video/video.mp4"
        autoPlay
        muted
        loop
        typeof="video/mp4"
      ></video>
      <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center">
        <div className="md:w-[90%] lg:w-[80%]">
          <div className="w-full flex flex-col items-start mb-10">
            <span className="text-md font-semibold text-white">
              Our Packages
            </span>
            <h1 className="text-3xl font-bold text-white">
              Search Your Holiday
            </h1>
          </div>

          <div className="w-full flex flex-col gap-4 bg-white rounded-xl p-8 md:flex-row md:gap-20 md:justify-between md:relative md:py-10">
            <div className="flex flex-col gap-2 w-full">
              <label className="font-semibold " htmlFor="destination">
                Search your destination
              </label>
              <input
                className="outline-none bg-gray-200 rounded-2xl px-2 py-1 text-sm font-semibold"
                type="text"
                placeholder="Pokhara"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="font-semibold" htmlFor="destination">
                Select your date
              </label>
              <input
                className="outline-none bg-gray-200 rounded-2xl px-2 py-1 text-sm font-semibold"
                type="date"
                placeholder="Pokhara"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label
                className="font-semibold flex flex-row justify-between"
                htmlFor="destination"
              >
                Max price : <span> Rs. {price}</span>
              </label>
              <input
                className="outline-none bg-gray-200 rounded-2xl px-2 py-1 text-sm font-semibold"
                type="range"
                placeholder="Pokhara"
                min={1000}
                max={100000}
                onChange={(e: any) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
            <button className=" py-2 bg-sky-500 rounded-2xl text-md font-semibold text-white hover:bg-sky-600 flex flex-row items-center justify-center gap-3 md:absolute  md:px-5 md:-bottom-5 md:right-[40%]">
              <AiFillFilter size={20} color="white" /> More Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
