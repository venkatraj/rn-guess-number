import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';

const SelectedNumber = (props) => {
  const { selectedNumber } = props;
  if (!selectedNumber) return null;
  return (
    <Card style={styles.container}>
      <View style={styles.numberContainer}>
        <Text>Selected Number</Text>
        <Text style={styles.number}>{selectedNumber}</Text>
        <Button title="START GAME" />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  numberContainer: {
    alignItems: 'center',
  },
  number: {
    borderColor: Colors.accent,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    marginVertical: 15,
    textAlign: 'center',
    fontSize: 22,
  },
});

export default SelectedNumber;
