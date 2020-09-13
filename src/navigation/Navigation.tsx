import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ImageScreen} from '../screens/image-screen';
import {ImageDetailsScreen} from '../screens/image-details-screen';
import {StackParamList} from '../utils';

const Stack = createStackNavigator<StackParamList>();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Image" component={ImageScreen} />
        <Stack.Screen name="Details" component={ImageDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
