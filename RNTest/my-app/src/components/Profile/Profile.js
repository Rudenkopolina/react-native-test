import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

import * as userSelector from '../../resources/users.selector';
import Header from '../Header/Header';

class Profile extends React.Component {
  static navigationOptions = {
      header: null
  };

  render() {
    return (
      <ScrollView>
        <Header
          Home={() => this.props.navigation.navigate('HomeScreen')}
          SignIn={() => this.props.navigation.navigate('SignIn')}
          Profile={() => this.props.navigation.navigate('Profile')}
        />
        <View style={styles.signIn}>
          <Text> {this.props.user.firstName || ''} </Text>
        </View>
      </ScrollView>
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
});

const mapStateToProps = state => ({
  user: userSelector.getCurrentUser(state),
});

export default connect(mapStateToProps, null)(Profile);
