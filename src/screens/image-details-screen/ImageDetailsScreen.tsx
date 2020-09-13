import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../../utils';

type Props = {
  navigation: StackNavigationProp<StackParamList, 'Details'>;
};

export const ImageDetailsScreen = (props: Props): JSX.Element => (
  <View>
    <Text onPress={() => props.navigation.navigate('Image')}>Details!</Text>
  </View>
);
