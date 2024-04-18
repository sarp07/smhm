import Hero from "../app/components/hero";
import { Metadata } from "next";
import Head from "next/head";
import Logos from "../app/components/logos";
import Whatisschemeckle from "../app/components/whatisschemeckle";
import NFTS from "../app/components/nfts";
import Whyshmtoken from "../app/components/whyshmtoken";
import HowToBuy from "../app/components/howtobuy";
import Tokenomics from "../app/components/tokenomics";
import JoinTheCommunity from "../app/components/jointhecommunity";

export const metadata = {
   title: "Schmeckle Token - Rick and Morty Fans Token",
   description:
      "It is a platform for Rick and Morty fans to come together and have a fun and exciting crypto experience.",
   metadata: [
      {
         name: "keywords",
         content:
            "Schmeckle Token, Schmeckle, Meme, Bitcoin, Crypto currency, Airdrop, Token, Solana, Binance, DexTools, Meme Token, Rick and Morty, Rick Sanchez",
      },
   ],
   icon: "../public/favicon.ico",
};
export default function Home() {
   return (
      <main className="w-full h-full flex flex-1 flex-col">
         <Hero />
         <Logos />
         <Whatisschemeckle />
         <NFTS />
         <Whyshmtoken />
         <HowToBuy />
         <Tokenomics />
         <JoinTheCommunity />
      </main>
   );
}
