import React from "react";

function BtnAboutme(props) {
  return (
    <div>
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
    </div>
  );
}

export default BtnAboutme;
