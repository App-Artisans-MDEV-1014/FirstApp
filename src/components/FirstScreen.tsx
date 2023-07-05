import React from "react";
import { StyleSheet, View } from "react-native";

const FirstScreen = () => {
  return (
    <>
      <View style={styles.header} />
      <View style={styles.body}>
          <View style={styles.box} />
          <View style={styles.innerSection}>
            <View style={styles.box} />
            <View style={styles.box} />
          </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: "40%",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#242428",
  },
  body: {
    height: "60%",
    width: "100%",
    padding: 20,
    paddingBottom: 40,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  box: {
    backgroundColor : '#FFFFFF',
    height: "8%",
    width: "100%",
    borderWidth: 1, // Border width of 1 pixel
    borderColor: "#242428",
    borderRadius: 5,
    margin: 1,
  },
  innerSection: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default FirstScreen;
