import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthLoadingScreen = ({ navigation }) => {
  useEffect(() => {
    const checkToken = async () => {
      // const userToken = 
      const userToken = null
      navigation.navigate(userToken ? 'App' : 'Auth');
    };

    checkToken();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AuthLoadingScreen;
