import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const validateNumberInput = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start A New Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            blurOnSubmit={true}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={validateNumberInput}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" color={Colors.accent} />
            </View>
            <View style={styles.button}>
              <Button title="Confirm" color={Colors.primary} />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: '30%',
  },
});
export default StartGameScreen;
