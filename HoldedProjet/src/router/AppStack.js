/**
 * Created by abisi on 2019-06-27
 */

import React from 'react';

import {createSwitchNavigator} from 'react-navigation';

import WelcomeStack from './WelcomeStack';
import MainStack from './MainStack';
import SplashStack from "./SplashStack";

const AppStack = createSwitchNavigator(
    {
        WelcomeScreen: {
            screen: WelcomeStack,
        },
        Main: {
            screen: MainStack,
        },
        Splash:{
            screen: SplashStack,
        }
    },
    {
        initialRouteName: 'Splash',
        navigationOptions: {
            headerMode: 'none',
        }
    }
);
export default AppStack;