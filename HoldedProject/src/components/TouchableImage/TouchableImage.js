/**
 * Created by abisi on 2019-07-11
 */

import {Alert, Image, TouchableHighlight} from "react-native";
import update from "../../assets/img/update.png";
import React from "react";
import {connect} from "react-redux";
import {fetchCryptoPrices, pollingFetchingCrypto, setCryptoPairs, setFilteredCryptoPairs} from "../../redux/binance";


/**
 * Created by abisi on 2019-07-02
 */
class TouchableImage extends React.Component {



    render(){

        return <TouchableHighlight  style={{"flex":1}} onPress={() => this.props.fetchCryptoPrices()}>
            <Image style={{"width":20,"height":20,"marginRight":20}}source={update} />
        </TouchableHighlight>
    }

    /* render function, etc */
}
export default connect(
    state => ({


    }), {
        fetchCryptoPrices
    },)( TouchableImage);
