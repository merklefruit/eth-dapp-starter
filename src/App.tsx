import { ChakraProvider } from '@chakra-ui/react';
import { DAppProvider } from '@usedapp/core';
import { HelmetProvider } from 'react-helmet-async';
import { SharedStateProvider } from './context/store';
import { theme } from '@chakra-ui/react';
import Router from './Router';
import dAppConfig from './lib/dAppConfig';

export default function App() {
  return (
    <SharedStateProvider>
      <ChakraProvider theme={theme}>
        <DAppProvider config={dAppConfig}>
          <HelmetProvider>
            <Router />
          </HelmetProvider>
        </DAppProvider>
      </ChakraProvider>
    </SharedStateProvider>
  );
}
