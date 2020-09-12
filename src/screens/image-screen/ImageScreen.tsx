import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../../utils';

type Props = {
  navigation: StackNavigationProp<StackParamList, 'Image'>
}

export const ImageScreen = (props: Props): JSX.Element => (
  <View>
    <Text onPress={() => props.navigation.navigate('Details')}>Hello World!</Text>
  </View>
);
