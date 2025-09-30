import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FiArrowDownRight } from "react-icons/fi";
import star from "../../assets/img/starr.webp";
import rotateImage from "../../assets/img/rotate.webp";
import { IoMdAperture } from "react-icons/io";

function Project(props) {
  return (
    <div className="container mx-auto">
      <div class="grid grid-cols-5 gap-5 mt-7 ">
        <div class="overflow-hidden col-span-5 lg:col-span-2 p-4 bg-regal-purpul dark:bg-regal-yellow text-white dark:text-black  flex flex-col md:flex-row justify-between rounded-3xl  h-[250] xl:h-[360px]">
          <div className="relative w-[300px] h-74">
            <div className="  absolute -top-5 -left-10">
              <img
                src={star}
                alt=""
                className="w-[260px] lg:w-[200px] xl:w-full h-[260px] lg:h-[200px] xl:h-full"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between -order-1 md:order-1">
            <div>
              <p className="text-7xl font-bold">50+</p>
              <p>
                Happy clients who <br />
                trust my work
              </p>
            </div>

            <a
              href="#"
              className=" inline-block bg-transparent border-2   dark:text-black px-2 py-2 rounded-2xl mt-4 w-fit "
            >
              Studio
              <GoArrowUpRight className="inline ml-2" />
            </a>
          </div>
        </div>


        {/* === phone ===  */}

        <div class="col-span-5 lg:col-span-3  bg-regal-offwhite dark:bg-regal-offBlack flex justify-between rounded-3xl relative   h-[250] xl:h-[360px]">
          <img
            src="/public/img/phone_card-image-02.webp"
            alt=""
            className="w-74 rounded-3xl"
          />

          <div className="flex flex-col justify-between p-4">
            <div className="flex -space-x-4  relative">
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 absolute top-0 left-0"
                src="/public/img/women_project_img.webp"
                alt=""
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-pink-800 absolute top-0.5 left-4.5"
                src="/public/img/men.webp"
                alt=""
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 absolute top-0.5 left-8.5"
                src="/public/img/women_project_img.webp"
                alt=""
              />
            </div>

            <div>
              <p className="text-7xl font-bold ">50+</p>
              <p>
                Clients come back for <br />a new projects
              </p>
            </div>
          </div>
        </div>

        <div class=" col-span-5 lg:col-span-3 p-4 bg-regal-offwhite dark:bg-regal-offBlack flex  rounded-3xl relative overflow-hidden h-[300] xl:h-[360px]">
          <div className="flex flex-col justify-between ">
            <div>
              <p className="text-7xl font-bold">5+</p>
              <p className="">
                Years of professional <br />
                experience in designing <br /> digital products
              </p>
            </div>

            <a
              href="#"
              className="bg-transparent  px-5 py-2 rounded-2xl inline-block mt-4  border-2 w-fit"
            >
              Start New Project
              <FiArrowDownRight className="inline ml-3" />
            </a>
          </div>

          <img
            src="/public/img/robort_card-image-03.webp"
            alt=""
            className="w-[350px] h-74 absolute top-0 -right-8"
          />
        </div>

        <div class="col-span-5 lg:col-span-2 p-4  bg-regal-offwhite dark:bg-regal-offBlack flex relative  rounded-3xl h-[300px] xl:h-[360px]  overflow-hidden">
          <div className="flex flex-col justify-between ">
            <div>
              <p className="text-7xl font-bold">70+</p>
              <p>
                Successfully <br />
                completed project
              </p>
            </div>

            <a
              href="#"
              className="bg-transparent  px-5 py-2 rounded-2xl inline-block mt-4  border-2 w-fit"
            >
              Works
              <GoArrowUpRight className="inline ml-3" />
            </a>
          </div>

          <img
            src="/public/img/camera_card-image-04.webp"
            alt=""
            className="w-[220px] xl:w-[360px] h-50 xl:h-80 absolute top-0 -right-10"
          />
        </div>
      </div>

      <br />
      <br />

      {/* rotate circle  */}

      {/* <div className="relative w-25 h-25">
        <img
          src={rotateImage}
          className="mx-auto absolute top-0 left-0 rotateImg"
        />
        <IoMdAperture className="absolute top-1/2 left-1/2 transform -translate-1/2" />
      </div>

      // suare line continue 

      <p class="marquee">
        <span>
          This is text - This is text - This is text - This is text - This is
          text - This is text - This is text - This is text - This is text -
          This is text - This is text - This is text ;
        </span>
      </p>
      <p class="marquee marquee2">
        <span>
          This is text - This is text - This is text - This is text - This is
          text - This is text - This is text - This is text - This is text -
          This is text - This is text - This is text ;
        </span>
      </p> */}
    </div>
  );
}

export default Project;

// https://mixdesign.dev/themeforest/rayo/index-main.html

{
  /* <div class="col-span-2 p-4 bg-regal-purpul dark:bg-regal-yellow text-white dark:text-black  flex justify-between rounded-3xl">
          <img src="/public/img/starr.webp" alt="" className="w-74" />

          <div className="flex flex-col justify-between">
            <div>
              <p className="text-7xl font-bold">50+</p>
              <p>
                Happy clients who <br />
                trust my work
              </p>
            </div>

            <a
              href="#"
              className=" inline-block bg-transparent border-2   dark:text-black px-2 py-2 rounded-2xl mt-4 w-fit "
            >
              Studio
              <GoArrowUpRight className="inline ml-2" />
            </a>
          </div>
        </div> */
}
