import { Text, Box, Button, useColorModeValue, ButtonGroup } from '@chakra-ui/react';
import { useState } from 'react';
import { useSharedState } from '../context/store';

// This is a simple counter component that uses the shared state to increment
// the counter value. Use it as reference for global context usage.
export default function Counter() {
  const [state, dispatch] = useSharedState();
  const [amount, setAmount] = useState(1);
  const increment = () => {
    dispatch({ type: 'INCREMENT', payload: amount });
  };

  return (
    <Box display='grid' placeItems='center' mt={6}>
      <Box p={4} rounded='lg' maxW='md' bg={useColorModeValue('gray.50', 'gray.900')} shadow='md'>
        <Box
          p={4}
          rounded='lg'
          bg={useColorModeValue('gray.100', 'gray.800')}
          borderWidth='1px'
          borderColor={useColorModeValue('green.200', 'green.800')}
        >
          <Text>
            This is a simple counter using the global state context API hook. You can see how convenient it is.
          </Text>
        </Box>
        <Box py={4}>
          Click the button to increase <b>{state.count}</b> by <b>{amount}</b>
        </Box>
        <ButtonGroup w='full' mb={2}>
          <Button w='full' onClick={() => setAmount(amount + 1)}>
            +
          </Button>
          <Button w='full' onClick={() => setAmount(amount - 1)}>
            -
          </Button>
        </ButtonGroup>
        <Button colorScheme='gray' onClick={increment} w='full'>
          Increment
        </Button>
      </Box>
    </Box>
  );
}
