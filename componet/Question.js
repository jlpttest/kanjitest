import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function Question(porps){
    const { question } = porps;
    return(
            <View style = {style.shadow}>
                <Text style={style.title}>{question.description}</Text>
            </View>
    )
}

const style = StyleSheet.create({
    title:{
        textTransform:"uppercase",
        fontWeight:'700',
        fontSize:hp('8%'),
        padding:wp('1%'),
        justifyContent:'center'
    },
    shadow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:hp('1%'),
        borderRadius:8,
        backgroundColor: '#FFFFFF',
        shadowColor:'#00bfff',
        shadowOpacity: 5,
        shadowRadius: 12,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        elevation: 4,
        height:hp('30%'),
    },
    
});