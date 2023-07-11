import React from "react";
import { View, Text, StyleSheet, SafeAreaView} from 'react-native';

const SixthScreen = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={[styles.boxStyle , styles.box1]}>
                <View style={styles.bigbox} />
            </View>
            <View style={[styles.boxStyle , styles.box2]}>
                <View style={styles.smallcontainter}>
                    <View style={styles.smallbox}/>
                    <View style={styles.smallbox}/>
                    <View style={styles.smallbox}/>
                    <View style={styles.smallbox}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        flexDirection: 'column'
    },
    boxStyle:{
        width:"100%",
        padding:10
    },
    box1:{
        backgroundColor:'#242428',
        flex:8,
        justifyContent:'flex-end',
    },
    box2:{
        backgroundColor:'#242428',
        flex:1
    },
    bigbox:{
        backgroundColor:'#ffdd95',
        flex:1,
    },
    smallcontainter:{
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        flex:1
    },
    smallbox:{
        height:80,
        width:80,
        backgroundColor:'#ffdd95'
    },
    defaultContainer:{
        flex:1, 
        backgroundColor:'#ededed'
    }
});

export default SixthScreen;