import React from "react";
import Howtobuyimage from "../../assets/howtobuyimage.png";
import Image from "next/image";
import MainButton from "./common/mainButton";

const HowToBuy = () => {
   return (
      <div
         id="howtobuy"
         className="how-to-buy w-full flex md:h-[600px] h-auto px-4 justify-center md:flex-row flex-col-reverse md:-mt-8 pt-24 -mt-28"
      >
         <div className="container max-w-[1800px] flex md:gap-20 gap-2 md:flex-row flex-col-reverse">
            <div className="image-container md:rounded-[84px] rounded-[32px] md:w-[600px] w-full md:h-auto h-auto flex-shrink-0 ">
               <Image
                  src={Howtobuyimage}
                  alt="How to Buy"
                  className="object-cover md:h-[500px] w-[600px] h-[300px] md:rounded-[84px] rounded-[32px]"
                  width={1600}
                  height={900}
               />
            </div>
            <div className="text-container md:pr-44 pr-0">
               <div className="header relative mt-20">
                  <div className="header-top absolute md:-top-[100px] -top-[24px] md:left-8 left-2">
                     <h5 className="md:text-[110px] text-[36px] text-transparent  font-extrabold whitespace-nowrap">
                        <span className="what-is-schmeckle-header-top">
                           Join the airdrop
                        </span>
                     </h5>
                     <div className="gradient-overlay md:h-[120px] h-[60px] md:top-[20px] top-[2px]"></div>
                  </div>
                  <h5 className="md:text-6xl text-[35px] font-extrabold">
                     Join the airdrop
                  </h5>
               </div>
               <p className="md:text-[23px] text-[14px] md:mt-12 mt-4 ">
                  To participate in the Schmeckle Airdrop, you can earn rewards
                  every 6 hours through the Schmeckle Telegram Bot. Start
                  collecting unique fan tokens created for Rick and Morty now!
               </p>
               <div className="button-container md:mt-16 mt-6">
                  <MainButton text="Coming Soon" isInvert={true} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default HowToBuy;