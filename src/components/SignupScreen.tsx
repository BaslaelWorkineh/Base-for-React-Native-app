import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SignupScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Signup Screen</Text>
    <Button title="Sign Up" onPress={() => navigation.navigate('Login')} />
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

export default SignupScreen;
