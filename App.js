import React from 'react';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen from './screens/Onboard'
import LoginScreen from './screens/Login'


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">  
        <Stack.Screen name="OnBoardScreen" component = {OnBoardingScreen}/>
        <Stack.Screen name="LoginScreen" component = {LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
   
  },
});
