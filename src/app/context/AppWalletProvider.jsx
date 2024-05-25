"use client";
 
import React, { useMemo, useState } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
import {
   PhantomWalletAdapter,
 } from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css";

export default function AppWalletProvider({
  children,
}) {
  const network = WalletAdapterNetwork.Devnet;
   const endpoint = useMemo(() => clusterApiUrl(network), [network]);
   const [address, setAddress] = useState('');

   const wallets = useMemo(
      () => [
         new PhantomWalletAdapter(),
      ],
      [network],
   );
 
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        {children}
      </WalletProvider>
    </ConnectionProvider>
  );
}