import React from 'react';
import { View, StyleSheet } from 'react-native';

const ForthScreen = () => {
  return (
    <View style={styles.FullScreen}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
        <View style={styles.row}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
        <View style={styles.row}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      </View>
      <View style={styles.rightSideContainer}>
        
        <View style={styles.rightSideSpace} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  FullScreen:{
    backgroundColor: '#333333', 
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
    
  },
  row: {
    flexDirection: 'row',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#FFDD95',
    margin: 5,
  },
  rightSideContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'flex-end',
  },
  rightSideSpace: {
    width: 100,
    height: 100,
    marginRight: 30,
    marginBottom: 100,
    backgroundColor: '#FFDD95',
  },
});

export default ForthScreen;
