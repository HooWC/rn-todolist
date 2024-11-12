import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoInput = (props) => {
  const [enteredTodo, setEnteredTodo] = useState('');

  const todoInputHandler = (enteredText) => {
    setEnteredTodo(enteredText);
  };

  const addTodoHandler = () => {
    props.onAddTodo(enteredTodo);
    setEnteredTodo('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="New Task"
        style={styles.input}
        onChangeText={todoInputHandler}
        value={enteredTodo}
      />
      <Button title="ADD" onPress={addTodoHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
  },
});

export default ToDoInput;