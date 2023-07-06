import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Platform } from "react-native";

const ThirdScreen = ()=>{
    return(
       <SafeAreaView style={styles.wrapper}>
            <View style={[styles.boxStyle, styles.box1]}>
                <View style={styles.box1_1}></View>
                <View style={styles.box1_2}></View>
            </View>
            <View style={[styles.boxStyle, styles.box2]}>
                <View style={styles.box2_1}></View>
                <View style={styles.box2_2}></View>
            </View>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        flexDirection:"column",
    },
    boxStyle:{
        padding:10
    },
    box1:{
        flex:1,
        backgroundColor: "#242428",
        justifyContent: "flex-end"
    },
    box1_1:{
        height:50,
        width:50,
        marginTop:10,
        alignSelf:"flex-end",
        backgroundColor: "#FFDD95",
    },
    box1_2:{
        flex:0.5,
        marginTop:10,
        backgroundColor: "#FFDD95",
    },
    box2:{
        flex:2,
        backgroundColor: "#242428",
        justifyContent: "flex-end"
    },
    box2_1:{
        height:80,
        marginTop:10,
        backgroundColor: "#FFDD95",
    },
    box2_2:{
        height:40,
        marginTop:10,
        backgroundColor: "#FFDD95",
    }
})
export default ThirdScreen;