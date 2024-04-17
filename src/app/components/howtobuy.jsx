import React from "react";
import Howtobuyimage from "../../assets/howtobuyimage.png";
import Image from "next/image";
import MainButton from "./common/mainButton";

const HowToBuy = () => {
   return (
      <div
         id="howtobuy"
         className="how-to-buy w-full flex md:h-[600px] h-auto px-4 justify-center md:flex-row flex-col-reverse md:mt-0 pt-24 -mt-12"
      >
         <div className="container max-w-[1800px] flex md:gap-20 gap-2 md:flex-row flex-col-reverse">
            <div className="image-container md:rounded-[84px] rounded-[32px] md:w-[600px] w-full md:h-auto h-auto flex-shrink-0">
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
                        <span className="what-is-schemeckle-header-top">
                           How to buy
                        </span>{" "}
                        <span className="custom-outline text-mainWhite">
                           $SHMT
                        </span>
                     </h5>
                     <div className="gradient-overlay md:h-[120px] h-[60px] md:top-[20px] top-[2px]"></div>
                  </div>
                  <h5 className="md:text-6xl text-[35px] font-extrabold">
                     How to buy $SHMT
                  </h5>
               </div>
               <p className="md:text-[23px] text-[14px] md:mt-12 mt-4">
                  $SHMT tokens are just a few steps away and you have to suit
                  your preference for a smooth start we recommend using MetaMask
                  a popular wallet for Solona and Sol tokens once you`ve got
                  matemask, purchase some Solona $SOL - this is what you`ll user
                  to trade for $SHMT.
               </p>
               <div className="button-container md:mt-16 mt-6">
                  <MainButton text="Join Community" isInvert={true} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default HowToBuy;
