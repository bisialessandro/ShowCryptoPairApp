/**
 * Created by abisi on 2019-06-26
 */

import { StyleSheet } from 'react-native';

import {
    COLOR_NEGATIVE, COLOR_PRIMARY_BLUE,
} from '../../styles/Colors';

import {
    FONT_BASE_FAMILY,
    FONT_BASE_SIZE,
} from '../../styles/Font';

const styles = StyleSheet.create({
    Button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        borderRadius: 10
    },
    Button_FullWidth: {
        width: '65%',
    },
    Button_Primary: {
        backgroundColor: COLOR_NEGATIVE,
        color: COLOR_PRIMARY_BLUE,
    },
    Button_Primary_Disabled: {
        borderWidth: 1,
        borderColor: 'white'
    },
    Button_BottomFixed: {
        marginBottom: 25,

    },

    ButtonText: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: FONT_BASE_SIZE,
        fontFamily: FONT_BASE_FAMILY,
        borderRadius:10
    },
    OrangeText: {
        color: COLOR_PRIMARY_BLUE,
    },
    WhiteText: {
        color: COLOR_NEGATIVE,
    },

    Button_Inverted:{
        backgroundColor: COLOR_PRIMARY_BLUE,
    },
    Button_Inverted_Disabled:{
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: COLOR_PRIMARY_BLUE,
    }

});

export default styles;
