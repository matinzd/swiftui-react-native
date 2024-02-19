import { requireNativeViewManager } from 'expo-modules-core';
import React from 'react';
import { View } from 'react-native';
import { mapToNativeModifiers } from '../../utils/modifiers';
import { GroupProps, NativeGroupProps } from './types';

const NativeGroup: React.ComponentType<NativeGroupProps> =
  requireNativeViewManager('Group');

export function Group({ style, children, ...modifiers }: GroupProps) {
  return (
    <NativeGroup
      modifiers={mapToNativeModifiers(modifiers)}
      style={{
        ...(style as object),
      }}
    >
      {React.Children.map(children, (child) => {
        return <View style={{ alignSelf: 'center' }}>{child}</View>;
      })}
    </NativeGroup>
  );
}
