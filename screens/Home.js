import React from 'react';
import { SafeAreaView, View, StyleSheet, ImageBackground, FlatList } from 'react-native';
import Button from '../componet/ButtonHome'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import image from '../assets/f.png'

const TextBtnHome = [
    {
        id:'1',
        title:'JLPT Kanji N1'
    },
    {
        id:'2',
        title:'JLPT Kanji N2'
    },
    {
        id:'3',
        title:'JLPT Kanji N3'
    },
    {
        id:'4',
        title:'JLPT Kanji N4'
    },
    {
        id:'5',
        title:'JLPT Kanji N5'
    }
]
export default function Home({ navigation }){

    const _onPress = (itemSelected) =>{

         switch(itemSelected.id){
            case '1':
                navigation.navigate('JLPT N1');
                break;
            case '2':
                navigation.navigate('JLPT N2');
                break;
            case '3':
                navigation.navigate('JLPT N3');
                break;
            case '4':
                navigation.navigate('JLPT N4');
                break;
            case '5':
                navigation.navigate('JLPT N5');
                break;
            default:
                console.log('Err');
                break;
         }
    };
    const renderText = ({ item }) =>(
        <Button text = { item } onPress = {_onPress}></Button>
    );

    return(
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <FlatList data={TextBtnHome} 
                renderItem={renderText}
                keyExtractor={item=>item.id}
                contentContainerStyle={styles.flaslist}
                />
            </ImageBackground>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    flaslist:{
        paddingTop:hp('42%'),
        alignItems: 'stretch',
        paddingLeft:wp('10%'),
        paddingRight:wp('10%'),
    },
    shadow:{
        flexDirection:'row',
        alignItems:'center',
        padding:wp('2%'),
        justifyContent:'center',
        borderRadius:30,
        backgroundColor: '#9acd32',
        shadowColor:'#000000',
        shadowOpacity: 2,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        elevation: 2,
        marginBottom:hp('2%'),
        height:hp('7%')
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text:{
        textTransform:"uppercase",
        fontWeight:'700',
        fontSize:hp('2%'),
        padding:wp('2%'),
        color:'#ffffff',
    },
  });
