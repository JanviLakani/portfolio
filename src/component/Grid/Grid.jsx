import React from "react";

function Grid(props) {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-extrabold underline">Hello world!</h1>
      <h1 className="text-green-900 font-bold my-5">
        simple grid use with grid-cols <br />
        grid-template-columns
      </h1>
      <p className="text-green-900 font-bold my-5">
        Specifying the grid columns
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3 bg-yellow-800 text-center  text-white">
        <div className="bg-blue-500 p-3">01</div>
        <div className="bg-blue-500 p-3">02</div>
        <div className="bg-blue-500 p-3">03</div>
        <div className="bg-blue-500 p-3">04</div>
        <div className="bg-blue-500 p-3">05</div>
        <div className="bg-blue-500 p-3">06</div>
        <div className="bg-blue-500 p-3">07</div>
        <div className="bg-blue-500 p-3">08</div>
        <div className="bg-blue-500 p-3">09</div>
      </div>
      <br />
      <br />
      <hr />
      <h1 className="text-green-900 font-bold my-5">
        Implementing a subgrid subgrid subgrid
      </h1>
      <div className="grid grid-cols-4 gap-4 bg-green-200  text-white text-center">
        <div className="bg-green-800 p-4">01</div>
        <div className="bg-green-800 p-4">02</div>
        <div className="bg-green-800 p-4">03</div>
        <div className="bg-green-800 p-4">04</div>
        <div className="bg-green-800 p-4">05</div>

        <div className="col-span-3 grid grid-cols-subgrid gap-4 bg-green-800 p-4">
          <div className="col-start-2">06 Implementing a subgrid</div>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <h1 className="text-green-900 font-bold my-5 ">
        grid-column --- col-span
      </h1>
      <div className="grid grid-cols-3 gap-4 bg-blue-800 p-5  text-green-950 text-center">
        <div className="bg-green-200 p-4">01</div>
        <div className="bg-green-200 p-4">02</div>
        <div className="bg-green-200 p-4">03</div>
        <div className="col-span-2 bg-green-200 p-4 ">04</div>
        <div className="bg-green-200 p-4">05</div>
        <div className="bg-green-200 p-4">06</div>
        <div className="bg-green-200 p-4 col-span-2">07</div>
      </div>
      <br />
      <br />
      <hr />
      <div className="grid grid-cols-3 gap-6 bg-pink-700 p-5 text-center">
        <div className="bg-red-400 p-4">grid 1</div>
        <div className="bg-blue-400 p-4">grid 2</div>
        <div className="bg-green-400 p-4">grid 3</div>
        <div className="bg-amber-300 col-span-2 p-4">grid 4</div>
        <div className="bg-amber-300 col-span-1 p-4">grid 5</div>
        <div className="bg-amber-300 p-4 col-span-3">grid 6</div>
      </div>
      <br />
      <br />
      <hr />
      <h1 className="text-green-900 font-bold my-5 ">
        Starting and ending lines{" "}
      </h1>
      <div className="grid grid-cols-6 gap-4  bg-yellow-800 p-6 text-center">
        <div className="col-span-4 col-start-2 bg-yellow-200 p-4">01</div>
        <div className="col-start-1 col-end-3  bg-yellow-300 p-4">02</div>
        <div className="col-span-2 col-end-7  bg-yellow-200 p-4">03</div>
        <div className="col-start-1 col-end-7  bg-yellow-200 p-4">04</div>
      </div>
      <br />
      <br />
      <hr />
      <h1 className="text-green-900 font-bold my-5 ">
        grid-template-rows -- grid-rows -- grid-flow-col -- confusion{" "}
      </h1>
      <div className="grid grid-flow-col grid-rows-4 gap-4 bg-red-600 p-5 text-center">
        <div className="bg-red-300 p-3">1</div>
        <div className="bg-red-300 p-3">2</div>
        <div className="bg-red-300 p-3">3</div>
        <div className="bg-red-300 p-3">4</div>
        <div className="bg-red-300 p-3">5</div>
        <div className="bg-red-300 p-3">6</div>
        <div className="bg-red-300 p-3">7</div>
        <div className="bg-red-300 p-3">8</div>
        <div className="bg-red-300 p-3">9</div>
      </div>
      <br />
      <br />
      <hr />
      <h1 className="text-green-900 font-bold my-5 ">
        Implementing a subgrid{" "}
      </h1>
      <div
        className="grid grid-flow-col grid-rows-2 md:grid-rows-4 gap-4 bg-pink-700 p-5 text-black
       text-center"
      >
        <div className="bg-pink-100 p-3">01</div>
        <div className="bg-pink-100 p-3">02</div>
        <div className="bg-pink-100 p-3">03</div>
        <div className="bg-pink-100 p-3">04</div>
        <div className="bg-pink-100 p-3">05</div>
        <div
          className="row-span-3 grid grid-rows-subgrid gap-4 bg-pink-500 p-3 text-red-700 text-center font-extralight
        "
        >
          <div className="row-start-2 bg-pink-100 p-3">06</div>
        </div>
        <div className="bg-pink-100 p-3">07</div>
        <div className="bg-pink-100 p-3">08</div>
        <div className="bg-pink-100 p-3">09</div>

        <div className="bg-pink-100 p-3"> 10</div>
      </div>
      <br />
      <br />
      <hr />
      <h1 className="text-green-900 font-bold my-5 ">grid-row Spanning rows</h1>
      <div className="grid grid-flow-col grid-rows-3 gap-4  bg-blue-500 p-4 text-white text-center ">
        <div className="row-span-3 bg-blue-700 p-4">01</div>
        <div className="col-span-2  bg-blue-700 p-4">02</div>
        <div className="col-span-2 row-span-2  bg-blue-700 p-4">03</div>
      </div>
      <br />
      {/* confusion  */}

      <h1 className="text-green-900 font-bold my-5 ">
        Starting and ending lines
      </h1>
      <br />
      <div className="grid grid-flow-col grid-rows-3 gap-4 bg-gray-700 p-5 text-white font-bold text-center">
        <div className="row-span-1 row-start-2 bg-red-300 p-3 h-40">01</div>
        <div className="row-span-2 row-end-3  bg-green-300 p-3 h-40">02</div>
        <div className="row-start-1 row-end-4  bg-yellow-300 p-3 h-40">03</div>
      </div>
      <br />

      <div className="grid grid-flow-col grid-rows-3 gap-4 bg-blue-700 p-5 text-white font-bold text-center">
        <div className="row-span-2 row-start-1 bg-blue-300 p-3">01</div>

        <div className="row-span-2 row-start-2 bg-blue-400 p-3">02</div>

        <div className="row-span-4 row-start-3 bg-blue-400 p-3">02</div>
      </div>

      <br />
      <hr />
      <h1 className="text-green-900 font-bold my-5 ">
        grid-auto-flow Basic example ?????
      </h1>
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 bg-rose-700 P-5 gap-5 text-white font-bold text-center">
        <div className="col-span-2 bg-rose-300 P-3 h-20">01</div>
        <div className="col-span-2 bg-rose-300 P-3 h-20">02</div>
        <div className=" bg-rose-300 P-3 h-20">03</div>
        <div className=" bg-rose-300 P-3 h-20">04</div>
        <div className=" bg-rose-300 P-3 h-20">05</div>
      </div>
      <br />
      <h1 className="text-green-900 font-bold my-5 ">grid-cols -- row-span</h1>
      <div className="grid grid-cols-4 grid-rows-3 gap-4 bg-purple-700 p-5 text-center text-white font-bold">
        <div className="col-span-2 bg-purple-400 p-3 h-20">01 </div>
        <div className="row-span-2 bg-purple-400 p-3">02 </div>
        <div className="bg-purple-400 p-3 h-20">03</div>
        <div className="col-span-3 bg-purple-400 p-3 h-20">04 </div>
        <div className="bg-purple-400 p-3 h-20">05</div>
      </div>
      <br />
      <hr />
      <h1 className="text-green-900 font-bold my-5 ">
        grid-auto-flow Basic example
      </h1>
      <div class="grid auto-cols-max grid-flow-col p-5 bg-teal-700 gap-4 text-center">
        <div className="bg-teal-200 p-3">01</div>
        <div className="bg-teal-200 p-3">02</div>
        <div className="bg-teal-200 p-3">03</div>
      </div>
      <br />
      <hr />
      <br />
      <h1 className="text-green-900 font-bold my-5 ">auto-cols-max</h1>
      <div className="grid auto-cols-max grid-flow-col p-5 bg-teal-700 gap-4 text-center font-bold">
        <div className="bg-teal-200 p-3">01</div>
        <div className="bg-teal-200 p-3">02</div>
        <div className="bg-teal-200 p-3">03</div>
        <div className="bg-teal-200 p-3">04</div>
        <div className="bg-teal-200 p-3">05</div>
        <div className="bg-teal-200 p-3">06</div>
        <div className="bg-teal-200 p-3">07</div>
        <div className="bg-teal-200 p-3">08</div>
        <div className="bg-teal-200 p-3">09</div>
        <div className="bg-teal-200 p-3">10</div>
      </div>
      <br />
      <hr />

      <h1 className="text-green-900 font-bold my-5 ">auto-rows-max</h1>
      <div className="grid auto-rows-max grid-flow-row p-5 bg-indigo-700 gap-4 text-center font-bold text-white">
        <div className="bg-indigo-200 p-3">01</div>
        <div className="bg-indigo-500 p-3">02</div>
        <div className="bg-indigo-200 p-3">03</div>
        <div className="bg-indigo-500 p-3">04</div>
        <div className="bg-indigo-200 p-3">05</div>
        <div className="bg-indigo-500 p-3">06</div>
      </div>

      <br />
      <br />

      <h2 className="text-sky-500 font-bold my-5">class 01-10-2025</h2>

      <h1 className="text-sky-900 font-bold my-5">
        grid-template-columns <br />
        Specifying the grid columns{" "}
      </h1>

      <div class="grid grid-cols-4 gap-4">
        <div className="bg-indigo-200 p-3">01</div>
        <div className="bg-indigo-200 p-3">02</div>
        <div className="bg-indigo-200 p-3">03</div>
        <div className="bg-indigo-200 p-3">04</div>
        <div className="bg-indigo-200 p-3">05</div>

        <div className="col-span-3 grid grid-cols-subgrid gap-4 bg-indigo-400 p-3">
          <div className="bg-indigo-700 p-3 col-end-3">06</div>
          <div className="bg-indigo-900 p-3 col-start-1">06</div>
        </div>
      </div>

      <h1 classNameName="text-fuchsia-900 font-bold my-5">grid-column</h1>

      <div className="grid grid-cols-6 gap-4 bg-fuchsia-500 p-5">
        <div className="col-span-4 col-start-2 bg-fuchsia-900 p-3">01</div>
        <div className="col-start-1 col-end-3 bg-fuchsia-900 p-3">02</div>
        <div className="col-span-2 col-end-7 bg-fuchsia-900 p-3">03</div>
        <div className="col-start-1 col-end-7 bg-fuchsia-900 p-3">04</div>
      </div>

       <h1 className="text-indigo-400  font-bold my-5">grid-template-rows</h1>

      <div className="grid grid-flow-col grid-rows-4 gap-4 mt-5 bg-indigo-800 p-3">
        <div className="bg-indigo-200 p-3">01</div>
        <div className="bg-indigo-200 p-3">02</div>
        <div className="bg-indigo-200 p-3">03</div>
        <div className="bg-indigo-200 p-3">04</div>
        <div className="bg-indigo-200 p-3">05</div>

        <div className="row-span-3 grid grid-rows-subgrid bg-indigo-900 p-3 gap-4">
          <div className="row-start-2 bg-indigo-400 p-3 ">06</div>
        </div>
        <div className="bg-indigo-200 p-3">07</div>
        <div className="bg-indigo-200 p-3">08</div>
        <div className="bg-indigo-200 p-3">09</div>
        <div className="bg-indigo-200 p-3">10</div>
      </div>


      
     <h1 className="text-indigo-400  font-bold my-5">Layout</h1>

        <div className="grid grid-cols-3 gap-4 bg-blue-800 p-5  text-green-950 text-center">
        <div className="bg-lime-300 p-4 h-20">01</div>
        <div className="bg-lime-300 p-4 h-20">02</div>
        <div className="bg-lime-300 p-4 h-20">03</div>
        <div className="row-span-2 bg-lime-800 p-6 h-44 ">04</div>
        <div className="bg-lime-500 p-4 col-span-2 h-20">05</div>
        <div className="bg-lime-500 p-4 col-span-2 h-20">06</div>
        <div className="bg-lime-100 p-4 col-span-2 h-20">07</div>
        <div className="bg-lime-200 p-4 h-20">08</div>
      </div>


    {/* https://preview.themeforest.net/item/inbio-personal-portfolio-wordpress-theme/full_screen_preview/39221039 */}

    </div>
  );
}

export default Grid;
