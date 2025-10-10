// import React from "react";
// import { useParams } from "react-router-dom";
// import { useGetPortfolioListQuery } from "../../redux/api/portfolioApi";

// const { id } = useParams();
// const { data } = useGetPortfolioListQuery();

// // Find selected project by ID
// const project = data?.find((item) => item.id === id);

// function ProjectDetail(props) {
//   return (
//     <section className="bg-black text-white min-h-screen pt-20 flex items-center justify-center">
//       <div className="container mx-auto px-5 max-w-4xl text-center">
//         <img
//           src={`/public/img/${project.image}`}
//           alt={project.name}
//           className="w-full h-80 object-cover rounded-lg mb-8"
//         />
//         <h2 className="text-4xl font-bold mb-4 text-green-400">
//           {project.name}
//         </h2>
//         <p className="text-lg text-gray-300">{project.description}</p>
//       </div>
//     </section>
//   );
// }

// export default ProjectDetail;

import React, { useEffect, useState } from "react";
import { useGetPortfolioListQuery } from "../../redux/api/portfolioApi";
import { useParams } from "react-router-dom";
import ProjectimagesSwiper from "./ProjectimagesSwiper";

function ProjectDetail(props) {
  const [proData, setProData] = useState();

  console.log("proData", proData);

  const { data, error, isLoading } = useGetPortfolioListQuery();

  console.log("ProjectDetail data get", data);

  const { id } = useParams();

  //   console.log("ProjectDetail click id", id);

  useEffect(() => {
    const project = data.find((item) => item.id === id);
    //  console.log("project" ,project);

    setProData(project);
  }, [data]);

  return (
    <>
    <section className="bg-black text-white min-h-screen flex justify-center items-center bg-[url('/public/img/vactor7.png')] bg-cover bg-center py-16">
      <div className="container mx-auto max-w-6xl p-8 bg-regal-offwhite dark:bg-regal-offBlack rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src={`/public/img/${proData?.image}`}
            alt="Project"
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-black dark:text-white">
            {proData?.name}
          </h3>

          <p className="pt-3">
              {proData?.description}
          </p>

          {proData?.description}
        </div>

       
      </div>
      
    </section>

     <ProjectimagesSwiper/> 
     </>
  );
}

export default ProjectDetail;

// <section className="bg-black text-white min-h-screen flex justify-center items-center bg-[url('/public/img/vactor7.png')] bg-cover bg-center py-10 ">
//   <div className="container mx-auto max-w-6xl p-6 bg-regal-offwhite dark:bg-regal-offBlack rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//     <div className="bg-regal-offwhite dark:bg-regal-offBlack p-4 rounded-xl text-center">
//       <div className="w-full">
//         <img
//           src={`/public/img/${proData?.image}`}
//           alt="Project"
//           className="w-full h-96 object-cover rounded-xl shadow-lg"
//         />
//       </div>

//       <div className="text-left space-y-4">
//         <h3 className="text-3xl font-bold mb-4 text-black dark:text-white">
//           {proData?.name}
//         </h3>
//         <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
//           {proData?.description}
//         </p>
//       </div>
//     </div>
//   </div>
// </section>

// <section className="bg-black text-white min-h-screen flex justify-center items-center bg-[url('/public/img/vactor7.png')] bg-cover bg-center pt-10 ">
//   <div className="container mx-auto max-w-lg p-3 bg-regal-offwhite dark:bg-regal-offBlack rounded-2xl shadow-lg text-center">
//     <div className="bg-regal-offwhite dark:bg-regal-offBlack p-4 rounded-xl text-center">
//       <img
//         src={`/public/img/${proData?.image}`}
//         alt="Project"
//         className=" w-full h-64 object-cover rounded-lg mb-6"
//       />
//       <h3 className="text-3xl font-bold mb-4 text-black dark:text-white">
//         {proData?.name}
//       </h3>
//       <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
//         {proData?.description}
//       </p>
//     </div>
//   </div>
// </section>
