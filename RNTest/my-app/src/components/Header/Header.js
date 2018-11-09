import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = (props) => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.headerLink}>
      <Text style={styles.headerLinkText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.headerLink}>
      <Text style={styles.headerLinkText}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.headerLink}>
      <Text style={styles.headerLinkText}>Users</Text>
    </TouchableOpacity>
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

export default Header;
