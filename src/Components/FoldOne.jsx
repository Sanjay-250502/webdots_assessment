import React from "react";
import LOGO from "../Assets/Tech Relators Logo.svg";
import Menu from "../Assets/HamBuger.svg";
import bulidingPhone from "../Assets/phoneBuliding.png";
import bulidingPhone2 from "../Assets/tabBuliding.svg";
import lgBuilding from "../Assets/lapBuilding.png";

import search from "../Assets/search lens.svg";
import filter from "../Assets/filter.svg";

const FoldOne = () => {
  return (
    <>
      <div className="p-5 lg:px-18">
        <div className="flex items-center justify-between">
          <img src={LOGO} alt="Logo" className="w-[214px] h-[19.26px]" />
          <div className="flex items-center gap-5">
            <div className="hidden md:block">
              <nav>
                <ul className="flex items-center justify-between space-x-10  ">
                  <li className="text-[#444444] text-[14px] font-normal hover:text cursor-pointer">
                    <a
                      href="#"
                      className="text-[#444444] text-[14px] font-normal"
                    >
                      Agents
                    </a>
                  </li>
                  <li className="text-[#444444] text-[14px] font-normal hover:text cursor-pointer">
                    <a
                      href="#"
                      className="text-[#444444] text-[14px] font-normal"
                    >
                      Properties
                    </a>
                  </li>
                  <li className="text-[#444444] text-[14px] font-normal hover:text cursor-pointer">
                    <a
                      href="#"
                      className="text-[#444444] text-[14px] font-normal"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <img
              src={Menu}
              alt="Menu"
              className="w-[40px] h-[40px] cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="p-5 lg:px-18 relative">
        <div className="flex items-start justify-between">
          <div className="flex items-center mt-10 gap-3 md:gap-12 lg:gap-16 xl:gap-32">
            <div className="flex flex-col items-center justify-center">
              <h2 className="w-[45.65px] h-[22.82px] text-[#F13525] text-[17.85px] md:text-[30px] xl:text-[40px] font-bold">
                850+
              </h2>
              <p className="w-[31.24px] h-[21.2px] md:mt-5 lg:mt-10 text-[#5B5B59] text-[8px] md:text-[12px] x;:text-[16px] font-semi-bold">
                Property Listings
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="w-[45.65px] h-[22.82px] text-[#F13525] text-[17.85px] md:text-[30px] xl:text-[40px] font-bold">
                110+
              </h2>
              <p className="w-[31.24px] h-[21.2px] md:mt-5 lg:mt-10 text-[#5B5B59] text-[8px] md:text-[12px] xl:text-[16px] font-semi-bold">
                Esteemed Agents
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="w-[45.65px] h-[22.82px] text-[#F13525] text-[17.85px] md:text-[30px] xl:text-[40px] font-bold">
                958+
              </h2>
              <p className="w-[31.24px] h-[21.2px] md:mt-5 lg:mt-10 text-[#5B5B59] text-[8px] md:text-[12px] xl:text-[16px] font-semi-bold">
                Regular Clients
              </p>
            </div>
          </div>
          <div>
            <img
              src={bulidingPhone}
              alt="Logo"
              className="w-[194.37px] h-[322.16px] md:hidden"
            />
            <img
              src={lgBuilding}
              alt="Logo"
              className="w-[454px] h-[575px] hidden md:block   lg:hidden"
            />
            <img
              src={lgBuilding}
              alt="Logo"
              className="w-[654px] h-[655px] hidden lg:block xl:hidden"
            />
            <img
              src={lgBuilding}
              alt="Logo"
              className="w-[856px] h-[699px] hidden xl:block"
            />
          </div>
        </div>
        <div className="absolute top-[35.4%] xl:top-[32%]">
          <div className="w-[246.52px] h-[214.03px] md:w-[440px] md:h-[382px] lg:w-[540px] lg:h-[432px] xl:w-[640px] xl:h-[482px] bg-[#231F20] rounded-tr-[40px] p-1 px-2 md:px-5 ">
            <div className="flex flex-col items-center justify-center">
              <h2 className=" text-[20px] md:text-[36px] lg:text-[38px] xl:text-[50px] text-white font-extrabold p-2.5 uppercase">
                Creating blissful property search is our speciality
              </h2>
              <p className=" h-[21px] text-[10px] md:text-[16px] lg:text-[18px] xl:text-[20px] md:w-[337px] lg:w-[437px] xl:w-[537px]  text-white font-normal px-5 md:px-0">
                With a lot of experience we will help you shortlist the
                properties you want.
              </p>
            </div>
            <div className="mt-5 md:mt-16 lg:mt-20 xl:mt-20 w-[265.75px] h-[38px] md:w-[535px] md:h-[70px] lg:w-[675px] lg:h-[80px] xl:w-[775px] xl:h-[100px]   bg-white  py-2">
              <div className="flex items-center justify-center ">
                <div className="flex items-center justify-center gap-1 md:gap-5 md:mt-2">
                  <img
                    src={search}
                    alt="search"
                    className="w-[10.35px] h-[10.35px] md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px]"
                  />
                  <p className="w-[144px] h-[12px] md:w-[269px] md:h-[17px] lg:w-[369px] lg:h-[23px] xl:w-[469px] xl:h-[28px]  text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-normal">
                    Search by project, street name
                  </p>
                  <img
                    src={filter}
                    alt="filter"
                    className="w-[10.35px] h-[10.35px] md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px]"
                  />
                  <button className="ml-2 rounded  bg-[#F13525] text-white text-center flex items-center justify-center">
                    <span className="text-[10px] lg:text-[16px] px-4 py-1 md:px-8 md:py-3 xl:px-10 xl:py-5">
                      Search
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoldOne;
