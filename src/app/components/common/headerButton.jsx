"use client";
import Image from "next/image";
import React, { useState } from "react";
import Wallet from "../../../assets/icons/wallet.png";

const HeaderButton = () => {
   const [buttonHover, setButtonHover] = useState(false);
   const [isConnected, setIsConnected] = useState(false);
   const [address, setAddress] = useState('');

   const getProvider = () => {
      if ('phantom' in window) {
         const provider = window.phantom?.solana;

         if (provider?.isPhantom) {
            return provider;
         }
      }

      window.open('https://phantom.app/', '_blank');
   };

   const handleConnect = async () => {
      const provider = getProvider();
      try {
         const resp = await provider.connect();
         console.log(resp.publicKey.toString());
         setIsConnected(true);
         const wallet = provider.publicKey.toString();
         setAddress(wallet);
      } catch (err) {

      }
   }

   const handleDisconnect = async () => {
      const provider = getProvider();
      try {
         const resp = await provider.disconnect();
         console.log('Disconnected!');
         setIsConnected(false);
         setAddress('');
      } catch (err) {

      }
   }

   const walletAddress = address
      ? `${address.slice(0, 6)}...${address.slice(-4)}`
      : "No Wallet Address";

   return (
      <>
         {!isConnected ? (
            <div
               className={`w-[306px] h-[76px] border-[4px]  rounded-[10px] flex items-center pl-[32px] gap-4 cursor-pointer transition-all duration-300 ${buttonHover
                  ? `bg-black border-black text-white`
                  : `bg-mainYellow border-mainBorder text-black`
                  }`}
               onMouseEnter={() => setButtonHover(true)}
               onMouseLeave={() => setButtonHover(false)}
               onClick={handleConnect}
            >
               <Image
                  src={Wallet}
                  alt="wallet"
                  className={`h-[40px] w-[40px] transition-all duration-400 ${buttonHover ? `invert` : ``
                     }`}
               />
               <h5 className="font-bold text-[22px]">
                  Connect Wallet
               </h5>
            </div >
         ) : (
            <div
               className={`w-[306px] h-[76px] border-[4px]  rounded-[10px] flex items-center pl-[32px] gap-4 cursor-pointer transition-all duration-300 ${buttonHover
                  ? `bg-black border-black text-white`
                  : `bg-mainYellow border-mainBorder text-black`
                  }`}
               onMouseEnter={() => setButtonHover(true)}
               onMouseLeave={() => setButtonHover(false)}
               onClick={handleDisconnect}
            >
               <Image
                  src={Wallet}
                  alt="wallet"
                  className={`h-[40px] w-[40px] transition-all duration-400 ${buttonHover ? `invert` : ``
                     }`}
               />
               <h5 className="font-bold text-[22px]">
                  {walletAddress}
                  <span style={{ color: 'red', zIndex: '9999', display: 'flex', bottom: '5px', right: '5px', fontSize: '12px' }}>disconnect</span>
               </h5>
            </div >
         )}
      </>
   );
};

export default HeaderButton;
