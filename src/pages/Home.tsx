import { Text, Box, Button, useColorModeValue } from '@chakra-ui/react';
import { useSharedState } from '../context/store';

export default function Home() {
  const [state, setState] = useSharedState();
  const increment = () => {
    setState(prev => ({ ...prev, count: prev.count + 1 }));
  };

  return (
    <Box display='grid' placeItems='center' mt={10}>
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
        <Box py={4}>Click the button to increase count. {state.count}</Box>
        <Button colorScheme='gray' onClick={increment} w='full'>
          Increment
        </Button>
      </Box>
    </Box>
  );
}
