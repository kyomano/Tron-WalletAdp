import AccountSection from "../AccountSection";
import ActionSection from "../ActionSection";
import PositionSection from "../PositionSection";
import TradeSetting from "../TradeSetting";
import UserAccountProvider from "../userAccount/provider";
import TradeProvider from "../userTrade/TradeProvider";
import "./index.css";

const Body = () => {
    const selectedAccount = (data: any) => {

    }
    return (
        <UserAccountProvider>
            <TradeProvider>
                <div className="Body">
                    <div>
                        <div><TradeSetting /></div>
                        <div><PositionSection /></div>
                    </div>
                    <div>
                        <div><ActionSection /></div>
                        <div><AccountSection onSelect={selectedAccount}/></div>
                    </div>
                </div>
            </TradeProvider>
        </UserAccountProvider>
    )
}

export default Body;