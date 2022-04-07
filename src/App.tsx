import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { SharedStateProvider } from './context/store';

// Use custom theme later
import { theme } from '@chakra-ui/react';

export default function App() {
  return (
    <SharedStateProvider>
      <ChakraProvider theme={theme}>
        <ColorModeSwitcher />
      </ChakraProvider>
    </SharedStateProvider>
  );
}
