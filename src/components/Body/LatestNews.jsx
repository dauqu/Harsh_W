import React from "react";
import bg5 from "../assets/images/bg5.jpg";
import bg6 from "../assets/images/bg6.jpg";
import bg7 from "../assets/images/bg7.jpg";

function LatestNews() {
  return (
    <div className="bg-[#f8f8f8]  ">
      <div className="mt-16  md:w-[90%] w-[95%]  m-auto">
        <div className="text-center md:pt-8 pt-2 text-black font-bold text-[35px]">
          Our Products
        </div>
        <div className="xl:p-24 p-4 md:flex flex-wrap items-center justify-between">
          <div className="md:w-[350px] w-auto md:m-4 m-auto md:pt-0 pt-8">
            <div className="w-full">
              <img src={bg5} alt="" srcset="" />
            </div>
            <div className="mt-4 mb-4 font-bold text-[22px]">Dauqu Panel</div>
            <div className="leading-6 text-justify">
              Duis autem vel eum iriure dolor in hendrerit in vulpu tate velit
              esse molestie consequat.
            </div>
          </div>
          <div className="md:w-[350px] w-auto md:m-4 m-auto md:pt-0 pt-8">
            <div className="w-full">
              <img src={bg6} alt="" srcset="" />
            </div>
            <div className="mt-4 mb-4 font-bold text-[22px]">Dauqu Website</div>
            <div className="leading-6 text-justify">
              Duis autem vel eum iriure dolor in hendrerit in vulpu tate velit
              esse molestie consequat.
            </div>
          </div>
          <div className="md:w-[350px] w-auto md:m-4 m-auto md:pt-0 pt-8">
            <div className="w-full">
              <img src={bg7} alt="" srcset="" />
            </div>
            <div className="mt-4 mb-4 font-bold text-[22px]">
              Best Renovation
            </div>
            <div className="leading-6 text-justify">
              Duis autem vel eum iriure dolor in hendrerit in vulpu tate velit
              esse molestie consequat.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
