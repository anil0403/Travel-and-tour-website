import React from "react";
import images from "@/public/images/index";
import Card from "../Card/Card";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
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
      <h1 className=" py-3 text-xl font-bold text-black">
        Most Visited Destinations
      </h1>
      <div className=" flex flex-row flex-wrap gap-10 justify-center">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, feees, description }) => (
            <div className="w-60  font-semibold text-sm  rounded-xl shadow-md shadow-slate-400">
              <div className="w-60 h-40">
                <img
                  className="w-full h-full object-cover cursor-pointer rounded-t-xl "
                  src={imgSrc}
                  alt={destTitle}
                />
              </div>
              <div className="my-3 px-2">
                <h1 className="text-lg font-bold text-black cursor-pointer hover:underline">
                  {destTitle}
                </h1>
                <span className="text-md text-sky-500 inline-flex items-center gap-2 cursor-pointer hover:underline">
                  <CiLocationOn /> {location}
                </span>
                <span className=" w-full inline-flex gap-2 items-center border-t-2 border-b-2 py-2">
                  {grade}
                  <span className="font-bold text-lg text-red-600">{feees}</span>
                </span>
                <p>{description}</p>
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
