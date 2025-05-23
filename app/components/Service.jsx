"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import { serviceData } from "../Data/data";

const Service = () => {
  return (
    <div
      id="service"
      className="w-full mt-20 mb-20 scroll-mt-20 px-[12%] py-10 flex flex-col text-gray-50 justify-evenly"
    >
      <div>
        <h4 className="text-center font-Ovo">What I Offer</h4>
        <h2 className="text-center font-Ovo text-3xl">My Services</h2>
      </div>

      <p className="w-1/2 mx-auto text-center mt-4 text-gray-600 font-Ovo hover:text-gray-200">
        A passionate full stack developer with 1+ year of hands-on experience in
        building impactful projects using TypeScript, MERN, Next.js, WebSocket,
        AWS, and Kubernetes. Enthusiastic about problem-solving, system design,
        and exploring the intricacies of computer science.
      </p>

      <div className=" mt-4 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto gap-10 lg:mb-20">
        {serviceData.map((element, index) => (
          <Tilt key={index}>
            <div className="bg-gray-600 border-[0.5px] flex flex-col justify-evenly border-gray-900 md:w-[13rem] lg:w-[15vw] text-black rounded-xl p-6 mr-4 hover:bg-lightHover hover:text-gray-600 hover:-translate-y-1 duration-500 hover:shadow-black cursor-pointer">
              <h2 className="">{element.title}</h2>
              <h4 className="text-sm">{element.description}</h4>
              <p> Read More</p>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Service;
