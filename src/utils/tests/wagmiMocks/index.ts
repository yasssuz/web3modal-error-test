// Packages
import { privateKeyToAccount } from 'viem/accounts';
import { jest } from '@jest/globals';
import { createWalletClient, http } from 'viem';
import { polygonMumbai } from 'viem/chains';
import { MockConnector } from 'wagmi/connectors/mock';

// Utils

// Constants

// Types

// Assets

// Components

jest.unstable_mockModule('wagmi/connectors/injected', () => ({
  InjectedConnector: class extends MockConnector {
    constructor() {
      super({
        options: {
          walletClient: createWalletClient({
            account: privateKeyToAccount(
              '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
            ).address,
            chain: polygonMumbai,
            transport: http('https://eth-mainnet.g.alchemy.com/v2/...'),
          }),
        },
      });
    }
  },
}));
