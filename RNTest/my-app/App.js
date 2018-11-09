import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/components/Header/Header';
import SignIn from './src/components/SignIn/SignIn';

export default class App extends React.Component {
  state = {
    placeName: '',
    places: [],
  };

  onPlaceNameChange = value => {
    this.setState({
      placeName: value,
    });
  };

  onButtonPress = () => {
    if (this.state.placeName.trim() !== '') {
      this.setState({
        places: [...this.state.places, this.state.placeName],
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <SignIn />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  }
});
