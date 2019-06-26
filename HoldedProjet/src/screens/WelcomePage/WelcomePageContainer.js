/**
 * Created by abisi on 2019-06-25
 */
import React , {Component} from 'react';
import WelcomePageComponent from './WelcomePageComponent';
import {View} from 'react-native';


class WelcomePageContainer extends Component {

    onStartPress = () => {

    }


    render(){

        return <View>
            <WelcomePageComponent onStartPress={this.onStartPress}> </WelcomePageComponent>
        </View>

    }


}

export default WelcomePageContainer;