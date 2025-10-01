import React from 'react';

function Homes(props) {
    return (
        <div>
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
              narratives that <br /> good morning
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
        </div>
    );
}

export default Homes;