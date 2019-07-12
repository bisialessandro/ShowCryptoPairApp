/**
 * Created by abisi on 2019-06-25
 */
import React from 'react';
import {View ,StyleSheet,Image,ImageBackground} from 'react-native';
import Button from "../../components/Button/Button";
import BodyText from "../../components/BodyText/BodyText";
import TextH from '../../components/Text/TextH';
import holded from '../../assets/img/holded.png';
import background from "../../assets/img/background.jpg";

const WelcomePageComponent = (props) => {



    return <ImageBackground   source={background} style={styles.container}>

        <Image  source={holded}  style={styles.img}/>
        <TextH text title text={"Welcome to Holded App!"}/>
        <TextH text subTitle text={"Remain updated with your favourite crypto currency!"} />
        <Button label={"PARTICIPATE"}
                onPress={props.onStartPress}
                button
                primary={true}
                fullWidth={true}/>
    </ImageBackground>

};

const styles = StyleSheet.create({
    img : {
        width: '65%',
        resizeMode:'contain'

    },
    container : {
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    }
})

export default WelcomePageComponent;
