/**
 * Created by abisi on 2019-06-27
 */

import React , {PureComponent} from 'react';
import {View,Alert} from 'react-native';
import MainComponent from './MainComponent';
import {connect} from "react-redux";
import {getCryptoPrices,fetchCryptoPrices,setCryptoPairs,setFilteredCryptoPairs} from '../../redux/binance';
import {storageService} from "../../services/storageServices/StorageServices";
import {CONFIG_STORAGE} from "../../config/config-storage";

class MainContainer extends PureComponent{

    state : {
        valueText:""
    }

    constructor(props){
        super(props);


        this.state = {
            valueText:""
        }
    }

    async componentDidMount() {

        let cryptoPairs = await  storageService.retrieveData(CONFIG_STORAGE.CRYPTO_PAIR);



        if(cryptoPairs){

                this.props.setCryptoPairs(cryptoPairs);
        }

        let updatedValue = await this.props.fetchCryptoPrices();



        await storageService.storeData(CONFIG_STORAGE.CRYPTO_PAIR,updatedValue);


    }

    onChangeText = (text,prova) => {



        let filteredObj = this.props.cryptoPrices.filter(item =>Object.keys(item)[0].includes(text.toUpperCase()));

        this.props.setFilteredCryptoPairs(filteredObj);

        this.setState({
            valueText:text
        })



    }

    async  storageFavorite(value){




        const valuePreferences = await storageService.retrieveData(CONFIG_STORAGE.PREFERENCES);


        if(valuePreferences==undefined){
            let array = [value];
            await storageService.storeData(CONFIG_STORAGE.PREFERENCES,array.toString());
            Alert.alert("undef",valuePreferences );

        }else{
            Alert.alert("cd",JSON.stringify(valuePreferences) );
            let valuePreferencesString = [valuePreferences,value];
            await storageService.storeData(CONFIG_STORAGE.PREFERENCES,valuePreferencesString.toString());

        }
    }


    async onLongClick(value){


        console.log("click Card");

        //Control already favorite



        Alert.alert(
            'Favorite',
            'Do you want to add the pair '+value+' to your favourite?',
            [

                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress: async () => this.storageFavorite(value)},
            ],
            {cancelable: false},
        );




    }

    render(){
        return <MainComponent crypto={this.props.cryptoFiltered}
                              onLongClick={
                                  this.onLongClick.bind(this)}
                              onChangeText={this.onChangeText.bind(this)} ></MainComponent>
    }
}

export default connect(
    state => ({
        cryptoPrices: state.binance.crypto,
        cryptoFiltered:state.binance.cryptoFiltered

    }), {
        fetchCryptoPrices,setCryptoPairs,setFilteredCryptoPairs
    },)( MainContainer);