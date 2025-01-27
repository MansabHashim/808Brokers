import { ethers } from 'ethers';

const WALLET_ADDRESS = "YOUR_WALLET_ADDRESS"; // Replace with your wallet address
const NETWORK_RPC_URL = "https://polygon-rpc.com"; // Polygon Mainnet

export const getNetworkCongestion = async () => {
  try {
    const provider = new ethers.providers.JsonRpcProvider(NETWORK_RPC_URL);
    const feeData = await provider.getFeeData();
    
    // Calculate network congestion based on gas prices
    const baseGas = feeData.gasPrice;
    const maxGas = feeData.maxFeePerGas;
    
    // Return a loading time between 3-15 seconds based on network congestion
    const congestionFactor = (maxGas / baseGas).toNumber();
    return Math.min(Math.max(congestionFactor * 3000, 3000), 15000);
  } catch (error) {
    console.error('Error getting network congestion:', error);
    return 5000; // Default to 5 seconds if error
  }
};

export const processSkipPayment = async (amount) => {
  try {
    // Connect to Coinbase Wallet
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    // Create transaction
    const tx = {
      to: WALLET_ADDRESS,
      value: ethers.utils.parseEther(amount.toString())
    };

    // Send transaction
    const transaction = await signer.sendTransaction(tx);
    await transaction.wait();

    return true;
  } catch (error) {
    console.error('Payment failed:', error);
    return false;
  }
}; 