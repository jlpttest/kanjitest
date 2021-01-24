import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import HomeN1 from '../screens/HomeN1';
import HomeN2 from '../screens/HomeN2';
import HomeN3 from '../screens/HomeN3';
import HomeN4 from '../screens/HomeN4';
import HomeN5 from '../screens/HomeN5';
import Quizzs from '../screens/Quizz';

const Stack = createStackNavigator();

export default class  AppNavigatorHome extends Component{

    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        console.log('render AppNavigatorHome');
        return(
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: {
                    backgroundColor: '#00bfff',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                    fontWeight: 'bold',
                    }}}>
                    <Stack.Screen name = "JLPT" component={Home}/>
                    <Stack.Screen name = "JLPT N5" component={HomeN5}/>
                    <Stack.Screen name = "JLPT N4" component={HomeN4}/>
                    <Stack.Screen name = "JLPT N3" component={HomeN3}/>
                    <Stack.Screen name = "JLPT N2" component={HomeN2}/>
                    <Stack.Screen name = "Quizz" component={Quizzs}/>
                    <Stack.Screen name="JLPT N1">
                        {props => <HomeN1 {...props} quizzs={this.props.quizzs[0]} />}
                    </Stack.Screen>
                    
                </Stack.Navigator>
            </NavigationContainer>

        )
    };
}
