import React from "react";
import TokenomicsImage from "../../assets/tokenomics.png";
import Image from "next/image";
const Tokenomics = () => {
   return (
      <div
         id="tokenomics"
         className="tokenomics w-full flex flex-col items-center md:mt-0 md:pt-40 pt-0 mt-16 mb-8 relative"
      >
         <div className="header relative">
            <div className="header-top absolute md:-top-[110px] -top-[32px] md:-left-[156px] -left-[20px]">
               <h5 className="md:text-[110px] text-[40px] text-transparent what-is-schmeckle-header-top font-extrabold">
                  TOKENOMICS
               </h5>
               <div className="gradient-overlay md:h-[120px] h-[60px] md:top-[20px] top-[2px]"></div>
            </div>
            <h5 className="md:text-6xl text-[35px] font-extrabold">
               TOKENOMICS
            </h5>
         </div>
         <div className="image-container w-full flex justify-center md:mt-0 -mt-8">
            <Image src={TokenomicsImage} alt="Tokenomics" />
         </div>
      </div>
   );
};

export default Tokenomics;
