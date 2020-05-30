import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import SelectedNumber from '../components/SelectedNumber';

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [selectedNumber, setSelectedNumber] = useState();

  const validateInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setSelectedNumber('');
  };

  const confirmInputHandler = () => {
    let num = parseInt(enteredValue);
    if (Number.isNaN(num) || (num <= 0 && num > 99)) {
      Alert.alert('Invalid Number', 'Number has to be between 0 and 99!', [
        { title: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }
    setSelectedNumber(num);
    setEnteredValue('');
    Keyboard.dismiss();
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
            onChangeText={validateInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        <SelectedNumber selectedNumber={selectedNumber} />
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
