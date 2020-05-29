import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <Header title="Guess A Number" />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
