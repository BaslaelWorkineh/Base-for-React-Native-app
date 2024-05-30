import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="HomeTabs" 
      component={BottomTabNavigator} 
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AppStack;
