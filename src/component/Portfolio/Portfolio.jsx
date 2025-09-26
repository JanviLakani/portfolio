import React from "react";

function Portfolio(props) {
  return (
    <div className="bg-gray-100 text-black min-h-screen font-sans flex flex-col items-center justify-center">
      <h1 className="text-red-500 text-2xl font-bold">Tailwind CSS Examples</h1>
      <h1 className="text-red-500 text-sm hover:text-2xl font-bold hover:bg-black cursor-pointer">
        Tailwind CSS Examples Hover
      </h1>

      <h1 className="text-red-500 text-4xl mt-8 ">
        Font Size and Font Weight both:-
      </h1>
      <p className="text-sm font-thin">font-thin</p>
      <p className="text-lg font-light">font-light</p>
      <p className="text-1xl font-bold">font-bold</p>
      <p className="text-2xl font-semibold,">font-semibold</p>
      <p className="text-3xl font-medium,">font-medium</p>
      <p className="text-4xl font-black">font-black</p>

      <div className="text-pink-600 bg-amber-500 h-10 w-20 mt-4 font-thin hover:text-sm">
        new project
      </div>
      <div className="text-blue-200 bg-amber-900 hover:text-2xl hover:bg-amber-400 mt-4">
        hello tailwind
      </div>

      <h2 className="text-red-500 text-4xl mt-8 ">Font Weight only</h2>
      <p className="font-semibold">font-semibold</p>
      <p className="font-normal">font-normal</p>
      <p className="font-thin">font-thin</p>
      <p className="font-semibold">font-semibold</p>

      <h2 className="text-pink-700 text-4xl mt-8 ">Text Color</h2>
      <p className="text-red-500">text-red-500</p>
      <p className="text-gray-700">text-gray-700</p>
      <p className="text-blue-300">text-blue-300</p>

      <h2 className="text-yellow-700 text-2xl mt-8 ">Background Color</h2>
      <div className="bg-[#1f2937] text-white p-6">Custom HEX background</div>
      <div className="bg-[rgba(0,0,0,0.5)] text-white p-5 mt-3">
        bg-[rgba(0,0,0,0.5)]
      </div>

      <h2 className="text-yellow-700 text-4xl mt-8 ">Width</h2>
      <div className="w-10 h-10 bg-red-400">w-10</div>
      <div className="w-1/2 h-10 bg-blue-700">w-1/2</div>
      <div className="w-full h-10 bg-blue-400">w-full</div>
      <div className="w-screen h-10 bg-yellow-400">w-screen (100vw)</div>
      <div className="w-[500px] h-10 bg-purple-400">w-[500px]</div>

      <h2 className="text-yellow-600 text-4xl mt-8">Height</h2>

      <div className="h-10 w-50 bg-gray-400">Height h-10</div>
      <div className="w-15 h-[300px] bg-yellow-400">Height h-10</div>

      <h2 className="text-yellow-600 text-4xl mt-8">Margin</h2>

      <div className="m-8 bg-red-400">all side margin</div>
      <div className="mx-2 bg-pink-500">left and right</div>

      <h2 className="text-yellow-600 text-4xl mt-8">Padding</h2>
      <div className="p-8 bg-red-400">all side padding</div>
      <div className="py-[20px] bg-red-400 mt-4">
        padding top bottem and custom
      </div>
      <div className="px-[40px] bg-red-400 mt-4">
        padding right left and custom
      </div>

      <h2 className="text-red-600 text-4xl mt-8">Border</h2>
      <div className="border">border</div>
      <div className="border-2 border-dashed border-green-500 p-4">
        border dashed
      </div>
      <div className="border-3 border-pink-400 rounded-full mt-5">
        full rounded
      </div>
      <div className="border-3 border-pink-400 rounded mt-5">
        border rounded
      </div>

      <h2 className="text-red-600 text-4xl mt-8">Display</h2>

      <div className=" border-2">
        <div className="block bg-red-200">block </div>

        <div className="inline-block bg-red-500 p-3">inline-block,</div>
        <div className="inline-block bg-amber-500 p-3">inline-block,</div>
        <div className="inline-block bg-orange-500 p-3">inline-block,</div>
      </div>
      <div className="bg-gray-200 p-4">
        <span className="inline bg-red-400 p-2">inline 1</span>
        <span className="inline bg-blue-400 p-2">inline 2</span>
        <span className="inline bg-green-400 p-2">inline 3</span>
      </div>

      <div className="hidden bg-blue-200 p-4">hidden</div>

      <h2 className="text-red-600 text-4xl mt-8">Flexbox</h2>

      <h2>flex-col</h2>
      <div className="flex flex-col justify-center bg-gray-200 p-4 gap-4">
        <div className="bg-red-400 p-4">Item 1</div>
        <div className="bg-blue-400 p-4">Item 2</div>
        <div className="bg-green-400 p-4">Item 3</div>
      </div>
      <h2>flex-row</h2>
      <div className="flex flex-row justify-between bg-green-500 p-4 gap-x-10 mt-10">
        <div className="bg-red-400 p-4">Item 1</div>
        <div className="bg-blue-400 p-4">Item 2</div>
        <div className="bg-green-400 p-4">Item 3</div>
      </div>

      <h2 className="text-red-600 text-4xl mt-8">Grid</h2>

      <div className="grid grid-cols-3 gap-6 bg-pink-700 p-5">
        <div className="bg-red-400 p-4">grid 1</div>
        <div className="bg-blue-400 p-4">grid 2</div>
        <div className="bg-green-400 p-4">grid 3</div>
        <div className="bg-amber-300 col-span-2 p-4">grid 4</div>
        <div className="bg-amber-300 col-span-1 p-4">grid 5</div>
        <div className="bg-amber-300 p-4 col-span-3">grid 6</div>
      </div>

      <h2 className="text-red-600 text-4xl mt-8">Text Align</h2>

      <div className="w-100 bg-amber-400">
        <p className="text-left">text-left</p>
        <p className="text-right">text-right</p>
        <p className="text-center">text-center</p>
      </div>

      <h2 className="text-red-600 text-4xl mt-8">Cursor</h2>

      <p className="cursor-pointer">click me</p>
      <p className="cursor-not-allowed">not allowed</p>
      <p className="cursor-wait">loading...</p>

      <h2 className="text-red-600 text-4xl mt-8">Line Height</h2>

      <p className="leading-[2.5]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ducimus
        exercitationem ut alias consequuntur rerum explicabo corrupti voluptate
        quisquam porro nam? Explicabo libero iste nemo pariatur alias?
        Distinctio illum cupiditate ratione officiis quia, quisquam rem totam
        dolor dignissimos perspiciatis porro odio vel sit consequatur alias
        inventore accusantium atque commodi sequi.
      </p>
      <div className="border-1 w-full my-2 border-red-400"></div>
      <p className="leading-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ducimus
        exercitationem ut alias consequuntur rerum explicabo corrupti voluptate
        quisquam porro nam? Explicabo libero iste nemo pariatur alias?
        Distinctio illum cupiditate ratione officiis quia, quisquam rem totam
        dolor dignissimos perspiciatis porro odio vel sit consequatur alias
        inventore accusantium atque commodi sequi.
      </p>
      <div className="border-1 w-full my-2 border-red-400"></div>
      <p className="leading-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ducimus
        exercitationem ut alias consequuntur rerum explicabo corrupti voluptate
        quisquam porro nam? Explicabo libero iste nemo pariatur alias?
        Distinctio illum cupiditate ratione officiis quia, quisquam rem totam
        dolor dignissimos perspiciatis porro odio vel sit consequatur alias
        inventore accusantium atque commodi sequi.
      </p>
      <div className="border-1 w-full my-2 border-red-400"></div>

      <p className="leading-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ducimus
        exercitationem ut alias consequuntur rerum explicabo corrupti voluptate
        quisquam porro nam? Explicabo libero iste nemo pariatur alias?
        Distinctio illum cupiditate ratione officiis quia, quisquam rem totam
        dolor dignissimos perspiciatis porro odio vel sit consequatur alias
        inventore accusantium atque commodi sequi.
      </p>

      <h2 className="text-red-600 text-4xl mt-8">Opacity</h2>

      <div className="flex gap-2 flex-col">
        <img src="/public/img/office_girl.jpg" alt="img" className="w-74" />
        <img
          src="/public/img/office_girl.jpg"
          alt="img"
          className="w-74 opacity-50"
        />
        <img
          src="/public/img/office_girl.jpg"
          alt="img"
          className="w-74 opacity-80"
        />
        <img
          src="/public/img/office_girl.jpg"
          alt="img"
          className="w-74 opacity-100"
        />
        <img
          src="/public/img/office_girl.jpg"
          alt="img"
          className="w-74 opacity-0"
        />
        <p>hello</p>
      </div>

      <h2 className="text-red-600 text-4xl mt-8">Line Height</h2>

      <div className="tracking-tight">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
        consequatur ab deleniti reprehenderit asperiores officia obcaecati autem
        eius nobis maiores possimus sunt tempore, soluta veniam saepe officiis
        accusantium, error quam?
      </div>
      <div className="border-1 w-full my-2 border-red-400"></div>
      <div className="tracking-normal">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
        consequatur ab deleniti reprehenderit asperiores officia obcaecati autem
        eius nobis maiores possimus sunt tempore, soluta veniam saepe officiis
        accusantium, error quam?
      </div>
      <div className="border-1 w-full my-2 border-green-500"></div>
      <div className="tracking-wide">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
        consequatur ab deleniti reprehenderit asperiores officia obcaecati autem
        eius nobis maiores possimus sunt tempore, soluta veniam saepe officiis
        accusantium, error quam?
      </div>
      <div className="border-1 w-full my-2 border-orange-500"></div>
      <div className="tracking-[2px]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
        consequatur ab deleniti reprehenderit asperiores officia obcaecati autem
        eius nobis maiores possimus sunt tempore, soluta veniam saepe officiis
        accusantium, error quam?
      </div>

      <h2 className="text-red-600 text-4xl mt-8">Shadow</h2>

      <div className="bg-white h-20 w-72 p-2 shadow-lg">with box shadow</div>
      <div className="bg-white h-20 w-72 p-2 mt-4">without box shadow</div>

      <h2 className="text-red-600 text-4xl mt-8">Background Image</h2>

      <div className="h-100 w-100 border-1 border-e-amber-500 bg-[url('/public/img/working_girl.jpg')] bg-cover bg-center "></div>

      <div className="h-20 bg-gradient-to-r from-cyan-500 to-blue-500 mb-4">
        hekjk
      </div>
      <div className="h-20 bg-gradient-to-t from-sky-500 to-indigo-500 mb-4"></div>
      <div className="h-20 bg-gradient-to-bl from-violet-500 to-fuchsia-500 mb-4"></div>
      <div className="h-20 bg-gradient-to-r from-purple-500 to-pink-500 mb-4"></div>
      <div className="h-20 bg-gradient-to-r from-cyan-500 to-blue-500 mb-4"></div>

      <div class="size-18 rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700"></div>
      <div class="size-18 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%"></div>
      <div class="size-18 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%"></div>

      <h2 className="text-red-600 text-4xl mt-8"> Transform</h2>

      <div className="bg-blue-400 w-20 h-20 scale-75">Scale 75%</div>
      <div className="bg-red-400 w-20 h-20 scale-100">Scale 100%</div>
      <div className="bg-green-400 w-20 h-20 scale-125">Scale 125%</div>

      <img
        class="rotate-45 ..."
        src="/public/img/office_girl.jpg"
        className="w-74"
      />
      <img
        class="rotate-90 ..."
        src="/public/img/office_girl.jpg"
        className="w-74"
      />
      <img
        class="rotate-210 ..."
        src="/public/img/office_girl.jpg"
        className="w-74"
      />
      <h2 className="text-red-600 text-4xl mt-8"> button Transition options</h2>
      <button className="bg-red-300 text-white p-4 mt-4 duration-500 ease-in hover:bg-blue-500">
        button Transition
      </button>
      <button className="bg-red-300 text-white p-4 mt-4 duration-500 ease-out hover:bg-yellow-500">
        button Transition
      </button>
      <button className="bg-red-300 text-white p-4 mt-4 duration-500 ease-in-out hover:bg-red-500">
        button Transition
      </button>
      <h2 className="text-red-600 text-4xl mt-8"> Overflow</h2>
      <div className="w-40 h-20 bg-gray-200 overflow-hidden ">
        Overflow hidden: Ye text cut hoga agar box se bada hua Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Nihil, eveniet. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Corrupti natus sit minus
        consequatur? Iste consequuntur veritatis odit provident eveniet? Libero
        perspiciatis enim omnis eos commodi accusantium dolor quasi laboriosam
        reiciendis.
      </div>

      <div className="w-80 h-20 bg-green-200 overflow-scroll">
        Overflow hidden: Ye text cut hoga agar box se bada hua Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Nihil, eveniet. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Corrupti natus sit minus
        consequatur? Iste consequuntur veritatis odit provident eveniet? Libero
        perspiciatis enim omnis eos commodi accusantium dolor quasi laboriosam
        reiciendis. lorem1000
      </div>
      {/* not wor scroll  */}

      <div className="w-180 h-50 bg-green-200 overflow-x-auto">
        Overflow hidden: Ye text cut hoga agar box se bada hua Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Nihil, eveniet. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Corrupti natus sit minus
        consequatur? Iste consequuntur veritatis odit provident eveniet? Libero
        perspiciatis enim omnis eos commodi accusantium dolor quasi laboriosam
        reiciendis. lorem1000 Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Eum laboriosam quia exercitationem beatae. Mollitia
        sit impedit, totam alias enim voluptas sapiente deserunt sequi
        voluptate, doloremque dolorum nostrum similique harum delectus
        blanditiis excepturi eos voluptates ut minus error rem ipsum omnis quas?
        Earum, aspernatur similique? Veniam sequi nisi eius quia magni suscipit
        ex dolore officiis ea id reiciendis, ducimus ipsa blanditiis quaerat,
        quos nihil natus voluptatibus non illo, voluptate possimus. Doloremque
        delectus quo dolores temporibus, ullam recusandae ducimus ratione
        facilis, libero ipsa eveniet sit praesentium repellendus nobis
        dignissimos doloribus. Facere esse soluta eius id delectus magni
        perspiciatis! Non tempora facilis quae!
      </div>

      <div class="h-14 bg-linear-to-r from-cyan-500 to-blue-500">ascasc</div>

      <h2 className="text-red-600 text-4xl mt-8"> position</h2>

      <div className="static bg-pink-500 h-72 w-72 border-4">
        <p>static work </p>
        <div className="absolute bottom-0 left-0 border-2">
           <p>Absolute child</p>
        </div>
      </div>

      <div class="static ...">  
        <p>Static parent</p>
        <div class="absolute bottom-0 left-0 ...">
          <p>Absolute child</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;


{
  /* <div className="flex justify-center items-center space-x">  */
}
{
  /* <a href="">
            <img src={logo} alt="logo-img" />
          </a> */
}

{
  /* <nav>
             <ul>
              {
                navLinks.map((v,i) => (
                  <li key={i}>
                    <a href={v.link}>{v.title}</a>
                  </li>
                ))
              }
             </ul>
        </nav> */
}

{
  /* </div>  */
}

//  <a href="#" className="bg-white text-black px-4 py-2 rounded-2xl ">
//               Click Me
//             </a>