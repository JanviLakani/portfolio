import React from 'react';
import rotateImage from "../../assets/img/rotate.webp";
import { IoMdAperture } from "react-icons/io";

function RotateImgAnimation(props) {
    return (
        <div>
                  {/* rotate circle  */}

       <div className="relative w-25 h-25">
        <img
          src={rotateImage}
          className="mx-auto absolute top-0 left-0 rotateImg"
        />
        <IoMdAperture className="absolute top-1/2 left-1/2 transform -translate-1/2" />
      </div>

      {/* // suare line continue  */}

      <p class="marquee">
        <span>
          This is text - This is text - This is text - This is text - This is
          text - This is text - This is text - This is text - This is text -
          This is text - This is text - This is text ;
        </span>
      </p>
      <p class="marquee marquee2">
        <span>
          This is text - This is text - This is text - This is text - This is
          text - This is text - This is text - This is text - This is text -
          This is text - This is text - This is text ;
        </span>
      </p> 
        </div>
    );
}

export default RotateImgAnimation;