import React, { Component } from 'react';
import { SafeAreaView, View, StyleSheet, Text, FlatList } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'
import Answer from '../componet/Answer'
import Question from '../componet/Question'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import GameHelper from '../Service/GameHelper';
import Preview from '../componet/PreviewAnswer';

export default class Quizz  extends Component{
    
    constructor(props){
        super(props);
        const quizzes = GameHelper.getQuizzes();
        const totalCount = quizzes.length;
        this.state = {
            correctCount: 0,
            totalCount: totalCount,
            activeQuestionIndex: 0,
        };
    }
    
    _onPress = (itemSelected) =>{
        console.log('set state');
        console.log('item slect');
        console.log(itemSelected);
        GameHelper.setSelectedQuizz(itemSelected);
        this.setState(state=>{
            const nextSate = {};
            if(itemSelected.correct){
                nextSate.correctCount = state.correctCount + 1;
            }
            return nextSate;
        },
        () => {
                setTimeout(() => this.nextQuestion(), 10);
            }
        );
    };
    
    renderText = ({ item }) =>(
        <Preview question = {item} ></Preview>
    );

    nextQuestion = () => {
        this.setState(state => {
          const nextIndex = state.activeQuestionIndex + 1;
    
          if (nextIndex >= state.totalCount) {
            console.log('End');
          }
          return {
            activeQuestionIndex: nextIndex
          };
        });
      };
    
    render(){
        console.log(GameHelper.getQuizzes());
        const quizzes = GameHelper.getQuizzes();
        const quizz = quizzes[this.state.activeQuestionIndex];
        console.log('render'+ this.state.activeQuestionIndex);
        if (quizzes.length - 1 < this.state.activeQuestionIndex) {
            return(
                <View style={styles.containerResult}>
                    <View style = {styles.progess}>
                        <ProgressCircle
                            percent={30}
                            radius={50}
                            borderWidth={8}
                            color="#3399FF"
                            shadowColor="#999"
                            bgColor="#fff"
                        >
                            <Text>{this.state.correctCount}/{this.state.totalCount}</Text>
                        </ProgressCircle>
                    </View>
                    <View style = {styles.previewAns}>
                        <FlatList
                            data = {quizzes}
                            renderItem = {this.renderText}
                            keyExtractor = {item => item.code}
                        />
                    </View>
                </View>
            );
        }else{
            return(
                <View style={styles.containerExam}>
                    <View style = { styles.question }>
                        <Question question = { quizz }/>
                    </View>
                    <View style = {styles.answer}>
                        <Answer answer = { quizz.options[0] } onPress = {this._onPress} />
                    </View>
                    <View style = {styles.answer}>
                        <Answer answer = { quizz.options[1]} onPress = {this._onPress} />
                    </View>
                    <View style = {styles.answer}>
                        <Answer answer = { quizz.options[2] } onPress = {this._onPress} />
                    </View>
                    <View style = {styles.answer}>
                        <Answer answer = { quizz.options[3] } onPress = {this._onPress} />
                    </View>
                </View> 
            );
        }
    }
};
const styles = StyleSheet.create({
    containerExam: {
        flex: 1,
        flexDirection:'column',
        justifyContent:'flex-end',
        padding:wp('7%')
    },
    containerResult: {
        flex: 1,
        backgroundColor:'#FFFFFF',
        alignItems:'center'
    },
    question:{
        marginBottom:hp('5%'),
    },
    answer:{
        
    },
    progess:{
        justifyContent:'center'
    },
    previewAns:{
        alignItems:'stretch'
    }
  });
