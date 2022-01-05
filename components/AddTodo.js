import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";

const AddTodo = (props) => {
  const [text, setText] = useState("");

  const handleText = (inputText) => {
    setText(inputText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add Your Todo Here"
        onChangeText={handleText}
        value={text}
        style={{
          borderWidth: 1,
          borderColor: "#eaeaea",
          backgroundColor: "#eaeaea",
          height: 50,
          padding: 5,
          width: "70%",
          textAlign: "center",
        }}
      />
      <TouchableOpacity
        onPress={() => {
          props.addTodo(text);
          setText("");
        }}
      >
        <View
          style={{
            height: 50,
            backgroundColor: "#eaeaea",
            justifyContent: "center",
            padding: 5,
          }}
        >
          <Ionicons name="md-add" size={30} color="red" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (text) => dispatch({ type: "ADD_TODO", text }),
  };
}

export default connect(null, mapDispatchToProps)(AddTodo);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    // borderWidth: 3,
    // borderColor: "red",
    flexDirection: "row",
  },
});
