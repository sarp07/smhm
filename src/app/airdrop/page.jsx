"use client";
import React, { useState } from "react";
import OctopusLeft from "../../assets/octopus-left.png";
import OctopusRight from "../../assets/octopus-right.png";
import JoinTheCommunity from "../components/jointhecommunity";
import SnailImage from "../../assets/snail.png";
import Image from "next/image";
import RickMoney from "../../assets/rick-money.png";

import AirdropSS1 from "../../assets/airdrop-ss1.jpg";
import AirdropSS2 from "../../assets/airdrop-ss2.jpg";
import AirdropSS3 from "../../assets/airdrop-ss3.jpg";
import AirdropSS4 from "../../assets/airdrop-ss4.jpg";
import AirdropSS5 from "../../assets/airdrop-ss5.jpg";
import AirdropSS6 from "../../assets/airdrop-ss6.jpg";
import AirdropSS7 from "../../assets/airdrop-ss7.jpg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import MainButton from "../components/common/mainButton";

const airdropExplanationItems = [
   {
      image: AirdropSS1,
      title: "Open the Telegram app",
      text: "If you don't have the Telegram app, you can download it from the Play Store or the App Store.",
      id: 0,
   },
   {
      image: AirdropSS2,
      title: "Open your Schmeckle bot",
      text: "Open the Schmeckle Telegram bot.",
      id: 1,
   },
   {
      image: AirdropSS3,
      title: "Start Button",
      text: "Click Start and one last step is left to start mining.",
      id: 2,
   },
   {
      image: AirdropSS4,
      title: "Connect SHM",
      text: "Click on the SHM Button and run the SHM Bot.",
      id: 3,
   },
   {
      image: AirdropSS5,
      title: "Schmeckle Bot Active",
      text: "You have activated the Schmeckle Bot. At 6 hour intervals you will receive SHM tokens. Don't forget to Claim!",
      id: 4,
   },
   {
      image: AirdropSS6,
      title: "Tasks",
      text: "Fulfill the tasks specified for Schmeckle and earn more SHM Tokens.",
      id: 5,
   },
   {
      image: AirdropSS7,
      title: "Invıte Friends",
      text: "Invite your Friends and Relatives to use Schmeckle and earn 10% more.",
      id: 6,
   },
];

