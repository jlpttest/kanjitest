import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native';
import Button from '../componet/Button'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import question from '../assets/n4.png'
const TextBtnHomeN4 = [
    {
        id:'1',
        title:'JLPT Test Kanji 1'
    },
    {
        id:'2',
        title:'JLPT Test Kanji 2'
    },
    {
        id:'3',
        title:'JLPT Test Kanji 3'
    },
    {
        id:'4',
        title:'JLPT Test Kanji 4'
    },
    {
        id:'5',
        title:'JLPT Test Kanji 5'
    },
    {
        id:'6',
        title:'JLPT Test Kanji 6'
    },
    {
        id:'7',
        title:'JLPT Test Kanji 7'
    },
    {
        id:'8',
        title:'JLPT Test Kanji 8'
    }
]
export default function HomeN1(){

    const renderText = ({ item }) =>(
        <Button text = { item } logo={ question }></Button>
    );

    return(
        <View style={{flex:1}}>
            <FlatList data={TextBtnHomeN4} 
            renderItem={renderText}
            keyExtractor={item=>item.id}
            contentContainerStyle={styles.container}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      paddingLeft:wp('4%'),
      paddingRight:wp('4%'),
      marginTop:hp('2%'),
      
    },
  });
