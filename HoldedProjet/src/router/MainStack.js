/**
 * Created by abisi on 2019-06-27
 */
import React from 'react';
import {createStackNavigator,createDrawerNavigator} from "react-navigation";
import {Button, Image, TouchableHighlight, View,Alert,Text} from 'react-native';
import MainContainer from "../screens/Main/MainContainer";
import drawer from '../assets/img/drawer.png'
import DrawerIcon from '../components/Drawer/DrawerIcon';

const MainStack = createStackNavigator({
    Main:{
        screen: MainContainer,
        navigationOptions: ({ navigation }) => ({
            headerTitle:<Text style={{"marginLeft":20}}>{"Holded App"}</Text>,
            headerLeft: (

                <DrawerIcon navigation={navigation} />
            )
        })

    }
});

export default MainStack;