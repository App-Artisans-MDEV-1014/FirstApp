import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const SecondScreen = ()=>{
 return (
    <SafeAreaView style = {styles.wrapper}>
        <View style = {[styles.boxStyle, styles.box1]}>
            <View style = {styles.defaultContainer}>
                <Text> </Text>
            </View>
            </View> 
        <View style = {[styles.boxStyle, styles.box2]}>
        <View style = {styles.defaultContainer}>
                <Text> </Text>
            </View>
            </View>
        <View style = {[styles.boxStyle, styles.box3]}>
        <View style = {styles.defaultContainer}>
                <Text> </Text>
            </View>
            </View>
     </SafeAreaView>
 )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,   
        flexDirection: 'column',
             
    },
    boxStyle: {
        width: "100%",
        height: 50,
        padding: 20,
        backgroundColor:'#FFDD95'
    },
    box1:{
        backgroundColor:'#242428',
        flex:0.6,
        
    },
    box2:{
        backgroundColor:'#242428',
        flex:3
    },
    box3:{
        backgroundColor:'#242428',
        flex:0.6
    },
    defaultContainer:{
        flex: 1,
        padding: 20,
         backgroundColor:'#FFDD95'

    }
})
    
export default SecondScreen;