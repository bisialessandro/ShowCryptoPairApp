/**
 * Created by abisi on 2019-07-03
 */
import React ,{Component} from 'react';
import {View,Image} from 'react-native';
import TextH from "../Text/TextH";
import styles from './MessageErrorPage-styles';
import noResult from '../../assets/img/NoResult.png';

class MessageErrorPage extends Component{

    render(){

        return (<View style={styles.ViewStyle}><Image style={styles.ImageSize}source={noResult} /></View>);

    }
}

export default MessageErrorPage;