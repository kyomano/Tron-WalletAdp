import { TextField } from "@mui/material";
import "./index.css"
import TradeContext from "../userTrade/TradeContext";
import UserAccountContext from "../userAccount";
import { useContext, useState } from "react";
import { tronWeb } from "../../tronweb";
import { useWallet } from "@tronweb3/tronwallet-adapter-react-hooks";
import { convertTronToEthAddress } from "../../hook/getToken";


const ActionSection = () => {
    const {tradeSettings, setTradeSettings} = useContext(TradeContext);
    const {accounts} = useContext(UserAccountContext);
    const [ca , setCA] = useState("");
    const {address} = useWallet();

    const changeEvent = (event) => {
        setCA(event.target.value);
        setTradeSettings({
            ...tradeSettings,
            contract: event.target.value
        })
    }

    const buyToken = async () => {
        try {
            // Define the details of the purchase
            const amountsInTRX = tradeSettings.buyAmt;
            console.log(amountsInTRX);
            const account = await convertTronToEthAddress(address);
            console.log(address, " : ", account);
            const contract = '0xD802DECD92AC73B7277BF621DCB75BAA0035E522'; // Address of the AAA token contract
            const router = '0x6E0617948FE030A7E4970F8389D4AD295F249B7E';
            const path = ['0x891CDB91D149F23B1A45D9C5CA78A88D0CB44C18', contract];
            const method = 'swapExactETHForTokensSupportingFeeOnTransferTokens(uint256,address[],address,uint256)'

            // Prepare the transaction
            var parameter = [
                {type:'uint256',value: BigInt(amountsInTRX*10**18)},
                {type:'uint256',value:100},
                {type:'address[]', value: path},
                {type:'address', account},
            ];
            var options = {
                    feeLimit:100000000,
                    callValue:0,
                    tokenValue:10,
                    tokenId:1000001,
                    txLocal:true
                };
            const transaction = await tronWeb.transactionBuilder.triggerSmartContract(router, method, options,
                parameter,"");
    
            // Sign and broadcast the transaction
            const signedTransaction = await tronWeb.trx.sign(transaction);
            const receipt = await tronWeb.trx.broadcast(signedTransaction);
    
            console.log('Purchase transaction hash:', receipt.hash);
        } catch (error) {
            console.error('Error during purchase:', error);
        }
    }

    return (
        <div className="actionSection">
            <h1 style={{fontSize: 30}}> <b> Actions </b>  </h1><br />
            <h2> CA: <input onChange={changeEvent} value={ca} type="edit" style={{border:"1px solid black", width:"500px", paddingLeft:"5px"}}/> </h2> <br/>
            <div>
                <button> DEPOSIT </button> TO ACCOUNTS
            </div> <hr style={{margin:"10px 0px"}} />
            <div className="trade">
                <button onClick={buyToken}> Buy </button>
                <button> Sell </button>
            </div>
        </div>
    )
}

export default ActionSection;