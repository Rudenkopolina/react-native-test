import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import Header from '../Header/Header';

export default class SignIn extends React.Component {
  static navigationOptions = {
      header: null
  };
  render() {
    return (
      <View>
        <Header
          Home={() => this.props.navigation.navigate('HomeScreen')}
          SignIn={() => this.props.navigation.navigate('SignIn')}
          Profile={() => this.props.navigation.navigate('Profile')}
        />
        <Text> Registration </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signIn: {
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    padding: 30,
    borderColor: "rgba(0,0,0,.125)",
    borderWidth: 0.5,
    borderRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.23,
    elevation: 2,
  }
});
