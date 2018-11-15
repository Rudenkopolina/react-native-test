import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage } from 'react-native';
import { getCurrentUserByToken } from "../../resources/users.action";
import * as userSelector from '../../resources/users.selector';
import Header from '../Header/Header';

export class SignIn extends React.Component {
  static navigationOptions = {
      header: null
  };
  state = {
    userToken: ''
  }

  componentDidMount() {
    this.getUserToken();
  }

  getUserToken = async () => {
    try {
      const userToken = await AsyncStorage.getItem('token') || '';
      this.setState({ userToken })
      userToken && this.props.getCurrentUserByToken(userToken);
    } catch (error) {
      alert(error.message)
    }
  }

  render() {
    !this.state.userToken && this.getUserToken();
    return (
      <View>
      {this.state.userToken ? (
        <Header
        Home={() => this.props.navigation.navigate('HomeScreen')}
        SignIn={() => this.props.navigation.navigate('SignIn')}
        Profile={() => this.props.navigation.navigate('Profile')}
        />
      ) : (
        <View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate('SignIn')}
          >
            <Text style={styles.buttonText} >SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText} >SIGN UP</Text>
          </TouchableOpacity>
        </View>
      )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signIn: {
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 30,
    borderColor: "rgba(0,0,0,.125)",
    borderWidth: 0.5,
    borderRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.23,
    elevation: 2,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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
});

const mapStateToProps = state => ({
  user: userSelector.getCurrentUser(state),
});

const mapDispatchToProps = {
  getCurrentUserByToken,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
