import {createDrawerNavigator} from "react-navigation";
import React from "react";
import MainStack from './MainStack';
import CustomDrawerComponent from '../components/Drawer/CustomDrawerComponent';

/**
 * Created by abisi on 2019-07-02
 */

const DrawerNavigation = createDrawerNavigator( {Home: {
    screen: MainStack,
}},
         CustomDrawerComponent
    );

export default DrawerNavigation;