import { TextField } from "@mui/material";
import "./index.css"

const TradeSetting = () => {
    return (
        <div className="tradeSetting">
            <h1 style={{fontSize: 30}}> <b> Configuration </b> </h1>
            <div>
                <h3 style={{fontSize: 20}}><b>Buy</b></h3> <hr/>
                <div  style={{display: 'flex', padding: "10px"}}>
                    <div>
                        <p>TRX Amount</p>
                        <TextField />
                    </div> &nbsp;
                    <div>
                        <p>Slippage</p>
                        <TextField />
                    </div>
                </div>
            </div>
            <hr style={{margin:"10px 5px"}} />
            <div>
                <h3 style={{fontSize: 20}}><b>Sell</b></h3>
                <p>Account's Percent</p> <TextField />
            </div>
        </div>
    )
}

export default TradeSetting;