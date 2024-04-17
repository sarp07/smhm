"use client";
import Image from "next/image";
import React, { useState } from "react";
import Wallet from "../../../assets/icons/wallet.png";

const HeaderButton = () => {
   const [buttonHover, setButtonHover] = useState(false);

   return (
      <div
         className={`w-[306px] h-[76px] border-[4px]  rounded-[10px] flex items-center pl-[32px] gap-4 cursor-pointer transition-all duration-300 ${
            buttonHover
               ? `bg-black border-black text-white`
               : `bg-mainYellow border-mainBorder text-black`
         }`}
         onMouseEnter={() => setButtonHover(true)}
         onMouseLeave={() => setButtonHover(false)}
      >
         <Image
            src={Wallet}
            alt="wallet"
            className={`h-[40px] w-[40px] transition-all duration-400 ${
               buttonHover ? `invert` : ``
            }`}
         />
         <h5 className="font-bold text-[22px]">Connect Wallet</h5>
      </div>
   );
};

export default HeaderButton;
