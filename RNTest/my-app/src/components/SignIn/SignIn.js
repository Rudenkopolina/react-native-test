import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default class SignIn extends React.Component {
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
      <View style={styles.signIn}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={require('./avatar_2x.png')}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="enter you phone number"
            value={this.state.placeName}
            onChangeText={this.onPlaceNameChange}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={this.state.placeName}
            onChangeText={this.onPlaceNameChange}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.onButtonPress}
        >
          <Text style={styles.buttonText} >Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registrationLink}>
          <Text style={styles.registrationLinkText}>Registration</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signIn: {
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    margin: 30,
    padding: 30,
    borderColor: "rgba(0,0,0,.125)",
    borderWidth: 0.5,
    borderRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.23,
    elevation: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    marginBottom: 20,
    width: 300,
    height: 45,
    padding: 6,
    fontSize: 16,
    backgroundColor: '#fff',
    borderColor: "#aeaeae",
    borderWidth: 0.5,
    borderRadius: 3,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 45,
    backgroundColor: '#265a88',
    borderColor: "#245580",
    borderWidth: 0.5,
    borderRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  avatarContainer: {
    margin: 30,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  registrationLinkText: {
    color: '#337ab7',
    fontSize: 16,
  },
  registrationLink: {
    margin: 20,
    paddingTop: 30,
    width: '100%',
    justifyContent: 'center',
    height: 50,
    borderTopColor: "#245580",
    borderTopWidth: 0.3,
  }
});
