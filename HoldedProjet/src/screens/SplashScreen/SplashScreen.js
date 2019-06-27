/**
 * Created by abisi on 2019-06-27
 */
import React ,{PureComponent} from 'react';
import {View,StyleSheet} from 'react-native';
import logo from '../../assets/img/holded.png'
import ImageLoader from '../../components/ImageLoader/ImageLoader';
import {COLOR_PRIMARY_ORANGE} from "../../styles/Colors";


class SplashScreen extends PureComponent{

    componentDidMount(){
        setTimeout(async () => {
            //Check if saved a property if and render
            this.props.navigation.navigate('WelcomeScreen');
        },2000);

    }

    render() {
        return (
            <View style={styles.container}>
                <ImageLoader
                    style={styles.logo}
                    source={logo}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLOR_PRIMARY_ORANGE,
    },
    logo: {
        width: '65%',
        height: '100%',
        alignSelf:'center',
        resizeMode:'contain'

    },
});

export default SplashScreen;