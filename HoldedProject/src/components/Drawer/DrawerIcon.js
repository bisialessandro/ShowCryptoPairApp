import {Alert, Image, TouchableHighlight} from "react-native";
import drawer from "../../assets/img/drawer.png";
import React from "react";
import { DrawerActions } from 'react-navigation';

/**
 * Created by abisi on 2019-07-02
 */
class DrawerIcon extends React.Component {



    render(){

        return <TouchableHighlight  style={{"flex":1}} onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
            <Image style={{"width":50,"height":50,"marginLeft":10}}source={drawer} />
        </TouchableHighlight>
    }

    /* render function, etc */
}
export default DrawerIcon;