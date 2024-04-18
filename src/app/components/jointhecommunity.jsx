import React from "react";
import Image from "next/image";
import MainButton from "./common/mainButton";
import MonsterImage from "../../assets/communitymonster.png";

const JoinTheCommunity = () => {
   return (
      <div
         id="contact"
         className="join-the-community w-full flex justify-center md:mt-0 md:pt-20 pt-0 mt-4"
      >
         <div className="container max-w-[1800px] w-full flex justify-center md:px-0 px-[1px] relative">
            <div className="join-container md:w-[1578px] md:h-[617px] h-[350px] w-full relative flex md:items-center items-start justify-between md:pl-0 pl-8">
               <div className="texts flex flex-col md:w-[550px] md:ml-32 ml-0 md:mt-20 sm:mt-20 max-[450px]:mt-14 mt-[88px] flex-shrink-0">
                  <h2 className="md:text-[70px] text-[16px] font-extrabold">
                     Join the $SHMT
                  </h2>
                  <h2 className="md:text-[70px] font-extrabold md:-mt-6 -mt-2 text-[16px]">
                     Community!
                  </h2>
                  <p className="md:text-[20px] text-[8px] font-medium md:mt-2 mt-1 md:w-auto w-5/12">
                     Join the SHMT community on Telegram & Discord and follow us
                     on X for the latest news and insights.
                  </p>
                  <div className="button-container md:mt-6 mt-2 mb-4">
                     <MainButton
                        text="Join Community"
                        isInvert={true}
                        link="https://linktr.ee/schmeckletoken"
                     />
                  </div>
               </div>
               <div className="image md:relative absolute w-full h-full">
                  <div className="absolute image-container md:-top-8 md:-right-8 max-[450px]:top-8 top-16 right-8">
                     <Image
                        src={MonsterImage}
                        alt="Join the Community"
                        className="h-auto md:w-[850px] w-[200px]"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default JoinTheCommunity;
