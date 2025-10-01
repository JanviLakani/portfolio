import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FiArrowDownRight } from "react-icons/fi";
import star from "../../assets/img/starr.webp";

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

        <div
          className="col-span-5 lg:col-span-3 p-4
             bg-regal-offwhite dark:bg-regal-offBlack 
             flex flex-col md:flex-row justify-between 
             rounded-3xl relative overflow-hidden 
             h-[250] xl:h-[360px]"
        >
          <div className="relative w-[300px] h-74">
            <div className="absolute -top-5 -left-10"></div>
            <img
              src="/public/img/phone_card-image-02.webp"
              alt="phone"
              className="w-[260px] lg:w-[200px] xl:w-full h-[260px] lg:h-[200px] xl:h-full"
            />
          </div>

          <div className="flex flex-col justify-between p-4 -order-1 md:order-1">
            <div className="flex -space-x-4 relative mb-4">
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src="/public/img/women_project_img.webp"
                alt=""
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-pink-800"
                src="/public/img/men.webp"
                alt=""
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src="/public/img/women_project_img.webp"
                alt=""
              />
            </div>

            <div>
              <p className="text-7xl font-bold">80%</p>
              <p>
                Clients come back for <br /> a new projects
              </p>
            </div>
          </div>
        </div>

        {/* robort valu card not manage order  */}

        <div
          className="col-span-5 lg:col-span-3 p-4 
             bg-regal-offwhite dark:bg-regal-offBlack 
             flex flex-col md:flex-row relative 
             rounded-3xl h-auto md:h-[360px] overflow-hidden justify-between"
        >
          <div className="flex flex-col justify-between -order-1">
            <div>
              <p className="text-7xl font-bold">5+</p>
              <p>
                Years of professional <br />
                experience in designing <br />
                digital products
              </p>
            </div>

            <a
              href="#"
              className="bg-transparent px-5 py-2 rounded-2xl 
                 inline-block mt-4 border-2 w-fit"
            >
              Start New Project
              <FiArrowDownRight className="inline ml-3" />
            </a>
          </div>

          <div className="relative w-[300px] h-74">
            <div className="absolute -top-5 -left-9 md:-right-10">
              <img
                src="/public/img/robort_card-image-03.webp"
                alt="robot"
                className="w-[280px] md:w-[320px] xl:w-[350px] h-auto"
              />
            </div>
          </div>
        </div>

        <div
          className="col-span-5 lg:col-span-2 p-4  
                bg-regal-offwhite dark:bg-regal-offBlack 
                flex flex-col md:flex-row relative 
                rounded-3xl h-auto md:h-[360px] overflow-hidden justify-between"
        >
          <div className="flex flex-col justify-between -order-1 ">
            <div>
              <p className="text-7xl font-bold">70+</p>
              <p>
                Successfully <br />
                completed project
              </p>
            </div>

            <a
              href="#"
              className="bg-transparent px-5 py-2 rounded-2xl 
                 inline-block mt-4 border-2 w-fit"
            >
              Works
              <GoArrowUpRight className="inline ml-3" />
            </a>
          </div>

          <div className="  relative w-[300px] h-74">
            <div className="absolute -top-5 -left-9 md:-right-17">
              <img
                src="/public/img/camera_card-image-04.webp"
                alt="camera"
                className="w-[220px] md:w-[280px] xl:w-[360px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
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
