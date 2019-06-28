/**
 * Created by abisi on 2019-06-25
 */
import React , {PureComponent} from 'react';
import WelcomePageComponent from './WelcomePageComponent';
import {View} from 'react-native';
import {storageService} from "../../services/storageServices/StorageServices";
import {CONFIG_STORAGE} from '../../config/config-storage';

class WelcomePageContainer extends PureComponent {

   async onStartPress(){

        await storageService.storeData(CONFIG_STORAGE.FIRST_LOGIN,"false");

        await this.props.navigation.navigate('Main');
    }


    render(){

        return <WelcomePageComponent onStartPress={this.onStartPress}> </WelcomePageComponent>


    }


}

export default WelcomePageContainer;