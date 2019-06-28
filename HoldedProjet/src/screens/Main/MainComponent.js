/**
 * Created by abisi on 2019-06-27
 */
import React from 'react';
import {Image, ImageBackground, StyleSheet, View,ScrollView} from 'react-native';
import background from "../../assets/img/background.jpg";
import TextField from '../../components/TextField/TextField';
import Card from '../../components/Card/Card';
import ImageLoader from '../../components/Loader/Loader';

const cardListaValue = [{
        "titleShortCrypto":"BTC",
    "titleCrypto":"BITCOIN",
    "totalAmount":"12312312",
    "lastHourValue":324324 ,
    "lastDayValue":-343,
    "las7DayValue":3243

}]

const MainComponent = (props) => {

    return <ImageBackground source={background} style={styles.container}>
         <TextField> </TextField>
        <ImageLoader/>

    </ImageBackground>
}


const styles = StyleSheet.create({
    img : {
        width: '65%',
        resizeMode:'contain',


    },
    container : {
        flex:1,

    },
    Scroll : {
        flex:1
    }
})


export default MainComponent;