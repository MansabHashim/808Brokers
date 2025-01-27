export const WEB3_CONFIG = {
  WALLET_ADDRESS: "YOUR_WALLET_ADDRESS", // Replace with your wallet
  SKIP_COST: 0.0001, // MATIC cost for skipping
  NETWORK: {
    chainId: "0x89", // Polygon Mainnet
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18
    },
    rpcUrls: ["https://polygon-rpc.com"],
    blockExplorerUrls: ["https://polygonscan.com/"]
  }
}; 