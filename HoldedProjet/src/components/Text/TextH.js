/**
 * Created by abisi on 2019-06-26
 */

import React from 'react';
import styles from "./Text-styles";
import {Text,View} from 'react-native';

const TextH = props =>{
    return(
        <View><Text

        style={[
            styles.Text,
            props.title && styles.Button_Primary,
            props.subtitle && styles.Button_Primary_Disabled,

        ]}>{props.text}</Text></View>);

};

export default TextH;