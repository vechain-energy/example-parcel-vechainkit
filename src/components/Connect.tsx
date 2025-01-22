import React from 'react';
import { WalletButton, useWallet } from '@vechain/vechain-kit';
import { Spinner, Box } from '@chakra-ui/react';

export const Connect = () => {
  const { connection } = useWallet();

  if (connection.isLoading) {
    return (
      <Box p={2}>
        <Spinner size="sm" />
      </Box>
    );
  }

  return (
    <WalletButton
      mobileVariant="iconDomainAndAssets"
      desktopVariant="iconDomainAndAssets"
    />
  );
}; 