import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Guess A Number</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 39,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f27bfd',
  },
  headerTitle: {
    color: 'black',
    fontSize: 24,
  },
});

export default Header;
