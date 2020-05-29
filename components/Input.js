import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    height: 30,
    marginVertical: 10,
  },
});

export default Input;
