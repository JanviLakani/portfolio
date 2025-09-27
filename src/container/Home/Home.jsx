// import React from "react";

// function Home(props) {
//   return (
//     <div className="bg-[var(--primary-color)] text-black dark:bg-[var(--dark-primary-color)] dark:text-white">
//       {/* <h1 className="text-3xl font-bold underline ">Hello world!</h1>   */}

//       <div className="container">
//         <div class="grid grid-cols-12 gap-4">

//           <div class="col-span-6">04</div>

//           <div class="col-span-6">07</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

{/* <a
  href="#"
  className="bg-black dark:bg-white 
             text-white dark:text-black 
             px-4 py-2 rounded-2xl hidden lg:inline-block
             hover:bg-gray-700 hover:text-yellow-400 
             dark:hover:bg-gray-200 dark:hover:text-blue-600"
>
  Let's Talk
</a> */}

import React from "react";

function Home(props) {
  return (
    <>
      <div className="container mx-auto justify-between items-center">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-7">
            <p className="text-[40px] md:text-[50px] lg:text-[55px] leading-tight text-[#B6BCC6]">
              Creating bold visual
            </p>
            {/* <p className="text-6xl  text-[#B6BCC6] ml-15">
              Creating bold visual
            </p> */}

            <p className="text-[40px] md:text-[50px] lg:text-[55px] leading-snug text-black dark:text-white">
              narratives that inspire <br /> and engage.
            </p>
            {/* <h1 className="text-3xl font-bold underline ">Hello world!</h1>   */}
          </div>
          <div className="col-span-12 lg:col-span-4">
            <video
              // width="400"
              // height="350"
              autoPlay
              muted
              loop
              // autoplay="true"
              className="w-full h-[250px] md:h-[500px] lg:h-[400px] rounded-2xl object-cover"
            >
              <source src="https://html.aqlova.com/videos/bfolio/video.mp4 " />
            </video>
          </div>
        </div>
        <div className="flex mt-10 bg-gray-700 text-white rounded-full  justify-between px-8 py-3">
          <span>Portfolio</span>
          <span>Development</span>
          <span>Branding</span>
          <span>Design</span>
          <span>Development</span>
        </div>
{/* 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-4">
          <div className="p-4 bg-pink-200">janvi</div>
          <div className="p-4 bg-pink-200">janvi</div>
          <div className="p-4 bg-pink-200">janvi</div>
          <div className="p-4 bg-pink-200">janvi</div>
        </div>

        <div className="grid grid-cols-3 my-10 space-x-4">
          <div className="bg-purple-400 p-4 row-span-2">ddfdf</div>
          <div className="bg-green-800 p-10">2</div>
          <div className="bg-blue-400 p-10">3</div>
          <div className="bg-red-400 p-10">4</div>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-5 text-center">
          <div className="bg-red-400 py-10 px-20">dswdw</div>
          <div className="bg-pink-400">lpkp</div>
          <div className="bg-yellow-400">sdsdfd</div>
          <div className="bg-green-300 col-span-2 py-17">sdsdsd</div>
        </div>

        <div className="bg-[url('/img/office_girl.jpg')] bg-cover bg-center w-full h-[500px]">
          jljljl
        </div> */}
      </div>

      {/* <div className="flex mt-10 bg-gray-700 text-white rounded-full  justify-between px-8 py-3">
        <span>Portfolio</span>
        <span>Development</span>
        <span>Branding</span>
        <span>Design</span>
        <span>Development</span>
      </div> */}
    </>
  );
}

export default Home;
