import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '../Header/Header';
import { getCurrentUser } from "../../resources/users.action"
import * as userSelector from '../../resources/users.selector';

class SignIn extends React.Component {
  static navigationOptions = {
      header: null
  };

  state = {
    login: '',
    password: '',
  };

  onChangeLogin = value => {
    this.setState({
      login: value,
    });
  };

  onChangePassword = value => {
    this.setState({
      password: value,
    });
  };

  onSignIn = () => {
    const { login, password } = this.state;
    const popa = this.props.getCurrentUser(login, password);
  }

  render() {
    return (
      <ScrollView>
        <Header
          Home={() => this.props.navigation.navigate('HomeScreen')}
          SignIn={() => this.props.navigation.navigate('SignIn')}
          Profile={() => this.props.navigation.navigate('Profile')}
        />
        {!this.props.user ? (
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
              value={this.state.login}
              onChangeText={this.onChangeLogin}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={this.state.password}
              onChangeText={this.onChangePassword}
            />
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.onSignIn}
          >
            <Text style={styles.buttonText} >Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.registrationLink}
            onPress={() => this.props.navigation.navigate('Registration')}
          >
            <Text style={styles.registrationLinkText}>Registration</Text>
          </TouchableOpacity>
        </View> ) : (
        <View style={styles.signIn}>
          <Text>Successful</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate('Profile') }
          >
            <Text style={styles.buttonText} >Go to Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText} >Log Out</Text>
          </TouchableOpacity>
        </View>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  signIn: {
    backgroundColor: '#fff',
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
    marginTop: 5,
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

const mapStateToProps = state => ({
  user: userSelector.getCurrentUser(state),
});

const mapDispatchToProps = {
  getCurrentUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
