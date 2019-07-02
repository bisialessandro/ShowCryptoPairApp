/**
 * Created by abisi on 2019-06-27
 */
import React from 'react';
import {Alert,Image,TextInput ,ImageBackground, StyleSheet, View,ScrollView,TouchableHighlight,FlatList} from 'react-native';
import background from "../../assets/img/background.jpg";
import TextField from '../../components/TextField/TextField';
import Card from '../../components/Card/Card';
import ImageLoader from '../../components/Loader/Loader';
import {COLOR_HIGHLIGHT, COLOR_NEGATIVE} from "../../styles/Colors";
import {FONT_TITLE_SIZE} from "../../styles/Font";
import info from '../../assets/img/info.png'


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

        <View style={styles.StyledView} >
            < TextInput name={"SearchPairs"} placeholder={"Search a pair"}  style={styles.TextInput}/>

            <TouchableHighlight  style={styles.ContainerButton} onPress={props.showAlertInfo}>
                <Image style={styles.ImageStyle} source={info} />
            </TouchableHighlight>

        </View>

        {props.crypto?(
            <FlatList

                data={props.crypto}
                renderItem={({item}) => Object.keys(item).map( key =>  <Card
                    key={key}
                    positiveLastDay={cardListaValue[0].lastDayValue > 0}
                    positiveLastHour={cardListaValue[0].lastHourValue > 0}
                    positiveLast7Day={cardListaValue[0].las7DayValue > 0}
                    titleShortCrypto={cardListaValue[0].titleShortCrypto}
                    selectedPref={props.preferences&&props.preferences.includes(key)}
                    titleCrypto={key}
                    totalAmount={item[key]}
                    lastHourValue={cardListaValue[0].lastHourValue}
                    las7DayValue={cardListaValue[0].las7DayValue}
                    lastDayValue={cardListaValue[0].lastDayValue}
                    onLongClick={props.onLongClick}
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
        margin:10,
        flexDirection:'row',


    },
    TextInput: {
        marginTop: 0,
        width:'80%',
        borderBottomWidth: 2,
        borderBottomColor: COLOR_HIGHLIGHT,
        backgroundColor:COLOR_NEGATIVE,
        fontSize:FONT_TITLE_SIZE,
        padding:10
    },
    ContainerButton:{

        alignItems: 'center',
        justifyContent: 'center',

    },
    ImageStyle:{
        width:50,
        height:50,
        padding:'4%',
        marginLeft:10,
        alignItems: 'center',
        justifyContent: 'center',

    }
})


export default MainComponent;