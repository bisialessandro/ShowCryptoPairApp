/**
 * Created by abisi on 2019-06-27
 */

import React , {PureComponent} from 'react';
import {View} from 'react-native';
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

                console.log(cryptoPairs,"prova");
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

        console.log(filteredObj ,prova );

    }

    render(){
        return <MainComponent crypto={this.props.cryptoFiltered}
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