import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

const CounterApp = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => props.decreaseCounter()}>
          <Text> Decrease</Text>
        </TouchableOpacity>
        <Text>{props.count}</Text>
        <TouchableOpacity onPress={() => props.increaseCounter()}>
          <Text>Increase </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    count: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({ type: "INC_COUNTER" }),
    decreaseCounter: () => dispatch({ type: "DEC_COUNTER" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
