import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { RootStack } from '~/navigation/root-stack/RootStack';
import { store } from '~/services/redux/store';

export const App: FC = () => {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ReduxProvider>
  );
};
