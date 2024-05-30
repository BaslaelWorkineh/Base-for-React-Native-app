import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import AuthStack from './AuthStack';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="AuthLoading">
    <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} />
    <Stack.Screen name="Auth" component={AuthStack} />
    <Stack.Screen name="App" component={BottomTabNavigator} />
  </Stack.Navigator>
);

export default AppNavigator;
