import { TextField } from "@mui/material";
import "./index.css"
import Positions from "./Positions";

const data = [
    {name: "AC-2", balance: "36263", approve: false},
    {name: "AC-2", balance: "36263", approve: false},
    {name: "AC-2", balance: "36263", approve: false},
    {name: "AC-2", balance: "36263", approve: false},
    {name: "AC-2", balance: "36263", approve: false},
    {name: "AC-2", balance: "36263", approve: false},
    {name: "AC-2", balance: "36263", approve: false}
];

const PositionSection = () => {
    return (
        <div className="positionSection">
            <h1 style={{fontSize: 30}}> <b> Positions </b>  </h1><br />

            <hr style={{margin:"10px 0px"}} />

            <Positions data={data}/>
        </div>
    )
}

export default PositionSection;