import { useState } from 'react';
import { createContainer } from 'react-tracked';

const initialState = {
  count: 0,
  text: 'hello',
};

const useGlobalState = () => useState(initialState);

export const { Provider: SharedStateProvider, useTracked: useSharedState } = createContainer(useGlobalState);
