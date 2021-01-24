import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Card, ListItem, Icon , Divider } from 'react-native-elements'
export default function ButtonHome(props){
    const { text, onPress } = props;
    const onPressItem = ()=>{
        onPress(text);
    }
    return(
        <TouchableOpacity
            activeOpacity={0.5}
            onPress = {onPressItem}
       >
            <View style = {style.shadow}>
                <Text style={style.title}>{ text.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const style = StyleSheet.create({
    title:{
        textTransform:"uppercase",
        fontWeight:'700',
        fontSize:hp('2%'),
        padding:wp('2%'),
        justifyContent:'center'
    },
    shadow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:wp('2%'),
        borderRadius:8,
        backgroundColor: '#FFFFFF',
        shadowColor:'#000000',
        shadowOpacity: 5,
        shadowRadius: 12,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        elevation: 4,
        marginBottom:hp('2%')
    },
    
});

