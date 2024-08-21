import { Alert } from "@mui/material";
import { check } from "prettier";
import { useContext, useState } from "react";
import UserAccountContext from "../userAccount";


const RowData = (props: any) => {
    const data = props.data;
    const {accounts, setAccounts} = useContext(UserAccountContext);

    const [checked, setChecked] = useState(false);
    const copyPK = () => {
        navigator.clipboard.writeText(data.pk)
            .then(() => {
                alert("Copied PK to clipboard");
            })
            .catch((error) => {
                alert("Failed to copy PK to clipboard");
            });
    }
    const changeEvent = () => {
        setChecked(!checked);
        setAccounts(accounts.map(account=> {
            return {
                address: account.address,
                name: account.name,
                balance: account.balance,
                pk: account.pk,
                checked: account.address != data.address ? account.checked: !checked
            }
        }));
    }
    return (<> 
        <tr>
            <td><input type="checkbox" checked={checked} onChange={changeEvent}></input></td>
            <td>{data.name}</td>
            <td><code>{data.address}</code></td>
            <td>{data.balance}</td>
            <td>
                <button onClick={()=>copyPK()}>PK</button>
            </td>
        </tr>
    </>)
}

const Accounts = (props: any) => {
    const rows = props.data;

    return (
        <div className="accounts">
            <table style={{textAlign:'left'}}>
                <thead>
                    <th><input type="checkbox"></input></th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Balance</th>
                    <th>Action</th>
                </thead>

                <tbody className="table_body">
                    {
                        rows && 
                        rows.map(row => <RowData data={row}/>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Accounts;