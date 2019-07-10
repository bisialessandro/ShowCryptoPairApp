/**
 * Created by abisi on 2019-06-25
 */

import {  StyleSheet} from 'react-native';

import {
    COLOR_GRAY_LIGHT, COLOR_TEXT,COLOR_POSITIVE_AVERAGE,COLOR_NEGATIVE_AVERAGE,COLOR_HIGHLIGHT
} from '../../styles/Colors';
import {FONT_TITLE_WEIGHT,FONT_TITLE_SIZE} from "../../styles/Font";

const styles = StyleSheet.create({
    CardContainer: {
        margin:5,
        flex:1,
        height:'15%',
        backgroundColor:COLOR_GRAY_LIGHT,
        flexDirection: 'column',
        borderRadius: 10,
    },
    CardContainerSelcted: {
        margin:5,
        flex:1,
        height:'15%',
        backgroundColor:' -webkit-linear-gradient(left, rgba(255,175,75,1) 0%, rgba(241,111,92,1) 39%, rgba(255,175,75,1) 62%, rgba(255,175,75,1) 65%, rgba(255,146,10,1) 89%, rgba(255,146,10,1) 100%',
        flexDirection: 'column',
        borderRadius: 10,
    },
    Img:{
      width:'5%',
      height:'10px'
    },
    Row:{
        margin:20,
        flexDirection: 'row'
    },
    RowStatistics:{
        margin:20,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    leftSizeView:{
        flexDirection: 'row',

        justifyContent: 'flex-start'
    },
    rightSizeView:{
        justifyContent: 'flex-end'
    },
    spaceBetween:{

    },
    textTitleDescription:{
        fontWeight:FONT_TITLE_WEIGHT,
            color:COLOR_TEXT,


    },
    textTotalAmount:{
        fontWeight:FONT_TITLE_WEIGHT,
        color:COLOR_TEXT,
        alignItems:'center'



    },
    statisticTitle:{
        fontWeight:FONT_TITLE_WEIGHT,
        fontSize:FONT_TITLE_SIZE,
        color:COLOR_TEXT,

    },
    statisticValuePositive:{
        color:COLOR_POSITIVE_AVERAGE,

    },
    statisticValueNegative:{
        color:COLOR_NEGATIVE_AVERAGE,
    },
    rowStatisticContent:{
        flexDirection: 'row',

    },
    ImgStyle:{
        width:40,
        height:40
    },


});


export default styles;