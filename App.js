import React from 'react';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen from './screens/Onboard'
import WelcomeScreen from './screens/Welcome'
import HomeScreen from './screens/Home';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">  
        <Stack.Screen name="OnBoardScreen" component = {OnBoardingScreen}/>
        <Stack.Screen name="WelcomeScreen" component = {WelcomeScreen}/>
        <Stack.Screen name="HomeScreen" component = {HomeScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

