/**
 * Created by abisi on 2019-06-27
 */
import React ,{PureComponent} from 'react';
import {View,StyleSheet} from 'react-native';
import logo from '../../assets/img/holded.png'
import ImageLoader from '../../components/ImageLoader/ImageLoader';
import {COLOR_PRIMARY_BLUE} from "../../styles/Colors";
import {CONFIG_STORAGE} from '../../config/config-storage';
import {storageService} from "../../services/storageServices/StorageServices";
import NetInfo from "@react-native-community/netinfo";
import {connect} from "react-redux";
import {isConnected,getConnectionType,  setConnectionStatus,
    setConnectionType} from "../../redux/utils";


class SplashScreen extends PureComponent{

    componentDidMount(){
        setTimeout(async () => {



            //Check if saved a property if and render
            const firstLogin = await storageService.retrieveData(CONFIG_STORAGE.FIRST_LOGIN);

            if (firstLogin === undefined) {
                this.props.navigation.navigate('WelcomeScreen');
            }else{
                this.props.navigation.navigate('DrawerNavigation');
            }



        },2000);//2000

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
        backgroundColor: COLOR_PRIMARY_BLUE,
    },
    logo: {
        width: '65%',
        height: '100%',
        alignSelf:'center',
        resizeMode:'contain'

    },
});

export default ( SplashScreen);
