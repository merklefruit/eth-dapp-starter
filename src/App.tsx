import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@chakra-ui/react';

import Router from './Router';

import { SharedStateProvider } from './context/store';

import { DAppProvider, Mumbai } from '@usedapp/core';

const DAppConfig = {
  readOnlyChainId: Mumbai.chainId,
  readOnlyUrls: {
    [Mumbai.chainId]: 'https://rpc-mumbai.matic.today',
  },
  notifications: {
    expirationPeriod: 3000,
  },
};

export default function App() {
  return (
    <SharedStateProvider>
      <ChakraProvider theme={theme}>
        <DAppProvider config={DAppConfig}>
          <Router />
        </DAppProvider>
      </ChakraProvider>
    </SharedStateProvider>
  );
}
