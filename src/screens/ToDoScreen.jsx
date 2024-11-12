import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ToDoItem from '../components/ToDoItem';
import ToDoInput from '../components/ToDoInput';

const ToDoScreen = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todoText) => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: Math.random().toString(), value: todoText }
    ]);
  };

  const removeTodoHandler = (todoId) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <View style={styles.screen}>
      <ToDoInput onAddTodo={addTodoHandler} />
      <FlatList
        data={todos}
        renderItem={(itemData) => (
          <ToDoItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeTodoHandler}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});

export default ToDoScreen;