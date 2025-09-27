import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FiArrowDownRight } from "react-icons/fi";

function Project(props) {
  return (
    <div className="container mx-auto">
      {/* h-screen */}
      <div class="grid grid-cols-5 gap-5 mt-7  ">
        <div class="col-span-2 p-4 bg-regal-purpul flex justify-between rounded-3xl">
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
              className=" inline-block bg-transparent border-2   dark:text-white px-2 py-2 rounded-2xl mt-4 w-fit "
            >
              Studio
              <GoArrowUpRight className="inline ml-2" />
            </a>
          </div>
        </div>

        {/* ==try  */}

        <div class="col-span-3 p-4 bg-white flex justify-between rounded-3xl">
          <img
            src="/public/img/phone_card-image-02.webp"
            alt=""
            className="w-74"
          />

          <div className="flex flex-col justify-between">
            {/* <a
              href="#"
              className=" inline-block bg-transparent border-2   dark:text-black px-2 py-2 rounded-2xl mt-4 w-fit "
            >
              Studio
              <GoArrowUpRight className="inline ml-2" />
            </a> */}

            <div className="flex -space-x-4 rtl:space-x-reverse">
              <img
                class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src="/public/img/women_project_img.webp"
                alt=""
              />
              <img
                class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src="/public/img/men.webp"
                alt=""
              />
              <img
                class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src="/public/img/women_project_img.webp"
                alt=""
              />
            </div>

            <div>
              <p className="text-7xl font-bold  dark:text-black">50+</p>
              <p className=" dark:text-black">
                Clients come back for <br />a new projects
              </p>
            </div>
          </div>

          {/* <h1 className=" bg-black dark:bg-white text-white  dark:text-black">
            hello
          </h1> */}

          {/* <div className="relative ">
            <p className="text-7xl bg-black dark:bg-white text-white  dark:text-black font-bold absolute bottom-0 right-0 pt-4">
              80%
            </p>
            <p className="bg-black dark:bg-white text-white  dark:text-black absolute right-0 bottom-0 ">
              Clients come back for a new projects
            </p>
          </div> */}
        </div>

        {/* ===try  */}

        {/* ==  */}

        {/* <div class="col-span-3 p-4 bg-white flex justify-between rounded-3xl">
          <img
            src="/public/img/phone_card-image-02.webp"
            alt=""
            className="w-74"
          />

          <h1 className=" bg-black dark:bg-white text-white  dark:text-black">
            hello
          </h1>

          <div className="relative ">
            <p className="text-7xl bg-black dark:bg-white text-white  dark:text-black font-bold absolute bottom-0 right-0 pt-4">
              80%
            </p>
            <p className="bg-black dark:bg-white text-white  dark:text-black absolute right-0 bottom-0 ">
              Clients come back for a new projects
            </p>
          </div>
        </div> */}

        {/* ==  */}

        <div class="col-span-3 p-4 bg-white flex justify-between rounded-3xl">
          <div className="relative ">
            <p className="text-7xl bg-black dark:bg-white text-white  dark:text-black font-bold">
              5+
            </p>
            <p className="bg-black dark:bg-white text-white  dark:text-black">
              Years of professional <br />
              experience in designing <br /> digital products
            </p>

            <a
              href="#"
              className="bg-white dark:bg-black text-black  dark:text-white px-5 py-2 rounded-2xl inline-block mt-4 absolute bottom-0 right-0 border-1"
            >
              Start New Project
              <FiArrowDownRight />
            </a>
          </div>

          <img
            src="/public/img/robort_card-image-03.webp"
            alt=""
            className="w-74"
          />
        </div>

        {/* <div class="col-span-2 p-4 bg-yellow-200 ">04</div> */}
        <div class="col-span-2 p-4 bg-white flex justify-between rounded-3xl">
          <div className="relative ">
            <p className="text-7xl bg-black dark:bg-white text-white  dark:text-black font-bold">
              70+
            </p>
            <p className="bg-black dark:bg-white text-white  dark:text-black">
              Successfully <br />
              completed projects
            </p>

            <a
              href="#"
              //   className="bg-black dark:bg-white text-white  dark:text-black px-5 py-2 rounded-2xl inline-block mt-4 absolute bottom-0 right-0"
              className="bg-white dark:bg-black text-black  dark:text-white px-5 py-2 rounded-2xl inline-block mt-4 absolute bottom-0 left-0 border-1"
            >
              Works
              {/* <GoArrowUpRight /> */}
            </a>
          </div>

          <img
            src="/public/img/camera_card-image-04.webp"
            alt=""
            className="w-74"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;

// https://mixdesign.dev/themeforest/rayo/index-main.html
