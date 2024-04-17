import Image from "next/image";
import React from "react";
import OctopusLeft2 from "../../../assets/octopus-left-2.png";
import OctopusRight2 from "../../../assets/octopus-right-2.png";

import Telegram from "../../../assets/icons/telegram.png";
import Twitter from "../../../assets/icons/twitter.png";
import Instagram from "../../../assets/icons/instagram.png";
import { FaInstagram, FaSquareTwitter, FaTelegram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";

const Footer = () => {
   return (
      <div className="footer w-full md:h-[500px] h-[200px] relative flex items-end justify-center md:mt-0 -mt-20">
         <div className="image-container absolute -left-2 bottom-0">
            <Image
               src={OctopusLeft2}
               alt="Octopus"
               className="md:w-full md:h-full h-[174px] w-auto"
            />
         </div>
         <div className="image-container absolute md:right-10 right-2 bottom-0">
            <Image
               src={OctopusRight2}
               alt="Octopus Right"
               className="md:w-full md:h-full h-[142px] w-auto"
            />
         </div>
         <div className="texts flex flex-col items-center h-full justify-end">
            <div className="title md:mt-12 mt-12">
               <h3 className="md:text-[50px] text-[18px] font-extrabold">
                  Schemeckle
               </h3>
            </div>
            <div className="text text-center max-w-[800px] w-3/4 ">
               <p className="md:text-[20px] text-[10px]">
                  SHMT, designed as the native token of the Shmeckle ecosystem,
                  offers a unique blend of MEME coin culture. Inspired by the
                  fun and humorous universe of Rick and Morty, SHMT brings a
                  unique touch to the world of cryptocurrency.
               </p>
            </div>
            <div className="icons flex items-center justify-center md:gap-4 gap-2 md:mb-3 mb-1 md:mt-5 mt-1">
               <a href="/">
                  <div className="icon md:h-[32px] h-[20px] md:w-[32px] w-[20px] bg-black md:rounded-lg rounded-[5px] flex items-center justify-center md:p-1 p-[3px]">
                     <FaInstagram color="white" className="w-full h-auto" />
                  </div>
               </a>
               <a href="/">
                  <div className="icon md:h-[32px] h-[20px] md:w-[32px] w-[20px] bg-black md:rounded-lg rounded-[5px] flex items-center justify-center md:p-1 p-[3px]">
                     <BiLogoTelegram color="white" className="w-full h-auto" />
                  </div>
               </a>
               <a href="/">
                  <div className="icon md:h-[32px] h-[20px] md:w-[32px] w-[20px] bg-black md:rounded-lg rounded-[5px] flex items-center justify-center md:p-1 p-[3px]">
                     <FaDiscord color="white" className="w-full h-auto" />
                  </div>
               </a>
               <a href="/">
                  <div className="icon md:h-[32px] h-[20px] md:w-[32px] w-[20px] bg-black md:rounded-lg rounded-[5px] flex items-center justify-center md:p-1 p-[3px]">
                     <FaYoutube color="white" className="w-full h-auto" />
                  </div>
               </a>
               <a href="/">
                  <div className="icon md:h-[32px] h-[20px] md:w-[32px] w-[20px] bg-black md:rounded-lg rounded-[5px] flex items-center justify-center md:p-1 p-[3px]">
                     <FaXTwitter color="white" className="w-full h-auto" />
                  </div>
               </a>
            </div>
         </div>
      </div>
   );
};

export default Footer;
