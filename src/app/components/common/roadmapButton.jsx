"use client";

import Image from "next/image";
import React, { useState } from "react";

const RoadmapButton = ({
   icon,
   text,
   isInvert,
   hasIcon,
   link,
   handleRoadmap,
}) => {
   const [buttonHover, setButtonHover] = useState(false);
   return (
      <div className="relative md:w-[250px] md:h-[100px] w-[150px] h-[100px]">
         <div className="header-top absolute md:w-[248px] md:h-[50px] h-[40px] w-[150px] md:border-[4px] border-[2px] border-black bg-white rounded-[10px] z-30"></div>
         <a href={link}>
            <div
               className={`header-bottom main-button-bottom absolute md:w-[247px] md:h-[50px] h-[40px] w-[149px] rounded-[10px]  flex items-center ${
                  hasIcon
                     ? `md:pr-[20px] md:pl-[20px] md:gap-5 gap-2 pl-[16px]`
                     : `justify-center gap-10`
               } z-30 cursor-pointer ${
                  buttonHover
                     ? `hovered bg-black text-white`
                     : `bg-mainYellow text-black`
               }`}
               onMouseEnter={() => setButtonHover(true)}
               onMouseLeave={() => setButtonHover(false)}
               onClick={handleRoadmap}
            >
               {hasIcon ? (
                  <Image
                     src={icon}
                     alt="icon"
                     className={`md:h-[33px] w-auto h-[20px] ${
                        buttonHover ? `invert` : ``
                     }`}
                  />
               ) : (
                  <></>
               )}

               <h5 className="md:text-[30px] text-[15px] font-bold">{text}</h5>
            </div>
         </a>
      </div>
   );
};

export default RoadmapButton;
