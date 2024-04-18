import Image from "next/image";
import React from "react";
import RickMorty from "../../assets/rick-and-morty-what-is.png";
import MainButton from "./common/mainButton";
import MonstersImage from "../../assets/monsters.png";
import PinkBlob from "../../assets/pinkblob.png";

const Whatisschmeckle = () => {
   return (
      <div
         id="about"
         className="what-is-schmeckle flex md:flex-row flex-col-reverse w-full md:pt-28 md:pb-28 pt-16 pb-8 md:gap-24 gap-0 relative md:h-[930px] h-auto md:px-0 px-4"
      >
         <div className="image-container flex-[4] w-full md:pl-12 pl-0">
            <Image src={RickMorty} alt="Rick and Morty" />
         </div>
         {/* <div className="pink-blob-container absolute -right-40 -top-20 -z-10">
            <Image
               src={PinkBlob}
               alt="Pink Blob"
               className="rotate-[68deg] opacity-80 h-[1000px] w-auto"
            />
         </div> */}
         <div className="text flex-[6] flex flex-col w-full relative md:h-[550px] h-auto">
            <div className="header">
               <div className="header-top absolute md:-top-[100px] -top-[24px] md:left-2 left-1">
                  <h5 className="md:text-[110px] text-[36px] text-transparent what-is-schmeckle-header-top font-extrabold whitespace-nowrap">
                     What is Schmeckle
                  </h5>
                  <div className="gradient-overlay md:h-[120px] h-[60px] md:top-[20px] top-[2px] -z-20"></div>
               </div>
               <h5 className="md:text-6xl text-[32px] font-extrabold">
                  What is Schmeckle
               </h5>
            </div>
            <div className="text w-full md:pr-32 pr-0 md:text-[23px] text-[14px] font-medium text-mainBlack md:mt-12 mt-4">
               <p>
                  Schmeckle Token sets out to bring a breath of fresh air and
                  endless fun to the world of cryptocurrency! Inspired by the
                  extraordinary universe of Rick and Morty, Schmeckle Token
                  invites you on an adventure filled with NFTs. Get ready to
                  push the boundaries of the crypto world while sending surprise
                  gifts to your friends with Schmeckle Token!
               </p>
               <br />
               <p>
                  As the SchmecklesCoin team, our goal is to transcend the
                  boundaries of the traditional financial order and create a
                  world where fun and freedom converge. Schmeckle Token is a
                  platform that enables everyone to find their place in the
                  world of cryptocurrency and experience something unique. Are
                  you ready to join this unforgettable journey and become part
                  of the exciting world of Schmeckle Token?
               </p>
               <br />
               <p>
                  We're here and waiting for you, because in the world of
                  SchmecklesCoin, adventure awaits at every turn!
               </p>
            </div>
            <div className="button-container md:mt-12 mt-6">
               <MainButton
                  text="Join Community"
                  link="https://t.me/Schmeckleofficial"
               />
            </div>
         </div>
         <div className="monsters-image absolute md:right-12  md:left-auto -left-4 md:bottom-0 bottom-16">
            <Image
               src={MonstersImage}
               alt="Monsters"
               className="md:w-[280px] w-[180px] h-auto"
            />
         </div>
      </div>
   );
};

export default Whatisschmeckle;
