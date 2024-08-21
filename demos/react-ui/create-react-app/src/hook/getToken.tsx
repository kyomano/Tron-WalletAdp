import { tronWeb } from "../tronweb"

const getTRXBalance = async (address: string) => {
    const balance = await tronWeb.trx.getBalance(address);
    return balance;
}

async function convertTronToEthAddress(tronAddress) {
    try {
      // Convert Tron address to hex format
      const tronAddressHex = tronWeb.toHex(tronAddress);
  
      // Convert hex to Ethereum address
      const ethAddress = `0x${tronAddressHex.slice(2)}`;
  
      return ethAddress;
    } catch (error) {
      console.error('Error converting Tron address to Ethereum address:', error);
      return null;
    }
  }
  

export {
    getTRXBalance,
    convertTronToEthAddress,
}