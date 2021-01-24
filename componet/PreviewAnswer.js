import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function PreviewAnswer(porps){

    const { question } = porps;

    const styleAnser = (item)=> {
        if (question.options[item].userselected && question.options[item].correct) {
            return <Text style = {style.answerCorrect}>{question.options[item].code}.{question.options[item].description}</Text>;
        }else if(question.options[item].userselected === true && question.options[item].correct === false){
            return <Text style = {style.answerWrong}>{question.options[item].code}.{question.options[item].description}</Text>;
        }else if(question.options[item].correct === true){
            return <Text style = {style.answerCorrect}>{question.options[item].code}.{question.options[item].description}</Text>;
        }else{
            return <Text style = {style.answerNomarl}>{question.options[item].code}.{question.options[item].description}</Text>;
        }
    };

    const ans1 = styleAnser(0);
    const ans2 = styleAnser(1);
    const ans3 = styleAnser(2);
    const ans4 = styleAnser(3);

    return(
            <View style = {style.shadow}>
                <Text style={style.title}>{question.code}.{question.description}</Text>
                <View style = {style.left}>
                    {ans1}
                    {ans2}
                </View>
                <View style = {style.right}>
                    {ans3}
                    {ans4}
                </View>
            </View>
    )
}

const style = StyleSheet.create({
    title:{
        textTransform:"uppercase",
        fontWeight:'500',
        fontSize:hp('4%'),
        padding:wp('1%'),
        justifyContent:'center'
    },
    shadow:{
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
    left:{
        flexDirection:'row',
        alignItems:'flex-start'
    },
    right:{
        flexDirection:'row',
        alignItems:'flex-start'
    },
    answerCorrect:{
        padding:wp('2%'),
        color: '#008000'
    },
    answerWrong:{
        padding:wp('2%'),
        color:'#ff0000'
    },
    answerNomarl:{
        padding:wp('2%'),
    }
    
});