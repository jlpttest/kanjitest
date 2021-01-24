import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground , LogBox, ActivityIndicator} from 'react-native';
import AppNavigatorHome from './AppNavigator/AppNavigatorHome'
import { db } from './config';
import loadingImg from './assets/back2.png';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

let itemsRef = db.ref('/dethi');
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quizzs: [],
      isLoading : true
    };
    //LogBox.ignoreLogs(['Setting a timer']);
  }

  componentDidMount(){
    this.getData();
  };

  getData = (() => {
    
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let quizzs = Object.values(data);
      this.setState({ quizzs, isLoading : false }); 
    });
    
  });

  render(){
    if (this.state.isLoading) {
      return(
        <View style={styles.container}>
          <ImageBackground source = { loadingImg } style={styles.image} >
            <ActivityIndicator animating={true} size="large" color="#1e90ff" style= {styles.loadding}/>
          </ImageBackground>
        </View>
      );
    }else{
      return (
        <AppNavigatorHome quizzs ={ this.state.quizzs }/>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'center'
  },
  loadding:{
    marginTop:hp('20%')
  },

  
});
