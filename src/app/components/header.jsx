"use client";

import React, { useState } from "react";
import HeaderButton from "./common/headerButton";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import MenuIcon from "../../assets/icons/menu.png";

import Telegram from "../../assets/icons/telegram.png";
import Twitter from "../../assets/icons/twitter.png";
import Instagram from "../../assets/icons/instagram.png";
import Hamburger from "hamburger-react";
import { FaDiscord, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";

const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   return (
      <div
         className={`header-container relative mx-auto flex md:justify-center justify-start md:mt-[36px] mt-[24px] md:h-[124px] ${
            menuOpen ? `h-[400px]` : `h-[80px]`
         } md:w-full w-[95%]`}
      >
         <div className="header-top ml-[24px] absolute w-full h-[102px] border-[4px] border-mainBorder bg-white rounded-[10px] max-w-[1800px] drop-shadow z-30 md:flex hidden"></div>
         <div
            className={`header-bottom top-[14px] absolute w-full  md:h-[102px] overflow-y-hidden ${
               menuOpen ? `h-[400px] pt-[6px]` : `h-[70px] md:pt-0 pt-[6px]`
            }  border-[4px] border-mainBorder bg-white rounded-[10px] max-w-[1800px] drop-shadow flex items-center pr-[20px] pl-[16px] justify-between z-30 md:flex-row flex-col`}
         >
            <div
               className={`top flex items-center justify-between w-full ${
                  menuOpen ? `md:h-full h-full flex-grow-0` : `h-full`
               }`}
            >
               <div
                  className={`logo flex items-center gap-5 ${
                     menuOpen ? `md:h-full h-full` : `h-full`
                  }`}
               >
                  <a href="/" className="md:h-full md:w-auto h-[48px] w-auto">
                     <Image
                        src={Logo}
                        alt="logo"
                        className="md:h-full md:w-auto h-[48px] w-auto"
                     />
                  </a>
                  <h1 className="font-bold md:text-[30px] text-[20px]">
                     Schmeckle
                  </h1>
               </div>
               <div className="right h-full items-center gap-16 md:flex hidden">
                  <div className="links flex gap-7 text-[20px] font-bold">
                     <a href="/" className="hover:text-mainBorder">
                        Home
                     </a>
                     <a href="#about" className="hover:text-mainBorder">
                        About
                     </a>
                     <a href="/airdrop" className="hover:text-mainBorder">
                        Airdrop
                     </a>
                     <a href="#contact" className="hover:text-mainBorder">
                        Contact
                     </a>
                  </div>
                  <a href="https://t.me/SchmeckleAnnouncement" target="_blank">
                     <HeaderButton />
                  </a>
               </div>
               <div
                  className="menu-container cursor-pointer md:hidden flex"
                  onClick={() => setMenuOpen(!menuOpen)}
               >
                  {/* <Image
                     src={MenuIcon}
                     alt="menu"
                     className="h-[30px] w-auto"
                  /> */}
                  <Hamburger color="black" size={32} />
               </div>
            </div>

            <div className="menu-open md:hidden flex flex-col h-full flex-1 flex-grow mt-[30px] mb-8">
               <div className="links w-full flex flex-col text-[24px] font-bold text-center gap-1">
                  <a href="/">Home</a>
                  <div className="line h-[2px] w-full bg-black"></div>
                  <a href="#about">About</a>
                  <div className="line h-[2px] w-full bg-black"></div>
                  <a href="/airdrop">Airdrop</a>
                  <div className="line h-[2px] w-full bg-black"></div>
                  <a href="#contact">Contact</a>
                  <div className="line h-[2px] w-full bg-black"></div>
               </div>
               <div className="social-icons flex gap-[10px] mt-7 mb-1 z-40 justify-center">
                  <a href="https://t.me/Schmeckleofficial">
                     <div className="icon md:h-[32px] h-[24px] md:w-[32px] w-[24px] bg-black md:rounded-lg rounded-[5px] flex items-center justify-center md:p-1 p-[3px]">
                        <BiLogoTelegram
                           color="white"
                           className="w-full h-auto"
                        />
                     </div>
                  </a>
                  {/* <a href="/">
                     <div className="icon md:h-[32px] h-[24px] md:w-[32px] w-[24px] bg-black md:rounded-lg rounded-[5px] flex items-center justify-center md:p-1 p-[3px]">
                        <FaDiscord color="white" className="w-full h-auto" />
                     </div>
                  </a> */}
                  <a href="https://www.youtube.com/@SchmeckleToken">
                     <div className="icon md:h-[32px] h-[24px] md:w-[32px] w-[24px] bg-black md:rounded-lg rounded-[5px] flex items-center justify-center md:p-1 p-[3px]">
                        <FaYoutube color="white" className="w-full h-auto" />
                     </div>
                  </a>
                  <a href="https://twitter.com/Schmeckle_Token">
                     <div className="icon md:h-[32px] h-[24px] md:w-[32px] w-[24px] bg-black md:rounded-lg rounded-[5px] flex items-center justify-center md:p-1 p-[3px]">
                        <FaXTwitter color="white" className="w-full h-auto" />
                     </div>
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
