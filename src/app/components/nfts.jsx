"use client";
import React, { useState } from "react";
import Octopus from "../../assets/octopus-left.png";
import Image from "next/image";
import Dots from "../../assets/icons/dots.png";

import ItemImage1 from "../../assets/item-image1.png";
import ItemImage2 from "../../assets/item-image2.png";
import ItemImage3 from "../../assets/item-image3.png";
import useEmblaCarousel from "embla-carousel-react";

const NFTS = () => {
   const [buttonHover1, setButtonHover1] = useState(false);
   const [buttonHover2, setButtonHover2] = useState(false);
   const [buttonHover3, setButtonHover3] = useState(false);
   const [emblaRef] = useEmblaCarousel({
      dragFree: true,
   });
   return (
      <div className="nfts-container w-full flex justify-center relative mt-20 md:mb-0 -mb-32">
         <Image
            src={Octopus}
            alt="octopus"
            className="absolute -left-32 -top-12 md:h-[400px] h-[300px] w-auto flipped-octopus"
         />
         <div className="inside-container md:ml-[170px] md:mr-12 mr-0 max-w-[1800px] h-[300px] w-full  z-40 gap-8">
            <div className="items w-full h-full z-40 md:flex hidden gap-8">
               <div className="item flex-1 w-full h-full bg-white border-4 border-black rounded-[10px] flex p-5 gap-[20px]">
                  <div className="image-container flex-[5] w-full h-full bg-black rounded-[15px] flex items-center justify-center p-1">
                     <Image
                        src={ItemImage1}
                        alt="item-image"
                        className="h-full w-auto"
                     />
                  </div>
                  <div className="texts-container flex-[6] flex flex-col py-4 justify-between">
                     <div className="top flex flex-col gap-5">
                        <div className="name flex items-center justify-between px-3">
                           <h5 className="font-extrabold md:text-[30px] text-[10px]">
                              SOL
                           </h5>
                           <h5 className="font-medium md:text-[20px] text-[8px]">
                              SOLANA
                           </h5>
                        </div>
                        <div
                           className="details w-full h-12 rounded-[15px] border-black border-4 text-black bg-mainYellow flex items-center justify-between px-3  cursor-pointer hover:bg-black hover:text-white transition-colors duration-300"
                           onMouseEnter={() => setButtonHover1(true)}
                           onMouseLeave={() => setButtonHover1(false)}
                        >
                           <h5 className="font-semibold text-[20px]">
                              Details
                           </h5>
                           <Image
                              src={Dots}
                              alt="dots"
                              className={`h-[20px] w-auto ${
                                 buttonHover1
                                    ? `invert transition-all duration-300`
                                    : ``
                              }`}
                           />
                        </div>
                     </div>
                     <div className="bottom w-full flex items-center justify-center">
                        <h5 className="font-extrabold text-[30px]">
                           COMING SOON
                        </h5>
                     </div>
                  </div>
               </div>
               <div className="item flex-1 w-full h-full bg-white border-4 border-black rounded-[10px] flex p-5 gap-[20px]">
                  <div className="image-container flex-[5] w-full h-full bg-black rounded-[15px] flex items-center justify-center p-1">
                     <Image
                        src={ItemImage2}
                        alt="item-image"
                        className="w-full h-auto"
                     />
                  </div>
                  <div className="texts-container flex-[6] flex flex-col py-4 justify-between">
                     <div className="top flex flex-col gap-5">
                        <div className="name flex items-center justify-between px-3">
                           <h5 className="font-extrabold text-[30px]">SOL</h5>
                           <h5 className="font-medium text-[20px]">SOLANA</h5>
                        </div>
                        <div
                           className="details w-full h-12 rounded-[15px] border-black border-4 text-black bg-mainYellow flex items-center justify-between px-3  cursor-pointer hover:bg-black hover:text-white transition-colors duration-300"
                           onMouseEnter={() => setButtonHover2(true)}
                           onMouseLeave={() => setButtonHover2(false)}
                        >
                           <h5 className="font-semibold text-[20px]">
                              Details
                           </h5>
                           <Image
                              src={Dots}
                              alt="dots"
                              className={`h-[20px] w-auto ${
                                 buttonHover2
                                    ? `invert transition-all duration-300`
                                    : ``
                              }`}
                           />
                        </div>
                     </div>
                     <div className="bottom w-full flex items-center justify-center">
                        <h5 className="font-extrabold text-[30px]">
                           COMING SOON
                        </h5>
                     </div>
                  </div>
               </div>
               <div className="item flex-1 w-full h-full bg-white border-4 border-black rounded-[10px] flex p-5 gap-[20px]">
                  <div className="image-container flex-[5] w-full h-full bg-black rounded-[15px] flex items-center justify-center p-1">
                     <Image
                        src={ItemImage3}
                        alt="item-image"
                        className="w-full h-auto"
                     />
                  </div>
                  <div className="texts-container flex-[6] flex flex-col py-4 justify-between">
                     <div className="top flex flex-col gap-5">
                        <div className="name flex items-center justify-between px-3">
                           <h5 className="font-extrabold text-[30px]">SOL</h5>
                           <h5 className="font-medium text-[20px]">SOLANA</h5>
                        </div>
                        <div
                           className="details w-full h-12 rounded-[15px] border-black border-4 text-black bg-mainYellow flex items-center justify-between px-3  cursor-pointer hover:bg-black hover:text-white transition-colors duration-300"
                           onMouseEnter={() => setButtonHover3(true)}
                           onMouseLeave={() => setButtonHover3(false)}
                        >
                           <h5 className="font-semibold text-[20px]">
                              Details
                           </h5>
                           <Image
                              src={Dots}
                              alt="dots"
                              className={`h-[20px] w-auto ${
                                 buttonHover3
                                    ? `invert transition-all duration-300`
                                    : ``
                              }`}
                           />
                        </div>
                     </div>
                     <div className="bottom w-full flex items-center justify-center">
                        <h5 className="font-extrabold text-[30px]">
                           COMING SOON
                        </h5>
                     </div>
                  </div>
               </div>
            </div>
            <div
               className="embla overflow-hidden overflow-x-hidden md:hidden flex w-full pl-4"
               ref={emblaRef}
            >
               <div className="embla__container flex w-full">
                  <div className="embla__slide mr-4">
                     <div className="item flex-1 bg-white border-4 h-[160px] w-[300px] border-black rounded-[10px] flex p-2 gap-[10px] cursor-grab">
                        <div className="image-container flex-[5] w-full h-full bg-black rounded-[15px] flex items-center justify-center p-1">
                           <Image
                              src={ItemImage1}
                              alt="item-image"
                              className="h-full w-auto"
                           />
                        </div>
                        <div className="texts-container flex-[6] flex flex-col py-4 justify-between">
                           <div className="top flex flex-col gap-2">
                              <div className="name flex items-center justify-between px-3">
                                 <h5 className="font-extrabold text-[16px]">
                                    SOL
                                 </h5>
                                 <h5 className="font-medium text-[12px]">
                                    SOLANA
                                 </h5>
                              </div>
                              <div
                                 className="details w-full h-10 rounded-[15px] border-black border-[3px] text-black bg-mainYellow flex items-center justify-between px-3  cursor-pointer hover:bg-black hover:text-white transition-colors duration-300"
                                 onMouseEnter={() => setButtonHover1(true)}
                                 onMouseLeave={() => setButtonHover1(false)}
                              >
                                 <h5 className="font-semibold text-[20px]">
                                    Details
                                 </h5>
                                 <Image
                                    src={Dots}
                                    alt="dots"
                                    className={`h-[20px] w-auto ${
                                       buttonHover1
                                          ? `invert transition-all duration-300`
                                          : ``
                                    }`}
                                 />
                              </div>
                           </div>
                           <div className="bottom w-full flex items-center justify-center mt-2">
                              <h5 className="font-extrabold text-[16px]">
                                 COMING SOON
                              </h5>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="embla__slide mr-4">
                     <div className="item flex-1 bg-white border-4 h-[160px] w-[300px] border-black rounded-[10px] flex p-2 gap-[10px] cursor-grab">
                        <div className="image-container flex-[5] w-full h-full bg-black rounded-[15px] flex items-center justify-center p-1">
                           <Image
                              src={ItemImage2}
                              alt="item-image"
                              className="w-full h-auto"
                           />
                        </div>
                        <div className="texts-container flex-[6] flex flex-col py-4 justify-between">
                           <div className="top flex flex-col gap-2">
                              <div className="name flex items-center justify-between px-3">
                                 <h5 className="font-extrabold text-[16px]">
                                    SOL
                                 </h5>
                                 <h5 className="font-medium text-[12px]">
                                    SOLANA
                                 </h5>
                              </div>
                              <div
                                 className="details w-full h-10 rounded-[15px] border-black border-[3px] text-black bg-mainYellow flex items-center justify-between px-3  cursor-pointer hover:bg-black hover:text-white transition-colors duration-300"
                                 onMouseEnter={() => setButtonHover2(true)}
                                 onMouseLeave={() => setButtonHover2(false)}
                              >
                                 <h5 className="font-semibold text-[20px]">
                                    Details
                                 </h5>
                                 <Image
                                    src={Dots}
                                    alt="dots"
                                    className={`h-[20px] w-auto ${
                                       buttonHover2
                                          ? `invert transition-all duration-300`
                                          : ``
                                    }`}
                                 />
                              </div>
                           </div>
                           <div className="bottom w-full flex items-center justify-center mt-2">
                              <h5 className="font-extrabold text-[16px]">
                                 COMING SOON
                              </h5>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="embla__slide mr-4">
                     <div className="item flex-1 bg-white border-4 h-[160px] w-[300px] border-black rounded-[10px] flex p-2 gap-[10px] cursor-grab">
                        <div className="image-container flex-[5] w-full h-full bg-black rounded-[15px] flex items-center justify-center p-1">
                           <Image
                              src={ItemImage3}
                              alt="item-image"
                              className="w-full h-auto"
                           />
                        </div>
                        <div className="texts-container flex-[6] flex flex-col py-4 justify-between">
                           <div className="top flex flex-col gap-2">
                              <div className="name flex items-center justify-between px-3">
                                 <h5 className="font-extrabold text-[16px]">
                                    SOL
                                 </h5>
                                 <h5 className="font-medium text-[12px]">
                                    SOLANA
                                 </h5>
                              </div>
                              <div
                                 className="details w-full h-10 rounded-[15px] border-black border-[3px] text-black bg-mainYellow flex items-center justify-between px-3  cursor-pointer hover:bg-black hover:text-white transition-colors duration-300"
                                 onMouseEnter={() => setButtonHover3(true)}
                                 onMouseLeave={() => setButtonHover3(false)}
                              >
                                 <h5 className="font-semibold text-[20px]">
                                    Details
                                 </h5>
                                 <Image
                                    src={Dots}
                                    alt="dots"
                                    className={`h-[20px] w-auto ${
                                       buttonHover3
                                          ? `invert transition-all duration-300`
                                          : ``
                                    }`}
                                 />
                              </div>
                           </div>
                           <div className="bottom w-full flex items-center justify-center mt-2">
                              <h5 className="font-extrabold text-[16px]">
                                 COMING SOON
                              </h5>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default NFTS;
