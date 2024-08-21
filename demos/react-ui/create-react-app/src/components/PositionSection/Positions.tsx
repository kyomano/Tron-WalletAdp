const RowData = (props: any) => {
    const data = props.data;
    return (<> 
        <tr key={props.address}>
            <td>{data.name}</td>
            <td>{data.balance}</td>
            <td>
                {1}
                {2}
                {3}
                {4}
            </td>
        </tr>
    </>)
}

const Positions = (props: any) => {
    const rows = props.data;

    return (
        <div className="positions">
            <table style={{textAlign:'left'}}>
                <thead>
                    <th key={1}>Wallets</th>
                    <th key={2}>Token/TRX</th>
                    <th key={3}>Function</th>
                </thead>

                <tbody>
                    {
                        rows && 
                        rows.map(row => <RowData data={row}/>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Positions;