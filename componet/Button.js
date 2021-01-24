import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Button extends Component{
    
    constructor(props){
        super(props);
    }

    onPressItem = (()=>{
        this.props.onPress(this.props.text);
    });

    render(){

        const { text , logo, onPress} = this.props;

        return(
            <TouchableOpacity
                activeOpacity={0.5}
                style = {style.container}
                onPress = { this.onPressItem }
            >
                <View style = {style.shadow}>
                    <Image source={logo} style={style.image}/>
                    <Text style={style.title}>{ text.description}</Text>
                </View>
            </TouchableOpacity>
        );
    }
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
        padding:wp('2%'),
        borderRadius:6,
        backgroundColor: '#FFFFFF',
        shadowColor:'#000000',
        shadowOpacity: 2,
        shadowRadius: 12,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        elevation: 10,
        marginBottom:hp('2%')
    },
    image:{
        height:hp('10%'),
        width:wp('20%'),
    },
});

