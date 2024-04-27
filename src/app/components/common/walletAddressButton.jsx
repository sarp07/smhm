"use client";

import Image from "next/image";
import React, { useState } from "react";

const WalletAddressButton = ({ icon, text, isInvert, hasIcon, link }) => {
   const [buttonHover, setButtonHover] = useState(false);
   return (
      <div className="relative md:w-[650px] md:h-[100px] w-[400px] h-[70px] ">
         <div className="header-top absolute md:w-[638px] md:h-[50px] h-[40px] w-[360px] md:border-[4px] border-[2px] border-black bg-white rounded-[10px] z-30"></div>
         <a href={link} target="_blank">
            <div
               className={`header-bottom main-button-bottom absolute md:w-[635px] md:h-[50px] h-[40px] w-[359px] rounded-[10px]  flex items-center ${
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

               <h5 className="md:text-[21px] text-[12px] font-bold">{text}</h5>
            </div>
         </a>
      </div>
   );
};

export default WalletAddressButton;
