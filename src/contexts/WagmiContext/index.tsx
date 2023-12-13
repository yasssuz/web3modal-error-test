"use client";

// Packages
import { WagmiConfig, configureChains, createConfig, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { EIP6963Connector, createWeb3Modal } from "@web3modal/wagmi/react";
import { walletConnectProvider } from "@web3modal/wagmi";

// Utils

// Constants
import { WALLET_CONNECT_PROJECT_ID, WEB3MODAL_METADATA } from "./constants";

// Types
import type { PropsWithChildren } from "react";

// Components

const { chains, publicClient } = configureChains(
  [mainnet],
  [
    walletConnectProvider({ projectId: WALLET_CONNECT_PROJECT_ID }),
    publicProvider(),
  ]
);

const wagmiConfig = createConfig({
  connectors: [
    new EIP6963Connector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: WALLET_CONNECT_PROJECT_ID,
        showQrModal: false,
        metadata: WEB3MODAL_METADATA,
      },
    }),
  ],
  publicClient,
});

createWeb3Modal({
  wagmiConfig,
  projectId: WALLET_CONNECT_PROJECT_ID,
  chains,
  featuredWalletIds: [
    "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
  ],
  termsConditionsUrl: "https://trustwallet.com/terms-of-service",
  privacyPolicyUrl: "https://trustwallet.com/privacy-policy",
});

export const WagmiContext = ({ children }: PropsWithChildren) => (
  <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
);
