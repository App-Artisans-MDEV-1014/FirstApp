import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

const FirstScreen = () => {
  const [text1, onChangeText1] = React.useState("");
  const [text2, onChangeText2] = React.useState("");
  const [text3, onChangeText3] = React.useState("");
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header} />
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText1}
          value={text1}
        />
        <View style={styles.innerSection}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText2}
          value={text2}
        />
         <TextInput
          style={styles.input}
          onChangeText={onChangeText3}
          value={text3}
        />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex : 1,
    backgroundColor: '#242428',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  header: {
    height: "40%",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
  body: {
    height: "60%",
    width: "100%",
    padding: 20,
    paddingBottom: 40,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: "#FFDD95",
    height: 35,
    width: "100%",
    borderWidth: 1, // Border width of 1 pixel
    borderColor: "#242428",
    borderRadius: 5,
    margin: 1,
    padding : 10,
    color : "#FFFFFF",
  },
  innerSection: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default FirstScreen;
