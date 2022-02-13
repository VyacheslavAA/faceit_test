import { useNavigation } from '@react-navigation/native';
import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React, { FC } from 'react';
import { Insets, Text, TouchableOpacity } from 'react-native';

const hitSlopInsets: Insets = { top: 10, bottom: 10, left: 15, right: 15 };

export const HeaderBackButton: FC<HeaderBackButtonProps> = ({ canGoBack }) => {
  const navigation = useNavigation();

  return (
    <>
      {canGoBack && (
        <TouchableOpacity hitSlop={hitSlopInsets} onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
      )}
    </>
  );
};
