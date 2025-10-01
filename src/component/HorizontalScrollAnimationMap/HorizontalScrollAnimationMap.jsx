import React from "react";

function HorizontalScrollAnimationMap(props) {
  const tec = ["Agency", "Portfolio", "branding", "design", "Development"];
  return (
    <div>
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
    </div>
  );
}

export default HorizontalScrollAnimationMap;
