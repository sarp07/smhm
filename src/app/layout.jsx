import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/common/footer";

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <Header />
            {children}
            <Footer />
         </body>
      </html>
   );
}
