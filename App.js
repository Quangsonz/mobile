import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("green");

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: backgroundColor === "yellow" ? "black" : "white" }]}>
        {backgroundColor.toUpperCase()}
      </Text>

      <TouchableOpacity style={[styles.button, { backgroundColor: "green" }]} onPress={() => setBackgroundColor("green")}>
        <Text style={styles.buttonText}>GREEN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: "blue" }]} onPress={() => setBackgroundColor("blue")}>
        <Text style={styles.buttonText}>BLUE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: "brown" }]} onPress={() => setBackgroundColor("brown")}>
        <Text style={styles.buttonText}>BROWN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: "yellow" }]} onPress={() => setBackgroundColor("yellow")}>
        <Text style={[styles.buttonText, { color: "black" }]}>YELLOW</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: "red" }]} onPress={() => setBackgroundColor("red")}>
        <Text style={styles.buttonText}>RED</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: "black" }]} onPress={() => setBackgroundColor("black")}>
        <Text style={[styles.buttonText, { color: "white" }]}>BLACK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  button: {
    width: 350,
    padding: 15,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default App;