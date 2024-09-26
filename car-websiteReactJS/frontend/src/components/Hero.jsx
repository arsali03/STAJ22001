import React from "react";
import { assets } from "../assets1/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/*Hero Left Side*/}
      <div className="w-full sm:-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">
              <span className="text-yellow-400 font-medium">OUR</span>{" "}
              BESTSELLERS
            </p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest <span className="text-yellow-400 font-medium">Arrivals</span>
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">
              SHOP <span className="text-yellow-400 font-medium">NOW</span>
            </p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* Hero Right Side*/}
      <img src={assets.home_img} className="w-full sm:w-1/2" alt="" />
    </div>
  );
};

export default Hero;
