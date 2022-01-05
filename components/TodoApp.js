import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AddTodo from "./AddTodo";
import VisibleTodo from "./VisibleTodo";

const TodoApp = () => {
  return (
    <View>
      <AddTodo />
      <View>
        <VisibleTodo />
      </View>
    </View>
  );
};

export default TodoApp;

const styles = StyleSheet.create({});
