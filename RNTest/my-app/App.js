import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/components/HomeScreen/HomeScreen';
import SignIn from './src/components/SignIn/SignIn';
import Registration from './src/components/Registration/Registration';
import Profile from './src/components/Profile/Profile'


const App = createStackNavigator({
  HomeScreen: HomeScreen,
  SignIn: SignIn,
  Registration: Registration,
  Profile: Profile,
});

export default App;
