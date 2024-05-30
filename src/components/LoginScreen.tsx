import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Login Screen</Text>
    <Button title="Login" onPress={() => {
      // Simulate a login
      AsyncStorage.setItem('userToken', 'abc');
      navigation.navigate('App');
    }} />
    <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default LoginScreen;
