/**
 * Created by abisi on 2019-06-27
 */

import React , {PureComponent} from 'react';
import {View} from 'react-native';
import MainComponent from './MainComponent';
import {connect} from "react-redux";
import {getCryptoPrices,fetchCryptoPrices} from '../../redux/binance'

class MainContainer extends PureComponent{


    async componentDidMount() {

         this.props.fetchCryptoPrices();


    }

    render(){
        return <MainComponent crypto={this.props.cryptoPrices}></MainComponent>
    }
}

export default connect(
    state => ({
        cryptoPrices: state.binance.crypto,

    }), {
        fetchCryptoPrices
    },)( MainContainer);