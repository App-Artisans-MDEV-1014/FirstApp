import React from "react";
import { StyleSheet, Platform, SafeAreaView, View, Text } from "react-native";


const FifthScreen = () => {
    const {container, wrapper, boxwrap, boxStyle1, boxstyle2 } = styles
    return(
        <SafeAreaView
        style={container}
        >
            <View style={wrapper}>
                <View style={boxwrap}>
                    <View style = {boxStyle1}/>
                    <View style = {boxStyle1}/>
                    <View style = {boxStyle1}/>
                    <View style = {boxStyle1}/>
                </View>
                    <View style = {boxstyle2}/>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#242428',
    },
    wrapper:{
        flex: 1,
        marginHorizontal: 15,
        paddingVertical: Platform.OS === 'android' ? 60 : 30,
    },
    boxwrap:{
        flex: 1,
        flexDirection:'column',
    },
    boxStyle1:{
        width: 'auto',
        height: 80,
        backgroundColor: '#FFDD95',
        marginBottom: 20,
        borderRadius: 5,
    },
    boxstyle2:{
        width: 80,
        height: 80,
        backgroundColor: '#FFDD95',
        alignSelf: 'flex-end',
        borderRadius: 5,
    },
})

export default FifthScreen;