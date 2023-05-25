import React from "react";
import images from "@/public/images/index";
import Card from "../Card/Card";
import Image from "next/image";
import { MdLocationPin } from "react-icons/md";
import {FaClipboardCheck} from 'react-icons/fa'

const Destination = () => {
  const Data = [
    {
      id: 1,
      imgSrc: "/images/img1.jpg",
      destTitle: "Bora Bora",
      location: "New Zealand",
      grade: "Cultural Relax",
      feees: "$700",
      description:
        "The epitome of romance, Bora Bora is one of the best travel destinationsin the world. This place is known for its luxurious stays and advanterous activities",
    },
    {
      id: 1,
      imgSrc: "/images/img2.jpg",
      destTitle: "Bora Bora",
      location: "New Zealand",
      grade: "Cultural Relax",
      feees: "$700",
      description:
        "The epitome of romance, Bora Bora is one of the best travel destinationsin the world. This place is known for its luxurious stays and advanterous activities",
    },
    {
      id: 1,
      imgSrc: "/images/img3.jpg",
      destTitle: "Bora Bora",
      location: "New Zealand",
      grade: "Cultural Relax",
      feees: "$700",
      description:
        "The epitome of romance, Bora Bora is one of the best travel destinationsin the world. This place is known for its luxurious stays and advanterous activities",
    },
    {
      id: 1,
      imgSrc: "/images/img4.jpg",
      destTitle: "Bora Bora",
      location: "New Zealand",
      grade: "Cultural Relax",
      feees: "$700",
      description:
        "The epitome of romance, Bora Bora is one of the best travel destinationsin the world. This place is known for its luxurious stays and advanterous activities",
    },
    {
      id: 1,
      imgSrc: "/images/img5.jpg",
      destTitle: "Bora Bora",
      location: "New Zealand",
      grade: "Cultural Relax",
      feees: "$700",
      description:
        "The epitome of romance, Bora Bora is one of the best travel destinationsin the world. This place is known for its luxurious stays and advanterous activities",
    },
    {
      id: 1,
      imgSrc: "/images/img6.jpg",
      destTitle: "Bora Bora",
      location: "New Zealand",
      grade: "Cultural Relax",
      feees: "$700",
      description:
        "The epitome of romance, Bora Bora is one of the best travel destinationsin the world. This place is known for its luxurious stays and advanterous activities",
    },
    {
      id: 1,
      imgSrc: "/images/img7.jpg",
      destTitle: "Bora Bora",
      location: "New Zealand",
      grade: "Cultural Relax",
      feees: "$700",
      description:
        "The epitome of romance, Bora Bora is one of the best travel destinationsin the world. This place is known for its luxurious stays and advanterous activities",
    },
    {
      id: 1,
      imgSrc: "/images/img8.jpg",
      destTitle: "Bora Bora",
      location: "New Zealand",
      grade: "Cultural Relax",
      feees: "$700",
      description:
        "The epitome of romance, Bora Bora is one of the best travel destinationsin the world. This place is known for its luxurious stays and advanterous activities",
    },
    {
      id: 1,
      imgSrc: "/images/img9.jpg",
      destTitle: "Bora Bora",
      location: "New Zealand",
      grade: "Cultural Relax",
      feees: "$700",
      description:
        "The epitome of romance, Bora Bora is one of the best travel destinationsin the world. This place is known for its luxurious stays and advanterous activities",
    },
    {
        id: 1,
        imgSrc: "/images/img10.jpg",
        destTitle: "Bora Bora",
        location: "New Zealand",
        grade: "Cultural Relax",
        feees: "$700",
        description:
          "The epitome of romance, Bora Bora is one of the best travel destinationsin the world. This place is known for its luxurious stays and advanterous activities",
      },
  ];
  return (
    <div className=" my-10 mx-10 flex flex-col justify-center items-center ">
      <h1 className=" py-5 text-2xl font-bold text-black">
        Most Visited Destinations
      </h1>
      <div className=" flex flex-row flex-wrap gap-10 justify-center">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, feees, description }) => (
            <div key={id} className="w-64 mb-4  font-semibold text-sm  rounded-xl shadow-md shadow-slate-400 ">
              <div className="w-64 h-40">
                <img
                  className="w-full h-full object-cover cursor-pointer rounded-t-xl "
                  src={imgSrc}
                  alt={destTitle}
                />
              </div>
              <div className="my-3 px-2 py-2">
                <h1 className="text-xl pt-3 font-bold text-black cursor-pointer hover:underline">
                  {destTitle}
                </h1>
                <span className="text-md pb-3 text-sky-500 inline-flex items-center gap-2 cursor-pointer hover:underline">
                  <MdLocationPin className="font-bold" size={20} /> {location}
                </span>
                <span className=" w-full py-3 inline-flex gap-5 items-center border-t-2 border-b-2 h cursor-pointer">
                  {grade}
                  <span className="font-bold text-2xl py-2 text-black">{feees}</span>
                </span>
                <p className="py-2">{description}</p>
                <button className="py-2 px-4 bg-sky-500 hover:bg-sky-600 mt-2 text-lg text-white rounded-2xl inline-flex gap-2 items-center">
                  Details 
                  <FaClipboardCheck />
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Destination;
