import React, { Component } from 'react';
import { SafeAreaView, View, StyleSheet, FlatList } from 'react-native';
import Button from '../componet/Button'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import question from '../assets/n1.png';
import GameHelper from '../Service/GameHelper';

export default class HomeN1 extends Component{

    constructor(props) {
        super(props);  
    }

    onPressExam = ((exam)=>{
        console.log(exam);
        GameHelper.setQuizzes(exam.quizzes);
        console.log(GameHelper.getQuizzes());
        this.props.navigation.navigate('Quizz');
    });

    renderExam = ({ item }) =>(
        <Button text = { item } logo={ question } onPress = {this.onPressExam} >   
        </Button>
    );

    render(){       
        return(
            <View style={{flex:1}}>
                <FlatList data={this.props.quizzs} 
                renderItem={this.renderExam}
                keyExtractor={item=>item.code}
                contentContainerStyle={styles.container}
                />
            </View>
        );
    };
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
