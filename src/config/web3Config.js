export const WEB3_CONFIG = {
  WALLET_ADDRESS: process.env.REACT_APP_WALLET_ADDRESS,
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