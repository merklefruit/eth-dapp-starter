import { Text, Box } from '@chakra-ui/react';
import { useSharedState } from '../context/store';

export default function Home() {
  const [state, setState] = useSharedState();
  const increment = () => {
    setState(prev => ({ ...prev, count: prev.count + 1 }));
  };

  return (
    <Box mx='auto'>
      <Box p={4} rounded='lg' maxW='md' bg='gray.50' shadow='md'>
        <Box p={4} rounded='lg' bg='gray.100' borderWidth='1px' borderColor='green.100'>
          <Text>
            This is some sample text that will go in the box. This is some sample text that will go in the box.
          </Text>
        </Box>
        <Box p={4}>This is the content below.</Box>
      </Box>
    </Box>
  );
}