const Airdrop = () => {
   const [itemIndex, setItemIndex] = useState(0);
   return (
      <div className="container max-w-[1800px]  mx-auto flex h-full md:items-center items-start flex-col relative tokenomics-main-page-container ">
         <div className="title-container md:min-h-[400px] h-auto w-full lg:mt-0 mt-8">
            <div className="snail-image-container md:mt-24 mt-4 w-full flex justify-center pr-48">
               <Image
                  src={SnailImage}
                  alt="snail"
                  className="snail-image-move-anim lg:w-[250px] w-[100px] h-auto lg:-mb-12 -mb-6"
               />
            </div>
            <div className="title w-full flex items-center  flex-col">
               <h1 className="font-black md:text-[100px] text-[50px]">
                  AIRDROP
               </h1>
               <p className="md:text-[20px] text-[12px] font-semibold md:-mt-4 -mt-2">
                  Accumulate SHM Token with Schmeckle Telegram Bot!
               </p>
            </div>
         </div>
         <div className="what-is-shm-airdrop w-full flex lg:flex-row flex-col max-w-[1600px] mx-auto mt-40 px-6">
            <div className="text-part flex flex-col">
               <h5 className="lg:text-[60px] text-[35px] font-extrabold">
                  What is SHM Airdrop?
               </h5>
               <p className="lg:text-[23px] text-[13px] font-semibold text-[#1D1D1D]">
                  Schmeckle Token (SHM) is a cryptocurrency specifically
                  designed for fans of the popular animated series Rick and
                  Morty. Fans can use our specially designed Schmeckle Telegram
                  Bot to mine and earn SHM Tokens every 6 hours. Additionally,
                  you can earn SHM Tokens by completing simple tasks such as
                  social media interactions and community activities.
               </p>
            </div>
            <div className="image-part lg:mt-0 mt-6">
               <Image src={RickMoney} alt="rick-money" />
            </div>
         </div>
         <div className="airdrop-explanation-list w-full max-w-[1400px] lg:max-h-[600px] lg:h-[600px] mx-auto mt-24">
            <Swiper
               modules={[Navigation, Pagination, Scrollbar, A11y]}
               spaceBetween={0}
               slidesPerView={1}
               navigation
               style={{
                  "--swiper-navigation-color": "#000",
                  "--swiper-navigation-size": "25px",
               }}
               pagination={{ clickable: true }}
               scrollbar={{ draggable: true }}
               onSwiper={(swiper) => console.log(swiper)}
               onSlideChange={() => console.log("slide change")}
            >
               <SwiperSlide>
                  <div className="container flex  w-full lg:max-h-[600px] lg:px-20 px-8 lg:gap-20 gap-3 lg:py-0 pb-10">
                     <div className="image-container lg:h-[600px] lg:flex-initial flex-1">
                        <Image
                           src={airdropExplanationItems[0].image}
                           alt="item-img"
                           className="lg:w-auto lg:h-full w-[140px] h-auto lg:rounded-[20px] rounded-[10px]"
                        />
                     </div>
                     <div className="text-container flex lg:h-[600px] h-auto items-center flex-1 justify-center w-full">
                        <div className="inside-container h-full flex flex-col w-full justify-center gap-2">
                           <h5 className="font-extrabold lg:text-[40px] text-[16px]">
                              {airdropExplanationItems[0].title}
                           </h5>
                           <p className="font-semibold lg:text-[23px] text-[12px] text-[#1D1D1D]">
                              {airdropExplanationItems[0].text}
                           </p>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="container flex  w-full lg:max-h-[600px] lg:px-20 px-8 lg:gap-20 gap-3 lg:py-0 pb-10">
                     <div className="image-container lg:h-[600px] lg:flex-initial flex-1">
                        <Image
                           src={airdropExplanationItems[1].image}
                           alt="item-img"
                           className="lg:w-auto lg:h-full w-[140px] h-auto lg:rounded-[20px] rounded-[10px]"
                        />
                     </div>
                     <div className="text-container flex lg:h-[600px] h-auto items-center flex-1 justify-center w-full">
                        <div className="inside-container h-full flex flex-col w-full justify-center gap-2">
                           <h5 className="font-extrabold lg:text-[40px] text-[16px]">
                              {airdropExplanationItems[1].title}
                           </h5>
                           <p className="font-semibold lg:text-[23px] text-[12px] text-[#1D1D1D]">
                              {airdropExplanationItems[1].text}
                           </p>
                           <div className="button-container lg:mt-10 mt-2 lg:ml-0 ml-2">
                              <MainButton
                                 text="Open Bot"
                                 link="https://t.me/SchmeckleCryptoBot"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="container flex  w-full lg:max-h-[600px] lg:px-20 px-8 lg:gap-20 gap-3 lg:py-0 pb-10">
                     <div className="image-container lg:h-[600px] lg:flex-initial flex-1">
                        <Image
                           src={airdropExplanationItems[2].image}
                           alt="item-img"
                           className="lg:w-auto lg:h-full w-[140px] h-auto lg:rounded-[20px] rounded-[10px]"
                        />
                     </div>
                     <div className="text-container flex lg:h-[600px] h-auto items-center flex-1 justify-center w-full">
                        <div className="inside-container h-full flex flex-col w-full justify-center gap-2">
                           <h5 className="font-extrabold lg:text-[40px] text-[16px]">
                              {airdropExplanationItems[2].title}
                           </h5>
                           <p className="font-semibold lg:text-[23px] text-[12px] text-[#1D1D1D]">
                              {airdropExplanationItems[2].text}
                           </p>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="container flex  w-full lg:max-h-[600px] lg:px-20 px-8 lg:gap-20 gap-3 lg:py-0 pb-10">
                     <div className="image-container lg:h-[600px] lg:flex-initial flex-1">
                        <Image
                           src={airdropExplanationItems[3].image}
                           alt="item-img"
                           className="lg:w-auto lg:h-full w-[140px] h-auto lg:rounded-[20px] rounded-[10px]"
                        />
                     </div>
                     <div className="text-container flex lg:h-[600px] h-auto items-center flex-1 justify-center w-full">
                        <div className="inside-container h-full flex flex-col w-full justify-center gap-2">
                           <h5 className="font-extrabold lg:text-[40px] text-[16px]">
                              {airdropExplanationItems[3].title}
                           </h5>
                           <p className="font-semibold lg:text-[23px] text-[12px] text-[#1D1D1D]">
                              {airdropExplanationItems[3].text}
                           </p>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="container flex  w-full lg:max-h-[600px] lg:px-20 px-8 lg:gap-20 gap-3 lg:py-0 pb-10">
                     <div className="image-container lg:h-[600px] lg:flex-initial flex-1">
                        <Image
                           src={airdropExplanationItems[4].image}
                           alt="item-img"
                           className="lg:w-auto lg:h-full w-[140px] h-auto lg:rounded-[20px] rounded-[10px]"
                        />
                     </div>
                     <div className="text-container flex lg:h-[600px] h-auto items-center flex-1 justify-center w-full">
                        <div className="inside-container h-full flex flex-col w-full justify-center gap-2">
                           <h5 className="font-extrabold lg:text-[40px] text-[16px]">
                              {airdropExplanationItems[4].title}
                           </h5>
                           <p className="font-semibold lg:text-[23px] text-[12px] text-[#1D1D1D]">
                              {airdropExplanationItems[4].text}
                           </p>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="container flex  w-full lg:max-h-[600px] lg:px-20 px-8 lg:gap-20 gap-3 lg:py-0 pb-10">
                     <div className="image-container lg:h-[600px] lg:flex-initial flex-1">
                        <Image
                           src={airdropExplanationItems[5].image}
                           alt="item-img"
                           className="lg:w-auto lg:h-full w-[140px] h-auto lg:rounded-[20px] rounded-[10px]"
                        />
                     </div>
                     <div className="text-container flex lg:h-[600px] h-auto items-center flex-1 justify-center w-full">
                        <div className="inside-container h-full flex flex-col w-full justify-center gap-2">
                           <h5 className="font-extrabold lg:text-[40px] text-[16px]">
                              {airdropExplanationItems[5].title}
                           </h5>
                           <p className="font-semibold lg:text-[23px] text-[12px] text-[#1D1D1D]">
                              {airdropExplanationItems[5].text}
                           </p>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="container flex  w-full lg:max-h-[600px] lg:px-20 px-8 lg:gap-20 gap-3 lg:py-0 pb-10">
                     <div className="image-container lg:h-[600px] lg:flex-initial flex-1">
                        <Image
                           src={airdropExplanationItems[6].image}
                           alt="item-img"
                           className="lg:w-auto lg:h-full w-[140px] h-auto lg:rounded-[20px] rounded-[10px]"
                        />
                     </div>
                     <div className="text-container flex lg:h-[600px] h-auto items-center flex-1 justify-center w-full">
                        <div className="inside-container h-full flex flex-col w-full justify-center gap-2">
                           <h5 className="font-extrabold lg:text-[40px] text-[16px]">
                              {airdropExplanationItems[6].title}
                           </h5>
                           <p className="font-semibold lg:text-[23px] text-[12px] text-[#1D1D1D]">
                              {airdropExplanationItems[6].text}
                           </p>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            </Swiper>
         </div>
         <JoinTheCommunity />
         <div className="octopus-left absolute md:top-0 top-44 md:left-20 -left-7">
            <Image
               src={OctopusLeft}
               alt="octopus-left"
               className="md:w-[275px] w-[130px] h-auto md:rotate-0 -rotate-[60deg]"
            />
         </div>
         <div className="octopus-right absolute md:right-20 md:top-0 top-48 right-0">
            <Image
               src={OctopusRight}
               alt="octopus-left"
               className="md:w-[350px] w-[100px] h-auto md:rotate-0 rotate-90"
            />
         </div>
      </div>
   );
};

export default Airdrop;
