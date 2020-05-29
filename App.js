import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <Header title="Guess A Number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
