/**
 * Created by abisi on 2019-06-27
 */
import React from 'react';
import {Image, ImageBackground, StyleSheet, View,ScrollView} from 'react-native';
import background from "../../assets/img/background.jpg";
import TextField from '../../components/TextField/TextField';
import Card from '../../components/Card/Card';

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
        <ScrollView style={styles.scroll}>

                        <Card
                            positiveLastDay={cardListaValue[0].lastDayValue>0}
                            positiveLastHour={cardListaValue[0].lastHourValue>0}
                            positiveLast7Day={cardListaValue[0].las7DayValue>0}
                            titleShortCrypto={cardListaValue[0].titleShortCrypto}
                            titleCrypto={cardListaValue[0].titleCrypto}
                            totalAmount={cardListaValue[0].totalAmount}
                            lastHourValue={cardListaValue[0].lastHourValue}
                            las7DayValue={cardListaValue[0].las7DayValue}
                            lastDayValue={cardListaValue[0].lastDayValue}
                        />

        </ScrollView>

    </ImageBackground>
}


const styles = StyleSheet.create({
    img : {
        width: '65%',
        resizeMode:'contain'

    },
    container : {
        flex:1,

    },
    Scroll : {
        flex:1
    }
})


export default MainComponent;