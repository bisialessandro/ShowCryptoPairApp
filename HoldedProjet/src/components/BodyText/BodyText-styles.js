/**
 * Created by abisi on 2019-06-26
 */

import { StyleSheet } from 'react-native';

import {
    FONT_BASE_FAMILY,
    FONT_BASE_FAMILY2,
    FONT_BASE_SIZE,
    FONT_BASE_WEIGHT,
    FONT_BIG_TITLE_SIZE,
    FONT_CURRENCY,
    FONT_BIG_TITLE_WEIGHT,
    FONT_SMALL_SIZE,
} from '../../styles/Font';

import {
    COLOR_TEXT,
    COLOR_ERROR,
    COLOR_GRAY,
    COLOR_GRAY_DARK,
    COLOR_HIGHLIGHT,
    COLOR_NEGATIVE,
} from '../../styles/Colors';

const styles = StyleSheet.create({
    BodyText: {
        fontFamily: FONT_BASE_FAMILY,
        fontSize: FONT_BASE_SIZE,
        fontWeight: FONT_BASE_WEIGHT,
        color: COLOR_TEXT,
        marginTop: 2,
        marginBottom: 2,
    },
    BodyText_Title: {
        fontFamily: FONT_BASE_FAMILY2,
        marginTop: 20,
        marginBottom: 10,
    },
    BodyText_BigTitle: {
        fontSize: FONT_BIG_TITLE_SIZE,
        fontWeight: FONT_BIG_TITLE_WEIGHT,
    },
    BodyText_Currency: {
        fontSize: FONT_CURRENCY,
        fontWeight: FONT_BIG_TITLE_WEIGHT,
    },
    BodyText_SmallSize: {
        fontSize: FONT_SMALL_SIZE,
    },
    BodyText_Greyed: {
        color: COLOR_GRAY_DARK,
    },
    BodyText_Negative: {
        color: COLOR_NEGATIVE,
    },
    BodyText_Highlight: {
        color: COLOR_HIGHLIGHT,
    },
    BodyText_Label: {
        color: COLOR_GRAY,
        marginTop: 0,
        marginBottom: 0,
    },
    BodyText_Bold: {
        fontWeight: 'bold',
    },
    BodyText_AlignCenter: {
        textAlign: 'center',
    },
    BodyText_FullWidth: {
        width: '100%',
    },
    BodyText_BottomFixed: {
        marginBottom: 10,
    },
    BodyText_ErrorText: {
        color: COLOR_ERROR,
    },
});

export default styles;