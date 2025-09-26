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

function Home(props) {
  return (
    <div className="">
      {/* <h1 className="text-3xl font-bold underline ">Hello world!</h1>   */}

      <div className="container bg-[var(--primary-color)] text-black dark:bg-[var(--dark-primary-color)] dark:text-white">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-6">
            <h1 className="text-4xl">
              Creating bold visual narratives that inspire and engage.
            </h1>
          </div>

          <div class="col-span-6">
            <video width="320" height="240" controls>
              <source src="https://html.aqlova.com/videos/bfolio/video.mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
