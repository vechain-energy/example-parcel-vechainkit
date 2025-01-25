import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { VeChainKitProvider } from '@vechain/vechain-kit';
import Menu from './components/Menu';
import Home from './pages/Home';

const App = () => {
    return (
        <VeChainKitProvider
            dappKit={{
                allowedWallets: ['veworld', 'wallet-connect', 'sync2'],
                walletConnectOptions: {
                    projectId: process.env.WALLET_CONNECT_PROJECT_ID ?? '',
                    metadata: {
                        name: 'VeChain Kit Example',
                        description: 'Example application using VeChain Kit with Parcel',
                        url: window.location.origin,
                        icons: [`${window.location.origin}/logo.png`],
                    },
                },
            }}
            feeDelegation={{
                delegatorUrl: process.env.DELEGATOR_URL ?? '',
                delegateAllTransactions: false
            }}
            loginModalUI={{
                description: 'Connect your wallet to interact with the VeChain network.',
            }}
            network={{
                type: 'test' // Using testnet for development
            }}
        >
            <BrowserRouter>
                <div className="min-h-screen bg-gray-100">
                    <Menu />
                    <main className="container mx-auto px-4 py-8">
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </main>
                </div>
            </BrowserRouter>
        </VeChainKitProvider>
    );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />); 