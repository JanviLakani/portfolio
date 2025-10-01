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

import React from "react";
import Project from "../../component/Project/Project";
// import Portfolio from "../../component/Portfolio/Portfolio";
import Grid from "../../component/Grid/Grid";

function Home(props) {
  const tec = ["Agency", "Portfolio", "branding", "design", "Development"];
  return (
    <>
      <div className="container mx-auto justify-between items-center relative">
        <div className="grid grid-cols-12 gap-4 mt-5">
          <div className="col-span-12 lg:col-span-7">
            <p className="text-[40px] md:text-[50px] lg:text-[55px] leading-tight text-[#B6BCC6]">
              Creating bold visual
            </p>
            {/* <p className="text-6xl  text-[#B6BCC6] ml-15">
              Creating bold visual
            </p> */}

            <p className="text-[40px] md:text-[50px] lg:text-[55px] leading-snug text-black dark:text-white">
              narratives that <br /> inspire and engage.
            </p>
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
      </div>

      {/*       
        <div className="flex mt-10 bg-gray-700 text-white rounded-full  justify-between px-8 py-3 ">
          <span className="animate-marquee ">Portfolio</span>
          <span className="animate-marquee">Development</span>
          <span className="animate-marquee ">Branding</span>
          <span className="animate-marquee ">Design</span>
          <span className="animate-marquee ">Development</span>
        </div> */}

      <div className="overflow-hidden whitespace-nowrap bg-gray-700 text-white rounded-full mt-10 ">
        <div className="animation-Line inline-block py-3 px-8">
          <span className="px-[150px]">Agency</span>
          <span className="px-[150px]">Portfolio</span>
          <span className="px-[150px]">Development</span>
          <span className="px-[150px]">Branding</span>
          <span className="px-[150px]">Design</span>
          <span className="px-[150px]">Branding</span>
        </div>
        <div className="animation-Line animation-Line2 inline-block py-3 px-8">
          <span className="px-[150px]">Agency</span>
          <span className="px-[150px]">Portfolio</span>
          <span className="px-[150px]">Development</span>
          <span className="px-[150px]">Branding</span>
          <span className="px-[150px]">Design</span>
          <span className="px-[150px]">Branding</span>
        </div>
      </div>

      <div className="w-[97%] mx-auto px-[150px] bg-green-700 text-white rounded-full mt-3 py-3  flex">
        <ul className="flex scroll-Hor">
          {tec.map((v, i) => (
            <li className="px-[150px]">{v}</li>
          ))}
        </ul>

        <ul className="flex scroll-Hor">
          {tec.map((v, i) => (
            <li className="px-[150px]">{v}</li>
          ))}
        </ul>
      </div>

      <br />
      <br />

      <a
        href="#"
        className="inline-block bg-black text-white  px-5 py-3 rounded-2xl mt-7 group "
      >
        <span className="inline-block relative overflow-hidden">
          <span className="block  group-hover:-translate-y-full transition-transform duration-300">
            About me
          </span>
          <span className="block absolute top-0 left-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            About meeee
          </span>
        </span>
      </a>

      

      <Project />
      {/* <Portfolio/>  */}
      <Grid />

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
