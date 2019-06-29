/**
 * Created by abisi on 2019-06-27
 */
import React from 'react';
import {Image,TextInput ,ImageBackground, StyleSheet, View,ScrollView,FlatList} from 'react-native';
import background from "../../assets/img/background.jpg";
import TextField from '../../components/TextField/TextField';
import Card from '../../components/Card/Card';
import ImageLoader from '../../components/Loader/Loader';
import {COLOR_HIGHLIGHT, COLOR_NEGATIVE} from "../../styles/Colors";
import {FONT_TITLE_SIZE} from "../../styles/Font";

const cardListaValue = [{
        "titleShortCrypto":"BTC",
    "titleCrypto":"BITCOIN",
    "totalAmount":"12312312",
    "lastHourValue":324324 ,
    "lastDayValue":-343,
    "las7DayValue":3243

}]

const MainComponent = (props) => {

    console.log(props.crypto)

    return <ImageBackground source={background} style={styles.container}>
        <View style={styles.StyledView}>
            < TextInput name={"SearchPairs"} placeholder={"Search a pair"} onChangeText={ props.onChangeText} style={styles.TextInput}/>
            </View>

        {props.crypto?(
            <FlatList
                data={props.crypto}
                renderItem={({item}) => Object.keys(item).map( key =>  <Card
                    positiveLastDay={cardListaValue[0].lastDayValue > 0}
                    positiveLastHour={cardListaValue[0].lastHourValue > 0}
                    positiveLast7Day={cardListaValue[0].las7DayValue > 0}
                    titleShortCrypto={cardListaValue[0].titleShortCrypto}
                    titleCrypto={key}
                    totalAmount={item[key]}
                    lastHourValue={cardListaValue[0].lastHourValue}
                    las7DayValue={cardListaValue[0].las7DayValue}
                    lastDayValue={cardListaValue[0].lastDayValue}
                />)}
            />


            ):(<ImageLoader/>)}

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
    },
    StyledView:{
        margin:10
    },
    TextInput: {
        marginTop: 0,
        borderBottomWidth: 2,
        borderBottomColor: COLOR_HIGHLIGHT,
        backgroundColor:COLOR_NEGATIVE,
        fontSize:FONT_TITLE_SIZE,
        padding:10
    },
})


export default MainComponent;