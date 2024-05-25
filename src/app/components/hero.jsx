import React from "react";
import Image from "next/image";
import LeftImage from "../../assets/left-image.png";
import MainButton from "../../app/components/common/mainButton";
import TelegramButton from "../../app/components/common/telegramButton";
import WalletAddressButton from "../../app/components/common/walletAddressButton";
import WhitepaperIcon from "../../assets/icons/whitepaper.png";
import Cart from "../../assets/icons/cart.png";

import Telegram from "../../assets/icons/telegram.png";
import Twitter from "../../assets/icons/twitter.png";
import Instagram from "../../assets/icons/instagram.png";

import RickAndMortyImage from "../../assets/rick-morty-main.png";
import PortalImage from "../../assets/teleport.png";
import OctopusLeft from "../../assets/octopus-left.png";
import OctopusRight from "../../assets/octopus-right.png";
import Copy from "../../assets/copy.png";
import Yesil from "../../assets/yesil.png";
import { FaDiscord, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";

const Hero = () => {
   return (
      <div className="hero md:h-[800px] h-auto w-full md:px-20 px-4">
         <div className="absolute left-img md:-left-6 md:top-0 -left-4 -top-12">
            <Image
               src={LeftImage}
               alt="left-image"
               className="md:w-[288px] h-auto w-[200px]"
            />
         </div>
         <div className="container max-w-[1800px] mx-auto flex h-full md:items-center items-start md:flex-row flex-col">
            <div className="left h-full flex flex-col md:justify-center justify-start flex-1 w-full md:flex-shrink-0 flex-grow-0 md:mt-0 mt-6">
               <div className="big-header flex flex-col font-black text-mainBlack md:text-[90px] text-[50px] z-40">
                  <h2>SCHMECKLE</h2>
                  <h2 className="-mt-6">TOKEN</h2>
               </div>
               <div className="text z-40 md:w-[78%] w-[90%] md:mt-4 mt-1">
                  <p className="text-mainBlack font-semibold md:text-xl text-[14px]">
                     It is a platform for Rick and Morty fans to come together
                     and have a fun and exciting crypto experience.
                  </p>
               </div>
               <div className="buttons flex md:mt-8 mt-4 md:gap-10 gap-4">
                  <TelegramButton
                     text="Telegram"
                     isInvert={true}
                     hasIcon={true}
                     link="https://t.me/SchmeckleAnnouncement"
                  />
                  <MainButton
                     icon={Cart}
                     text="Buy $SHMT"
                     isInvert={true}
                     hasIcon={true}
                  />
               </div>
               {/* <div className="wallet-address-button md:mt-6 -mt-5 md:mb-0 mb-2">
                  <WalletAddressButton
                     icon={Copy}
                     hasIcon={true}
                     isInvert={false}
                     text="375fp38Luff7SegguJoQiFqUbdzHwu6opZonx47u3fQi"
                     link="https://solscan.io/token/375fp38Luff7SegguJoQiFqUbdzHwu6opZonx47u3fQi"
                  />
               </div> */}
               <div className="social-icons flex md:gap-[10px] gap-[8px] md:mt-2 -mt-4 z-40">
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
            <div className="right w-full md:flex-1 md:h-full h-auto flex md:items-end items-end justify-center relative md:flex-shrink-0 flex-grow-0 md:mt-0 mt-2">
               <Image
                  src={PortalImage}
                  alt="portal"
                  className="portal absolute -z-10 md:left-8 -left-4 portal-turn md:w-auto md:h-auto"
               />
               <Image
                  src={RickAndMortyImage}
                  alt="rick-morty"
                  className="md:h-[740px] md:w-auto w-3/4 h-auto md:ml-40"
               />

               <div className="octopus-left absolute md:top-0 bottom-16 md:left-0 -left-20">
                  <Image
                     src={OctopusLeft}
                     alt="octopus-left"
                     className="md:w-[275px] w-[160px] h-auto md:rotate-0 -rotate-90"
                  />
               </div>
               <div className="octopus-right absolute md:-right-44 md:top-20 -bottom-4 -right-16">
                  <Image
                     src={OctopusRight}
                     alt="octopus-left"
                     className="md:w-[280px] w-[120px] h-auto md:rotate-[35deg] rotate-90"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
