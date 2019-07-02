/**
 * Created by abisi on 2019-06-27
 */
import React from 'react';
import {createStackNavigator} from "react-navigation";
import {Button, Image, TouchableHighlight, View,Alert,Text} from 'react-native';
import MainContainer from "../screens/Main/MainContainer";
import drawer from '../assets/img/drawer.png'


const MainStack = createStackNavigator({
    Main:{
        screen: MainContainer,
        navigationOptions: {
            headerTitle:<Text style={{"marginLeft":20}}>{"Holded App"}</Text>,
            headerLeft: (

                <TouchableHighlight  style={{"flex":1}} onPress={() => Alert.alert("ciao")}>
                    <Image style={{"width":50,"height":50,"marginLeft":10}}source={drawer} />
                </TouchableHighlight>
            )
        }
    }
});

export default MainStack;