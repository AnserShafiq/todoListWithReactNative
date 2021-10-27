import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from "react-native";

const List = (props) => {
    return (
        <View style={style.listHolder}>
            <View style={style.leftSide}>
                <View style={style.square}></View>
                <Text style={style.text}>{props.text}</Text>
            </View>
            <View style={style.circular}></View>
        </View>
    )
}
const style=StyleSheet.create({
    listHolder:{
        backgroundColor:'#fff',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10
    },
    leftSide:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    square:{
        width:24,
        height:24,
        backgroundColor:'#55BCF6',
        opacity:0.4,
        marginRight:10,
        borderRadius:5
    },
    text:{
        maxWidth:'80%',
    },
    circular:{
        height:12,
        width:12,
        borderColor:'#55BCF6',
        borderRadius:5,
        borderWidth:2
    }
})
export default List
