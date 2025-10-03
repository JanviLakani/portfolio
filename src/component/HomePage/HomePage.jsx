import React from "react";

function HomePage(props) {
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
    </div>
  );
}

export default HomePage;

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


// portfolio link 

// https://braxton-reactjs-bright-portfolio.netlify.app/home-image 
// https://preview.themeforest.net/item/blayden-personal-portfolio-resume-nextjs-template/full_screen_preview/59673134
