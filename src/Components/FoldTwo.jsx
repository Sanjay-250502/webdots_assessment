import React from "react";
import plus from "../Assets/plus.svg";
import per1 from "../Assets/per1.svg";
import per2 from "../Assets/per-2.svg";
import per3 from "../Assets/per3.svg";
import per4 from "../Assets/per4.svg";
import per5 from "../Assets/per5.svg";

import icon1 from "../Assets/bulid icon.svg";
import personicon from "../Assets/person icon.svg";
import line1 from "../Assets/line.svg";
import line2 from "../Assets/line2.svg";

const FoldTwo = () => {
  const persons = [
    {
      img: per1,
      name: "Amirul Feisal",
      listings: "25 Listings",
      id: "REN 1255",
    },
    {
      img: per2,
      name: "Shah Alam",
      listings: "62 Listings",
      id: "PEA 3055",
    },
    {
      img: per3,
      name: "Humaira Ba...",
      listings: "25 Listings",
      id: "REN 1255",
    },
    {
      img: per4,
      name: "Hannah  Ya...",
      listings: "25 Listings",
      id: "REN 1255",
    },
    {
      img: per5,
      name: "Ishraaq Mizn",
      listings: "62 Listings",
      id: "REN 3055",
    },
  ];

  return (
    <div className="p-5">
      <div className="w-[35px] h-[2px] bg-[#F13525]"></div>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-col gap-3">
            <h2 className="text-[#0E0E0E] font-bold text-[26px] md:text-[36px] w-[244px] h-[30px] md:w-[332px] md:h-[52px] lg:w-[349px] lg:h-[54px] uppercase">
              Featured <span className="text-[#F13525]">Agents</span>
            </h2>
            <p className="text-[12px] md:text-[14px] text-[#5B5B59] font-normal w-[221px] h-[30px] md:w-[332px] md:h-[41px]">
              Meet the opportunity to work with some of the top Real Estate
              Agents in town
            </p>
          </div>
          <div className="flex items-center justify-center w-[88px] h-[35px] md:w-[118px] md:h-[50px]">
            <img
              src={plus}
              className="w-[36.38px] h-[35px] md:w-[46px] md:h-[46px] lg:w-[56px] lg:h-[56px]"
            />
            <p className="text-[12px] md:text-[16px]">
              View all <span className="text-[#F13525]">Agents</span>
            </p>
          </div>
        </div>
      </div>
      {/* ----------------------- */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 justify-items-center justify-content-center">
        {persons.map((person, index) => (
          <div key={index} className="flex items-center gap-5 mb-10 ">
            <div>
              <img src={person.img} className="w-[101px] h-[142px]" />
            </div>
            <div className="flex flex-col items-center justify-center gap-5  relative">
              <div
                className={`w-[107.74px] h-[28.49px] ${
                  index % 2 === 0 ? "bg-[#F13525]" : "bg-black"
                } rounded-tr-lg p-1`}
              >
                <p className="w-[99px] h-[15px] text-15px text-white font-bold">
                  {person.name}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-center gap-1">
                    <img src={icon1} className="w-[18.18px] h-[18.18px]" />
                    <p className="text-[11px] text-[#3D3D3D] w-[53px] h-[13px]">
                      {person.listings}
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <img src={personicon} className="w-[18.18px] h-[18.18px]" />
                    <p className="text-[11px] text-[#3D3D3D] w-[53px] h-[13px]">
                      {person.id}
                    </p>
                  </div>
                </div>
                <div className="absolute top-[27%] -right-5">
                  <img
                    src={index % 2 === 0 ? line1 : line2}
                    className="w-[41.44px] h-[79.44px]"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoldTwo;
