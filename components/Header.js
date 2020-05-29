import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
  const { title } = props;
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
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
    backgroundColor: '#f278fb',
  },
  headerTitle: {
    color: 'black',
    fontSize: 24,
  },
});

export default Header;
