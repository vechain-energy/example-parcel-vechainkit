import React from 'react';
import { WalletButton, useWallet } from '@vechain/vechain-kit';

const Spinner = () => (
    <div className="spinner" style={{
        width: '24px',
        height: '24px',
        border: '4px solid rgba(0, 0, 0, 0.1)',
        borderTop: '4px solid #000',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
    }}></div>
);

export const Connect = () => {
    const { connection } = useWallet();

    if (connection.isLoading) {
        return (
            <div style={{ padding: '8px' }}>
                <Spinner />
            </div>
        );
    }

    return (
        <WalletButton
            mobileVariant="iconDomainAndAssets"
            desktopVariant="iconDomainAndAssets"
        />
    );
};

// Add CSS for spinner animation
document.head.insertAdjacentHTML('beforeend', `
<style>
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
`); 