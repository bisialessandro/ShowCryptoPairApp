/**
 * Created by abisi on 2019-06-25
 */
import React , {PureComponent} from 'react';
import WelcomePageComponent from './WelcomePageComponent';
import {View} from 'react-native';


class WelcomePageContainer extends PureComponent {

    onStartPress = () => {
        this.props.navigation.navigate('Main');
    }


    render(){

        return <WelcomePageComponent onStartPress={this.onStartPress}> </WelcomePageComponent>


    }


}

export default WelcomePageContainer;