"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import PickeRick from "../../../assets/picklerick.png";
import Lemon from "../../../assets/lemon.png";
import Squanchy from "../../../assets/squanchy.png";
import Alien from "../../../assets/alien.png";
import RoadmapButton from "../../components/common/roadmapButton";
import Image from "next/image";

const TokenomicsRoadmap = () => {
   const [roadmapIndex, setRoadmapIndex] = useState(0);
   const handleRoadmapIndex = (i) => {
      if (roadmapIndex == 3) {
         return;
      }
      if (i < roadmapIndex) {
         return;
      }
      setRoadmapIndex(i);
   };
   useEffect(() => {
      setRoadmapIndex(0);
   }, []);
   return (
      <div className="tokenomics-roadmap flex flex-col justify-between mt-12 w-full md:px-12  relative gap-24 md:pb-20 pb-44">
         <div
            className={`tokenomics-line ${
               roadmapIndex == 0 && `md:h-[860px] h-[650px]`
            } ${roadmapIndex == 1 && `md:h-[1280px] h-[1150px]`}
               ${roadmapIndex == 2 && `md:h-[1680px] h-[1600px]`}
               ${
                  roadmapIndex == 3 && `md:h-[1760px] h-[1850px]`
               } w-[4px] -top-12 absolute right-0 flex flex-col justify-between items-center`}
         >
            <div
               class="w-0 h-0 
  border-l-[10px] border-l-transparent
  border-b-[15px] border-b-[#000aff]
  border-r-[10px] border-r-transparent -mt-1"
            ></div>
            <div
               class="w-0 h-0 
  border-l-[10px] border-l-transparent
  border-t-[15px] border-t-black
  border-r-[10px] border-r-transparent -mb-1"
            ></div>
         </div>
         <div className="tokenomics-roadmap-item flex md:flex-row flex-col-reverse justify-between md:gap-10 gap-0 md:w-full w-5/6 md:mx-0 mx-auto">
            <div className="text-container flex-[2] w-full relative ">
               <Image
                  src={PickeRick}
                  alt="pickle-rick"
                  className="absolute md:-left-24 md:-top-12 -left-12 -top-10 md:w-[200px] w-[150px] h-auto"
               />
               <div className="text-inside-container-roadmap bg-black w-full md:h-[325px] h-[240px] md:rounded-[80px] rounded-[40px] flex items-center justify-center">
                  <div className="text-white list w-3/4 ml-12">
                     <div className="flex flex-col text-[20px]">
                        <li className="text-white list-item">
                           Offical website v1.0 release
                        </li>
                        <li className="text-white list-item font-medium">
                           Token created
                        </li>
                        <li className="text-white list-item font-medium">
                           DEX listing
                        </li>
                        <li className="text-white list-item font-medium">
                           Marketing
                        </li>
                     </div>
                  </div>
               </div>
            </div>
            <div className="button-container flex-1 w-full flex justify-center relative items-center h-[325px] mt-4">
               <RoadmapButton
                  text="2024 Q2"
                  handleRoadmap={() => handleRoadmapIndex(0)}
               />
            </div>
            <div className="empty flex-[2] w-full md:flex hidden"></div>
         </div>
         <div className="tokenomics-roadmap-item flex justify-between md:gap-10 gap-0 md:flex-row-reverse flex-col-reverse md:w-full w-5/6 md:mx-0 mx-auto">
            <div className="text-container flex-[2] w-full relative">
               {roadmapIndex >= 1 ? (
                  <div className="animated-roadmap">
                     <Image
                        src={Lemon}
                        alt="lemon"
                        className="absolute md:-right-24 md:top-4 md:w-[200px] w-[150px] -right-[72px] top-4 h-auto"
                     />
                     <div className="text-inside-container-roadmap bg-black w-full md:h-[325px] h-[240px] md:rounded-[80px] rounded-[40px] flex items-center justify-center ">
                        <div className="text-white list w-3/4 -ml-4">
                           <div className="flex flex-col text-[20px]">
                              <li className="text-white list-item font-medium">
                                 Tier 1 exchange listing
                              </li>
                              <li className="text-white list-item font-medium">
                                 Rick and Morty Community Event
                              </li>
                           </div>
                        </div>
                     </div>
                  </div>
               ) : (
                  <></>
               )}
            </div>
            <div className="button-container flex-1 w-full flex justify-center relative items-center h-[325px] mt-4">
               <RoadmapButton
                  text="2024 Q3"
                  handleRoadmap={() => handleRoadmapIndex(1)}
               />
            </div>
            <div className="empty flex-[2] w-full md:flex hidden"></div>
         </div>
         {roadmapIndex >= 1 && (
            <>
               {" "}
               <div className="tokenomics-roadmap-item flex justify-between md:gap-10 gap-0 md:flex-row flex-col-reverse md:w-full w-5/6 md:mx-0 mx-auto">
                  <div className="text-container flex-[2] w-full relative">
                     {roadmapIndex >= 2 ? (
                        <div className="animated-roadmap">
                           <Image
                              src={Squanchy}
                              alt="squanchy"
                              className="absolute md:-left-24 md:-top-12 md:w-[200px] w-[150px] -top-6 -left-[56px] h-auto"
                           />
                           <div className="text-inside-container-roadmap bg-black w-full md:h-[325px] h-[240px] md:rounded-[80px] rounded-[40px] flex items-center justify-center">
                              <div className="text-white list w-3/4 ml-12">
                                 <div className="flex flex-col text-[20px]">
                                    <li className="text-white list-item font-medium">
                                       Tier 1 exchange listing 2
                                    </li>
                                    <li className="text-white list-item font-medium">
                                       Schmeckle Mobile App
                                    </li>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ) : (
                        <></>
                     )}
                  </div>
                  <div className="button-container flex-1 w-full flex justify-center relative items-center h-[325px] mt-4">
                     <RoadmapButton
                        text="2024 Q4"
                        handleRoadmap={() => handleRoadmapIndex(2)}
                     />
                  </div>
                  <div className="empty flex-[2] w-full md:flex hidden"></div>
               </div>
            </>
         )}
         {roadmapIndex >= 2 && (
            <>
               {" "}
               <div className="tokenomics-roadmap-item flex justify-between md:gap-10 gap-0 md:flex-row-reverse flex-col-reverse md:w-full w-5/6 md:mx-0 mx-auto">
                  <div className="text-container flex-[2] w-full relative">
                     {roadmapIndex >= 3 ? (
                        <div className="animated-roadmap">
                           <Image
                              src={Alien}
                              alt="alien"
                              className="absolute -right-16 md:top-0 -top-6 md:w-[180px] w-[150px] h-auto"
                           />
                           <div className="text-inside-container-roadmap bg-black w-full md:h-[325px] h-[240px] md:rounded-[80px] rounded-[40px] flex items-center justify-center">
                              <div className="text-white list w-3/4 -ml-4">
                                 <div className="flex flex-col text-[20px]">
                                    <li className="text-white list-item font-medium">
                                       Coming Soon
                                    </li>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ) : (
                        <></>
                     )}
                  </div>
                  <div className="button-container flex-1 w-full flex justify-center relative items-center h-[325px] mt-4 md:mx-0 mx-auto">
                     <RoadmapButton
                        text="2025 Q1"
                        handleRoadmap={() => handleRoadmapIndex(3)}
                     />
                  </div>
                  <div className="empty flex-[2] w-full md:flex hidden"></div>
               </div>
            </>
         )}
      </div>
   );
};

export default TokenomicsRoadmap;
