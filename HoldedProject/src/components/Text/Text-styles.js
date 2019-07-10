/**
 * Created by abisi on 2019-06-26
 */
import { StyleSheet } from 'react-native';

import {
    COLOR_GRAY_LIGHT,COLOR_TEXT
} from '../../styles/Colors';

import {
    FONT_TITLE_SIZE,FONT_TITLE_WEIGHT,FONT_BASE_SIZE,FONT_EXTRABOLD_FAMILY,
    FONT_BIG_TITLE_SIZE
} from '../../styles/Font';

const styles = StyleSheet.create({
    Text: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        color:COLOR_GRAY_LIGHT

    },
    subtitle : {
        fontSize:FONT_BIG_TITLE_SIZE,
        fontWeight:FONT_TITLE_WEIGHT,
        fontFamily:FONT_EXTRABOLD_FAMILY
    },
    title:{
        fontSize:FONT_BASE_SIZE,
    },


});

export default styles;