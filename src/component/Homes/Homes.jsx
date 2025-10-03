import React from "react";


function Homes() {
  return (
  
    <section
       className="h-screen relative flex items-center justify-center text-white bg-[url('/public/img/vactor2.jpg')] bg-cover bg-center z-555"
      
    >
      <div className="text-center px-5">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-black  dark:text-white">
          Hello, I am <span className="text-orange-500">Janvi</span> 
        </h1>
        <h2 className="text-2xl md:text-4xl mb-6  text-black  dark:text-white" >Frontend Developer</h2>
        <p className="max-w-4xl mx-auto text-3xl mb-8  text-black  dark:text-white ">
          I’m a passionate Frontend Developer skilled in React, TailwindCSS, and
          JavaScript. As a fresher, I enjoy building clean, responsive, and
          user-friendly websites while learning and growing with every project.
        </p>
        <div >
          <a
            href="#"
            className=" bg-white dark:bg-black text-black  dark:text-white hover:bg-orange-500 px-6 py-3 rounded-full font-semibold border"
          >
           Hire Me
          </a>
          
        </div>
      </div>
    </section>
  );
}

export default Homes;
