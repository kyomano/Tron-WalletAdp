import { TextField } from "@mui/material";
import "./index.css"
import Accounts from "./Accounts";
import { tronWeb } from "../../tronweb";
import { useWallet, WalletProvider } from '@tronweb3/tronwallet-adapter-react-hooks';
import { useContext, useEffect, useState } from "react";
import { getTRXBalance } from "../../hook/getToken";
import UserAccountContext from "../userAccount";

const AccountSection = (props: any) => {
    const {address} = useWallet();
    const {accounts, setAccounts} = useContext(UserAccountContext);

    useEffect(()=>{
        console.log("address ", address);
        (async()=>{if(!accounts.filter(item => item.address == address)) {
            setAccounts([...accounts,({
                name: "Master Wallet",
                address: address,
                balance: await getTRXBalance(address),
                pk: null
            })])
        }})()
    },[address])

    const createWallets = async (cnt) => {
        // console.log(tronWeb);
        const newWallet = await tronWeb.createAccount();
        console.log(newWallet);
        const newData = {
            name: "New Wallet",
            address: newWallet.address.base58,
            balance: 0,
            pk: newWallet.privateKey,
            checked: false
        }

        setAccounts([...accounts, newData]);
    }
    return (
        <div className="actionSection">
            <h1 style={{fontSize: 30}}> <b> Accounts </b>  </h1><br />
            <div className="trade">
                <button> Multi-Create </button>
                <button onClick={()=>createWallets(1)}> Create One </button>
            </div>

            <hr style={{margin:"10px 0px"}} />

            <Accounts data={accounts} onSelect={props.onSelect}/>
        </div>
    )
}

export default AccountSection;