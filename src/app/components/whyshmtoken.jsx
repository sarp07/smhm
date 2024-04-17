import React from "react";
import RickImage from "../../assets/item-image1.png";
import RightImage from "../../assets/left-image.png";
import Image from "next/image";
import MainButton from "./common/mainButton";

const Whyshmtoken = () => {
   return (
      <div className="why-shm-token-container w-full flex items-center relative mt-24 mb-6 h-[700px] md:flex-row flex-col md:px-0 px-4 -md:mb-12">
         <div className="right-img-container absolute -right-16 top-44 z-40 md:flex hidden">
            <Image
               src={RightImage}
               alt="right-image"
               className="h-[750px] w-auto flipped-right-img"
            />
         </div>
         {/* <div className="left-img-container absolute left-0 top-0"></div> */}
         <div className="left md:pl-40 pl-0 md:px-0">
            <div className="header relative md:mb-24 mb-6">
               <div className="header-top absolute md:-top-[100px] -top-[24px] left-4 z-10">
                  <h5 className="md:text-[100px] text-[36px] text-transparent  font-extrabold whitespace-nowrap z-10">
                     <span className="what-is-schemeckle-header-top z-10 ">
                        Why
                     </span>
                     <span className="custom-outline text-mainWhite ml-6 z-10">
                        $
                     </span>
                     <span className="what-is-schemeckle-header-top z-10 ">
                        SHM Token
                     </span>
                  </h5>
                  <div className="gradient-overlay md:h-[120px] h-[60px] md:top-[20px] top-[2px]"></div>
               </div>
               <div className="z-40 relative">
                  <h5 className="md:text-6xl text-[35px] font-extrabold">
                     Why{" "}
                     <span className="custom-outline text-mainYellow z-30">
                        $
                     </span>
                     <span className="what-is-schemeckle-header-top text-mainYellow z-30">
                        SHM
                     </span>{" "}
                     Token
                  </h5>
               </div>
            </div>
            <div className="text w-full max-w-[1750px]">
               <p className="md:text-[23px] text-[14px]">
                  $SHM, designed with inspiration from the Rick and Morty
                  universe, is a fun and innovative token. Enter a world filled
                  with NFTs and become part of our community. With fair
                  distribution and transparent economy, $SHM has promising
                  potential. Join us and take your place in the exciting journey
                  of $SHM!
               </p>
            </div>
            <div className="button-container md:mt-20 mt-6">
               <MainButton text="Buy $SHM" isInvert={true} />
            </div>
         </div>
         <div className="right w-full md:mt-0 -mt-8">
            <div className="image-container w-full flex justify-center relative z-50 md:pr-12 pr-0">
               <Image
                  src={RickImage}
                  alt="rick-image"
                  className="md:h-[750px] md:w-auto w-3/4 h-auto"
               />
            </div>
         </div>
      </div>
   );
};

export default Whyshmtoken;
