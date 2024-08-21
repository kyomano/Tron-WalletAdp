import "./index.css"
import { useWallet, WalletProvider } from '@tronweb3/tronwallet-adapter-react-hooks';
import { getTRXBalance } from "../../hook/getToken";
import { useEffect, useState } from "react";
import { WalletActionButton } from "@tronweb3/tronwallet-adapter-react-ui";
const Header = () => {
    const { address, connected, wallet } = useWallet();
    const [balance, setBalance] = useState(0);
    useEffect(()=>{
        if(address){
            (async()=>{
                setBalance(await getTRXBalance(address));
            })();
        }
    }, [address])
return (
    <div style={{display:'flex', justifyContent: 'space-between', backgroundColor:'white', padding: "20px 20px"}}>
        <div><span>MasterWallet: <b>{address}</b></span> &nbsp; &nbsp; &nbsp; <span>Balance: <b>{balance / (10 ** 6)}</b></span> </div>
        <WalletActionButton />
    </div>
)
}

export default Header;