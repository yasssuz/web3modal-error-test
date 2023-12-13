"use client";

// Packages
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

// Utils

// Constants

// Types

// Assets

// Components

export const ConnectWalletClientComponent = () => {
  const { open } = useWeb3Modal();
  const { isConnected, address } = useAccount();

  const handleConnect = async () => {
    await open();
  };

  return (
    <header>
      {isConnected ? (
        <h1>connected!</h1>
      ) : (
        <button onClick={handleConnect}>No wallet connected</button>
      )}
      {address}
    </header>
  );
};
