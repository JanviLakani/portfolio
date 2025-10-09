// import React from "react";
// import { GoArrowUpRight } from "react-icons/go";
// import { FiArrowDownRight } from "react-icons/fi";

// function Projects(props) {
//   return (
//     <div className="container mx-auto">
//       <div className="grid grid-cols-3 gap-4 mt-7 text-green-950 text-center p-5">
//         <div className="bg-green-200 p-4">01</div>
//         <div className="bg-green-200 p-4">02</div>
//         <div className="bg-green-200 p-4">03</div>

//       </div>
//     </div>
//   );
// }

// export default Projects;

import React from "react";
import { useGetPortfolioListQuery } from "../../redux/api/portfolioApi";
import { NavLink } from "react-router-dom";

function Projects(props) {
  const { data, error, isLoading } = useGetPortfolioListQuery();
  console.log("data Projects page :", data);

  return (
    <section className="bg-black text-white min-h-screen flex items-center bg-[url('/public/img/vactor7.png')] bg-cover bg-center z-555 pt-20">
      <div className="container mx-auto mt-12 px-5">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3  ">
            My Projects
          </h2>
          <p className="text-xl text-white">
            These are some of the projects I’ve built while learning and growing
            as a frontend developer. They reflect my interest in creating useful
            and modern web experiences. While working on them, I explored React,
            JavaScript ,TailwindCSS, bootstrap5 and CSS5 html in depth. As a
            fresher, I’m excited to learn more and create projects that people
            love to use
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data?.map((projectData) => (
            // <NavLink key={projectData.id} to={"/ProjectDetail"} className="bg-regal-offwhite dark:bg-regal-offBlack p-4 rounded-xl text-center">
             <NavLink key={`/ProjectDetail/${projectData.id}`} to={`/ProjectDetail/${projectData.id}`} className="bg-regal-offwhite dark:bg-regal-offBlack p-4 rounded-xl text-center relative group ">
              <img
                src={`/public/img/${projectData.image}`}
                alt="Project"
                className="w-full h-48 object-cover rounded-lg mb-6 " 
              />
              {/* <h3 className="text-xl font-bold mb-2 text-black dark:text-white ">
                {projectData?.name}
              </h3> */}
              <p className="text-black  dark:text-white">
              
                  {projectData?.description?.length > 30
          ? `${projectData.description.slice(0, 20)}...read more`
          : projectData?.description}
              </p>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

// https://startup.demo.nextjstemplates.com/

{
  /* <div className="bg-regal-offwhite dark:bg-regal-offBlack p-4 rounded-xl text-center">
            <img
              src="/public/img/all_fruits.jpg"
              alt="Project"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-xl font-bold mb-2 text-black hover:text-green-400 dark:text-white hover:text-2xl">
              FRUIT ECOMMERCE SYSTEM
            </h3>
            <p className="text-black  dark:text-white">
              Developed a Fruit Ecommerce frontend system using ReactJS,
              Material UI, and Context API with state management handled by
              Redux Toolkit, redux-thunk, and redux-persist
            </p>
          </div> */
}

{
  /* <div className="bg-regal-offwhite dark:bg-regal-offBlack  p-4 rounded-xl text-center ">
            <img
              src="/public/img/Astrology.jpeg"
              alt="Project"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-xl font-bold mb-2 text-black dark:text-white hover:text-green-400 hover:text-2xl">
              ASTROLOGY WEBSITE
            </h3>
            <p className="text-black  dark:text-white">
              Implemented Figma to Bootstrap conversion for a responsive
              astrology website with user-friendly UI Transformed Figma
              prototypes into a responsive Bootstrap-based astrology website
              with seamless user experience
            </p>
          </div> */
}

{
  /* <div className=" bg-regal-offwhite dark:bg-regal-offBlack  p-4 rounded-xl text-center">
            <img
              src="/public/img/travelling.jpeg"
              alt="Project"
              className="w-full h-48 object-cover rounded-md mb-6"
            />
            <h3 className="text-xl font-bold mb-2 text-black dark:text-white hover:text-green-400 hover:text-2xl">
              TRAVELLING WEBSITE
            </h3>
            <p className="text-black dark:text-white ">
              Developed a responsive travel website by converting Figma designs
              into HTML & CSS with clean and modern UI Implemented
              Figma-to-HTML/CSS conversion for a responsive travel website
              featuring a clean and user-friendly interface
            </p>
          </div> */
}


// function Projects(props) {
//   const { data, error, isLoading } = useGetPortfolioListQuery();
//   console.log("data Projects page :", data);

//   return (
//     <section className="bg-black text-white min-h-screen flex items-center bg-[url('/public/img/vactor7.png')] bg-cover bg-center z-555 pt-20">
//       <div className="container mx-auto mt-12 px-5">
//         <div className="text-center mb-10">
//           <h2 className="text-4xl font-bold mb-3  hover:text-green-400 hover:text-5xl ">
//             My Projects
//           </h2>
//           <p className="text-xl text-white">
//             These are some of the projects I’ve built while learning and growing
//             as a frontend developer. They reflect my interest in creating useful
//             and modern web experiences. While working on them, I explored React,
//             JavaScript ,TailwindCSS, bootstrap5 and CSS5 html in depth. As a
//             fresher, I’m excited to learn more and create projects that people
//             love to use
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {data?.map((projectData) => (
//             <div className="bg-regal-offwhite dark:bg-regal-offBlack p-4 rounded-xl text-center">
//               <img
//                 src={`/public/img/${projectData.image}`}
//                 alt="Project"
//                 className="w-full h-48 object-cover rounded-lg mb-6"
//               />
//               <h3 className="text-xl font-bold mb-2 text-black hover:text-green-400 dark:text-white hover:text-2xl">
//                 {projectData?.name}
//               </h3>
//               <p className="text-black  dark:text-white">
//                 {projectData?.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;
