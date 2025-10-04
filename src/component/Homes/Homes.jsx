import React from "react";
import { RiMenu5Line } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";

function Homes() {
  return (

    <section className="bg-black text-white min-h-screen flex items-center bg-[url('/public/img/vactor7.png')] bg-cover bg-center z-555 pt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
        <div className="items-center bg-regal-gray rounded-2xl shadow-lg p-6 flex flex-col w-full md:w-80 lg:w-110 xl:w-130 ">
          <img
            src="/public/img/working_girl.jpg"
            alt="myimg"
            className="w-3/4 xl:w-full h-85 xl:h-100 object-cover rounded-md mb-6"
          />

          <h2 className="text-2xl font-bold">Janvi </h2>
          <p className="text-green-400 font-semibold mb-2">React developer</p>
          <p className="text-xs text-gray-500 mb-2">
            from, BitKhanan IT Education
          </p>

          <p className="text-gray-300 text-sm mb-3">
            lakanijanvi1999@gmail.com
          </p>

          <div className="flex space-x-4 sm:space-x-5 mt-4">
            <a
              href="#"
              className="w-8 sm:w-11 md:w-8 lg:w-10 h-8 sm:h-11 md:h-8 lg:h-10 flex items-center justify-center rounded-full bg-regal-lightgray shadow hover:bg-white hover:text-black  transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/JanviLakani/gitprojecttry23_09"
              className="w-8 sm:w-11 md:w-8 lg:w-10 h-8 sm:h-11 md:h-8 lg:h-10 flex items-center justify-center rounded-full bg-regal-lightgray hover:bg-white hover:text-black transition"
            >
              <BsGithub />
            </a>
            <a
              href="#"
              className="w-8 sm:w-11 md:w-8 lg:w-10 h-8 sm:h-11 md:h-8 lg:h-10 flex items-center justify-center rounded-full bg-regal-lightgray hover:bg-white hover:text-black transition"
            >
              <BsTwitterX />
            </a>

            <a
              href="#"
              className="w-8 sm:w-11 md:w-8 lg:w-10 h-8 sm:h-11 md:h-8 lg:h-10 flex items-center justify-center rounded-full bg-regal-lightgray hover:bg-white hover:text-black transition"
            ></a>
            <a
              href="#"
              className="w-8 sm:w-11 md:w-8 lg:w-10 h-8 sm:h-11 md:h-8 lg:h-10 flex items-center justify-center rounded-full bg-regal-lightgray hover:bg-white hover:text-black transition"
            ></a>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-left text-green-400 font-semibold mb-2 text-3xl sm:text-4xl lg-text-5xl xl:text-6xl ">

            
            Hello! I'm Janvi
          </p>
          <h1 className=" text-center md:text-left text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold leading-tight mb-4 ">
            Empower Code <br /> Intelligence
          </h1>
          <p className="text-gray-400 mb-8 text-center md:text-left">
            Hello! I’m a passionate Frontend Developer skilled in React,
            TailwindCSS, and JavaScript. As a fresher, I enjoy building clean,
            responsive, and user-friendly websites while learning and growing
            with every project.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-regal-gray p-6 rounded-xl shadow-md text-center ">
              <h2 className="text-2xl lg:text-3xl font-bold">10+</h2>
              <p className="text-gray-400 text-xs lg:text-sm">Years in AI Development</p>
            </div>
            <div className="bg-regal-gray p-6 rounded-xl shadow-md text-center">
              <h2 className="text-3xl font-bold">500+</h2>
              <p className="text-gray-400 text-sm">Satisfied Clients</p>
            </div>
            <div className="bg-regal-gray p-6 rounded-xl shadow-md lg:text-center">
              <h2 className="text-3xl font-bold">1k+</h2>
              <p className="text-gray-400 text-sm">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homes;



