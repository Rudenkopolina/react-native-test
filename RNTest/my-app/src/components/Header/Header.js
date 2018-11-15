import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import * as userSelector from '../../resources/users.selector';

const Header = (props) => (
  <View style={styles.header}>
    <TouchableOpacity
      style={styles.headerLink}
      onPress={() => props.Home()}
    >
      <Text style={styles.headerLinkText}>Home</Text>
    </TouchableOpacity>
    {!props.user &&
      <TouchableOpacity
        style={styles.headerLink}
        onPress={() => props.SignIn()}
      >
        <Text style={styles.headerLinkText}>Login</Text>
      </TouchableOpacity>
    }
    <TouchableOpacity
      style={styles.headerLink}
      onPress={() => props.Users}
    >
      <Text style={styles.headerLinkText}>Users</Text>
    </TouchableOpacity>
    {props.user &&
      <TouchableOpacity
      style={styles.headerLink}
      onPress={() => props.Profile()}
      >
        <Text style={styles.headerLinkText}>Profile</Text>
      </TouchableOpacity>
    }
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    backgroundColor: '#343a40',
    borderRadius: 4,
    alignItems: 'center',
  },
  headerLink: {
    margin: 10,
  },
  headerLinkText: {
    color: 'rgba(255,255,255,.8)',
    fontSize: 16,
  }
});

const mapStateToProps = state => ({
  user: userSelector.getCurrentUser(state),
});

export default connect(mapStateToProps, null)(Header);
