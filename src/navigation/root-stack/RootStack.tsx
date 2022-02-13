import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';

import { HeaderBackButton } from '~/components/HeaderBackButton';
import { RouteNames } from '~/navigation/route-names';
import { Post } from '~/screens/post/Post';
import { Posts } from '~/screens/posts/Posts';

import { RootStackParams } from './types';

const Stack = createNativeStackNavigator<RootStackParams>();

export const RootStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.Posts}
      screenOptions={{
        headerLeft: HeaderBackButton,
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name={RouteNames.Posts} component={Posts} />
      <Stack.Screen name={RouteNames.Post} component={Post} />
    </Stack.Navigator>
  );
};
