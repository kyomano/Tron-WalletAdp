import React, { useMemo, useState } from 'react';
import type { WalletError } from '@tronweb3/tronwallet-abstract-adapter';
import { WalletDisconnectedError, WalletNotFoundError } from '@tronweb3/tronwallet-abstract-adapter';
import { useWallet, WalletProvider } from '@tronweb3/tronwallet-adapter-react-hooks';
import {
    WalletModalProvider,
} from '@tronweb3/tronwallet-adapter-react-ui';
import toast from 'react-hot-toast';
import { TronLinkAdapter } from '@tronweb3/tronwallet-adapters';
import Header from './components/Header/index';
import Body from './components/Body';

/**
 * wrap your app content with WalletProvider and WalletModalProvider
 * WalletProvider provide some useful properties and methods
 * WalletModalProvider provide a Modal in which you can select wallet you want use.
 *
 * Also you can provide a onError callback to process any error such as ConnectionError
 */

export function App() {
    function onError(e: WalletError) {
        if (e instanceof WalletNotFoundError) {
            toast.error(e.message);
        } else if (e instanceof WalletDisconnectedError) {
            toast.error(e.message);
        } else toast.error(e.message);
    }
    const adapters = useMemo(function () {
        const tronLinkAdapter = new TronLinkAdapter();
        return [tronLinkAdapter];
    }, []);
    return (
        <WalletProvider onError={onError} autoConnect={true} disableAutoConnectOnLoad={true} adapters={adapters}>
            <WalletModalProvider>
                <Header></Header>
                <Body />
            </WalletModalProvider>
        </WalletProvider>
    );
}


// function SignDemo() {
//     const { signMessage, signTransaction, address } = useWallet();
//     const [message, setMessage] = useState('');
//     const [signedMessage, setSignedMessage] = useState('');
//     const receiver = 'TRYGtm7MZ2ekcEMN7CmgA1ZKbXKM3VJxtr';
//     const [open, setOpen] = useState(false);

//     async function onSignMessage() {
//         const res = await signMessage(message);
//         setSignedMessage(res);
//     }

//     async function onSignTransaction() {
//         const transaction = await tronWeb.transactionBuilder.sendTrx(receiver, tronWeb.toSun(0.001), address);

//         const signedTransaction = await signTransaction(transaction);
//         // const signedTransaction = await tronWeb.trx.sign(transaction);
//          await tronWeb.trx.sendRawTransaction(signedTransaction);
//         setOpen(true);
//     }
//     return (
//         <div style={{ marginBottom: 200 }}>
//             <h2>Sign a Transaction</h2>
//             <p style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', wordBreak: 'break-all' }}>
//                 You can transfer 0.001 Trx to &nbsp;<i>{receiver}</i>&nbsp;by click the button.
//             </p>
//             <Button onClick={onSignTransaction}>Transfer</Button>
//             {open && (
//                 <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%', marginTop: 1 }}>
//                     Success! You can confirm your transfer on{' '}
//                     <a target="_blank" rel="noreferrer" href={`https://nile.tronscan.org/#/address/${address}`}>
//                         Tron Scan
//                     </a>
//                 </Alert>
//             )}
//         </div>
//     );
// }
