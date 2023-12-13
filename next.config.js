/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,

  // Required for Web3Modal:
  /**
   * Required as per Web3Modal config.
   * @see {@link https://docs.walletconnect.com/web3modal/nextjs/about?platform=wagmi#extra-configuration}
   */
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

module.exports = nextConfig;
