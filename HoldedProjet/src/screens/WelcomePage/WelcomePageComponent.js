/**
 * Created by abisi on 2019-06-25
 */
import React from 'react';
import {View ,StyleSheet,Image} from 'react-native';
import Button from "../../components/Button/Button";
import BodyText from "../../components/BodyText/BodyText";
import TextH from '../../components/Text/TextH';
import holded from '../../assets/img/holded.png';


const WelcomePageComponent = (props) => {


    return <View  style={styles.container}>

        <Image  source={holded}  style={styles.img}/>
        <TextH text title text={"Welcome to Holded App!"}/>
        <TextH text subTitle text={"Remain updated with your favourite crypto currency!"} />
        <Button label="PARTICIPATE"
                onPress={props.onStartPress}
                button
                primary={true}
                fullWidth={true}/>
    </View>

};

const styles = StyleSheet.create({
    img : {
        height:'50%',
        width:'50%',

    },
    container : {
        justifyContent: 'center',
        alignItems:'center'
    }
})

export default WelcomePageComponent;