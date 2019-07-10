/**
 * Created by abisi on 2019-06-27
 */

import React , {PureComponent} from 'react';
import { Alert} from 'react-native';
import MainComponent from './MainComponent';
import {connect} from "react-redux";
import {fetchCryptoPrices,setCryptoPairs,setFilteredCryptoPairs,pollingFetchingCrypto} from '../../redux/binance';
import {storageService} from "../../services/storageServices/StorageServices";
import {CONFIG_STORAGE} from "../../config/config-storage";



class MainContainer extends PureComponent{

    state : {
        valueText:"",
        preferences:[],
        interval:null
    }




    constructor(props){
        super(props);


        this.state = {
            valueText:""
        }
    }

   componentWillUnmount() {
        clearInterval(this.state.interval);
    }





    async componentDidMount() {


        let cryptoPairs = await  storageService.retrieveData(CONFIG_STORAGE.CRYPTO_PAIR);

        if(cryptoPairs){

                this.props.setCryptoPairs(cryptoPairs);
        }

        let updatedValue = await this.props.fetchCryptoPrices();

        const valuePreferences = await storageService.retrieveData(CONFIG_STORAGE.PREFERENCES);

        this.setState({
            preferences:valuePreferences
        });

        await storageService.storeData(CONFIG_STORAGE.CRYPTO_PAIR,updatedValue);

        this.setState({interval: this.startAuthenticationPolling()});

        clearInterval(this.state.interval);


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


        if(valuePreferences==undefined||valuePreferences===""){

            Alert.alert(JSON.stringify([value]),"value");

            let array = [];

            array.push(value);

           const  updatedValue = await storageService.storeData(CONFIG_STORAGE.PREFERENCES,JSON.stringify(array));

           await this.setState({
                preferences:array
            })


        }else{


            //Alert.alert("cd",valuePreferences.replace(/[\/]/g, "" ));
            let valuePreferencesString = JSON.parse(valuePreferences.replace(/[\/]/g, "" ));

            valuePreferencesString.push(value);

            const updatedValue = await storageService.storeData(CONFIG_STORAGE.PREFERENCES,JSON.stringify(valuePreferencesString));

           await this.setState({
                preferences:valuePreferencesString
            })


        }


        this.props.fetchCryptoPrices();




    }


    async  removeFavourite(value){


        const valuePreferences = await storageService.retrieveData(CONFIG_STORAGE.PREFERENCES);


        if(valuePreferences==undefined){



        }else{

            //Alert.alert("undef"+valuePreferences.toString(),value );

            let valuePreferencesString =JSON.parse(valuePreferences.replace(/[\/]/g, "" ));

            valuePreferencesString = valuePreferencesString.filter(key => !(key===value))



            const updatedValue = await storageService.storeData(CONFIG_STORAGE.PREFERENCES,JSON.stringify(valuePreferencesString));


           await this.setState({
                preferences:valuePreferencesString
            })
        }

        this.props.fetchCryptoPrices();

    }





    async onLongClick(value){

        //Control already favorite

        if(this.state.preferences&&this.state.preferences.includes(value)){

            Alert.alert(
                'Favorite',
                'Do you want to remove the pair ' + value + ' from your favourite?',
                [

                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {text: 'OK', onPress: async () => this.removeFavourite(value)},
                ],
                {cancelable: false},
            );
        }else {
            Alert.alert(
                'Favorite',
                'Do you want to add the pair ' + value + ' to your favourite?',
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



    }

    alertInfo = () => {

        Alert.alert("Preferences","Mantain pushed the card of a pair to add/remove it from your favourites!");

    }

    onFocus = () => {

        clearInterval(this.state.interval);
    }


    render(){


        return  <MainComponent crypto={this.props.cryptoFiltered}
                               onFocus={this.onFocus}
                                  onLongClick={
                                      this.onLongClick.bind(this)}
                                  preferences={this.state.preferences}
                                    alertInfo={this.alertInfo}
                                  onChangeText={this.onChangeText.bind(this)}
        isFetchingCrypto={this.props.isFetchingCrypto}></MainComponent>

    }
}

export default connect(
    state => ({
        cryptoPrices: state.binance.crypto,
        cryptoFiltered:state.binance.cryptoFiltered,
        isFetchingCrypto:state.binance.isFetchingCrypto

    }), {
        fetchCryptoPrices,setCryptoPairs,setFilteredCryptoPairs,pollingFetchingCrypto
    },)( MainContainer);
