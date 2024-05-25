import React from "react";
import OctopusLeft from "../../assets/octopus-left.png";
import OctopusRight from "../../assets/octopus-right.png";
import TokenomicsRoadmap from "../components/tokenomics/tokenomicsroadmap";
import Image from "next/image";
import JoinTheCommunity from "../components/jointhecommunity";

const Tokenomics = () => {
   return (
      <div className="container max-w-[1800px] mx-auto flex h-full md:items-center items-start flex-col relative tokenomics-main-page-container ">
         <div className="title-container md:min-h-[400px] h-auto w-full">
            <div className="title w-full flex items-center md:mt-32 mt-16 flex-col">
               <h1 className="font-black md:text-[100px] text-[50px]">
                  TOKENOMICS
               </h1>
               <p className="md:text-[20px] text-[12px] font-semibold md:-mt-4 -mt-2">
                  An overview of the Schmeckle tokenomics.{" "}
               </p>
            </div>
         </div>
         <div className="tokenomics-mini-table max-w-[1600px] w-full mx-auto flex flex-col h-full md:mt-12 mt-32 ">
            <div className="tokenomics-mini-main-table max-w-[1600px] w-full mx-auto h-full md:flex hidden">
               <div className="element flex-1 w-full flex flex-col text-center">
                  <h5 className="tokenomics-element-title text-[25px] font-bold">
                     Total Supply
                  </h5>
                  <h3 className="tokenomics-element-main-text text-[70px] font-extrabold">
                     1 Billion
                  </h3>
               </div>
               <div className="tokenomics-table-line h-[160px] w-[6px]"></div>
               <div className="element flex-1 w-full flex flex-col text-center">
                  <h5 className="tokenomics-element-title text-[25px] font-bold">
                     Buy tax
                  </h5>
                  <h3 className="tokenomics-element-main-text text-[70px] font-extrabold">
                     0%
                  </h3>
               </div>
               <div className="tokenomics-table-line h-[160px] w-[6px]"></div>
               <div className="element flex-1 w-full flex flex-col text-center">
                  <h5 className="tokenomics-element-title text-[25px] font-bold">
                     Sell tax
                  </h5>
                  <h3 className="tokenomics-element-main-text text-[70px] font-extrabold">
                     1.4%
                  </h3>
               </div>
               <div className="tokenomics-table-line h-[160px] w-[6px]"></div>
               <div className="element flex-1 w-full flex flex-col text-center">
                  <h5 className="tokenomics-element-title text-[25px] font-bold">
                     Liq. pool
                  </h5>
                  <h3 className="tokenomics-element-main-text text-[70px] font-extrabold">
                     45%
                  </h3>
               </div>
            </div>
            <div className="tokenomics-mini-main-table max-w-[1600px] w-5/6 mx-auto h-full md:hidden flex flex-col gap-6">
               <div className="two-elements flex">
                  <div className="element flex-1 w-full flex flex-col text-start mr-8">
                     <h5 className="tokenomics-element-title text-[20px] font-bold">
                        Total Supply
                     </h5>
                     <h3 className="tokenomics-element-main-text text-[32px] font-extrabold">
                        1 Billion
                     </h3>
                  </div>
                  <div className="tokenomics-table-line h-[90px] w-[6px]"></div>
                  <div className="element flex-1 w-full flex flex-col text-start ml-8">
                     <h5 className="tokenomics-element-title text-[20px] font-bold">
                        Buy tax
                     </h5>
                     <h3 className="tokenomics-element-main-text text-[32px] font-extrabold">
                        0%
                     </h3>
                  </div>
               </div>
               <div className="two-elements flex">
                  <div className="element flex-1 w-full flex flex-col text-start mr-8">
                     <h5 className="tokenomics-element-title text-[20px] font-bold">
                        Sell tax
                     </h5>
                     <h3 className="tokenomics-element-main-text text-[32px] font-extrabold">
                        1.4%
                     </h3>
                  </div>
                  <div className="tokenomics-table-line h-[90px] w-[6px]"></div>
                  <div className="element flex-1 w-full flex flex-col text-start ml-8">
                     <h5 className="tokenomics-element-title text-[20px] font-bold">
                        Liq. pool
                     </h5>
                     <h3 className="tokenomics-element-main-text text-[32px] font-extrabold">
                        45%
                     </h3>
                  </div>
               </div>
            </div>
            <div className="percentages w-full flex justify-center md:gap-20 gap-6 md:px-36 px-4 mt-20 md:flex-row flex-col">
               <div className="items-top flex md:gap-20 gap-4">
                  <div className="item flex items-center gap-3">
                     <h5 className="font-bold md:text-[25px] text-[14px] md:px-5 px-3 py-2 bg-[#160440] rounded-xl text-white">
                        45%
                     </h5>
                     <h5 className="md:text-[25px] text-[14px] font-bold">
                        DEX Offering
                     </h5>
                  </div>
                  <div className="item flex items-center gap-3">
                     <h5 className="font-bold md:text-[25px] text-[14px] md:px-5 px-3 py-2 bg-[#160440] rounded-xl text-white">
                        20%
                     </h5>
                     <h5 className="md:text-[25px] text-[14px] font-bold">
                        Airdrop
                     </h5>
                  </div>
                  <div className="item flex items-center gap-3">
                     <h5 className="font-bold md:text-[25px] text-[14px] md:px-5 px-3 py-2 bg-[#160440] rounded-xl text-white">
                        10%
                     </h5>
                     <h5 className="md:text-[25px] text-[14px] font-bold">
                        Team
                     </h5>
                  </div>
               </div>
               <div className="items-bottom flex md:gap-20 gap-4 md:justify-start justify-center">
                  <div className="item flex items-center gap-3">
                     <h5 className="font-bold md:text-[25px] text-[14px] md:px-5 px-3 py-2 bg-[#160440] rounded-xl text-white">
                        10%
                     </h5>
                     <h5 className="md:text-[25px] text-[14px] font-bold">
                        Burn
                     </h5>
                  </div>
                  <div className="item flex items-center gap-3">
                     <h5 className="font-bold md:text-[25px] text-[14px] md:px-5 px-3 py-2 bg-[#160440] rounded-xl text-white">
                        15%
                     </h5>
                     <h5 className="md:text-[25px] text-[14px] font-bold">
                        Ecosystem
                     </h5>
                  </div>
               </div>
            </div>
         </div>
         <div className="roadmap max-w-[1700px] w-full mx-auto flex flex-col md:mt-28 mt-4 md:px-36 pl-4">
            <div className="header relative mt-20">
               <h5 className="md:text-6xl text-[40px] font-extrabold">
                  Roadmap
               </h5>
               <div className="header-top absolute md:-top-[100px] -top-[40px] md:left-6 left-1">
                  <h5 className="md:text-[110px] text-[60px] text-transparent  font-extrabold whitespace-nowrap -z-40">
                     <span className="what-is-schmeckle-header-top">
                        Roadmap
                     </span>
                  </h5>
                  <div className="gradient-overlay md:h-[120px] h-[60px] md:top-[20px] top-[2px]"></div>
               </div>
            </div>
            <TokenomicsRoadmap />
         </div>
         <JoinTheCommunity />
         <div className="octopus-left absolute md:top-0 top-36 md:left-20 -left-7">
            <Image
               src={OctopusLeft}
               alt="octopus-left"
               className="md:w-[275px] w-[130px] h-auto md:rotate-0 -rotate-[60deg]"
            />
         </div>
         <div className="octopus-right absolute md:right-20 md:top-0 top-36 right-0">
            <Image
               src={OctopusRight}
               alt="octopus-left"
               className="md:w-[350px] w-[100px] h-auto md:rotate-0 rotate-90"
            />
         </div>
      </div>
   );
};

export default Tokenomics;
