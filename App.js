import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CounterApp from "./components/CounterApp";

import { createStore } from "redux";
import { Provider } from "react-redux";
import TodoApp from "./components/TodoApp";
import store from "./redux/store/index";
/****Counter App*****/
// const initialState = {
//   counter: 0,
// };

// const reducer = (state = initialState, actions) => {
//   console.log("Inside reduceer");
//   if (actions.type == "INC_COUNTER") {
//     // console.log("INC Called");
//     return { counter: state.counter + 1 };
//   } else if (actions.type == "DEC_COUNTER") {
//     // console.log("DEC Called");
//     return { counter: state.counter - 1 };
//   } else return state;
//   // switch (actions.type) {
//   //   case "INC_COUNTER":
//   //     return { counter: state.counter + 1 };
//   //   case "DEC_COUNTER":
//   //     return { counter: state.counter - 1 };
//   //   default:
//   //     return state;
//   // }
// };

// const store = createStore(reducer);

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <TodoApp />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    height: 100,
    alignItems: "center",
  },
});
