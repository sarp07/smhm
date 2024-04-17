"use client";

import Image from "next/image";
import React, { useState } from "react";

const MainButton = ({ icon, text, isInvert, hasIcon }) => {
   const [buttonHover, setButtonHover] = useState(false);
   return (
      <div className="relative md:w-[300px] md:h-[100px] w-[150px] h-[80px]">
         <div className="header-top absolute md:w-[295px] md:h-[80px] h-[40px] w-[134px] md:border-[4px] border-[2px] border-black bg-white rounded-[10px] z-30"></div>
         <div
            className={`header-bottom main-button-bottom absolute md:w-[297px] md:h-[80px] h-[40px] w-[136px] rounded-[10px]  flex items-center ${
               hasIcon
                  ? `md:pr-[20px] md:pl-[36px] md:gap-8 gap-2 pl-[16px]`
                  : `justify-center gap-10`
            } z-30 cursor-pointer ${
               buttonHover
                  ? `hovered bg-black text-white`
                  : `bg-mainYellow text-black`
            }`}
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
         >
            {hasIcon ? (
               <Image
                  src={icon}
                  alt="icon"
                  className={`md:h-[42px] w-auto h-[20px] ${
                     buttonHover ? `` : `invert`
                  }`}
               />
            ) : (
               <></>
            )}

            <h5 className="md:text-[25px] text-[12px] font-bold">{text}</h5>
         </div>
      </div>
   );
};

export default MainButton;
