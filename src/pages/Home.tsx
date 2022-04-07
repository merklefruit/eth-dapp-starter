import { Text } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import { useSharedState } from '../context/store';

export default function Home() {
  const [state, setState] = useSharedState();
  const increment = () => {
    setState(prev => ({ ...prev, count: prev.count + 1 }));
  };

  return (
    <>
      <Text fontSize='2xl'>Homepage</Text>
      <ColorModeSwitcher />

      <div>
        {state.count}
        <button onClick={increment}>+1</button>
      </div>
    </>
  );
}
