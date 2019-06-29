/**
 * Created by abisi on 2019-06-25
 */
import React from 'react';
import {View,Image,Text} from 'react-native';
import styles from './Card-styles';
import bcLogo from '../../assets/img/bcLogo.png';

const Card = (props) => {


    return <View style={styles.CardContainer}>

        <View style={styles.RowStatistics}>


             <View style={styles.leftSizeView}>
                 <Image source={props.img?props.img:bcLogo} style={styles.ImgStyle}/>

                  <Text style={styles.textTotalAmount}>{props.titleCrypto+""}</Text>
             </View>
             <View style={styles.rightSizeView}>
                <Text style={styles.statisticTitle}>{props.totalAmount+""}</Text>
             </View>

        </View>
        <View style={styles.RowStatistics}>
            <View style={styles.rowStatisticContent}>
                <Text style={styles.textTitleDescription}>{"1h: "}</Text>
                <Text  style={[

                    props.positiveLastHour ? styles.statisticValuePositive: styles.statisticValueNegative,,


                ]}>{props.lastHourValue+"%"}</Text>
            </View>
            <View style={styles.rowStatisticContent}>
                <Text style={styles.textTitleDescription}>{"24h: "}</Text>
                <Text  style={[

                    props.positiveLastDay ? styles.statisticValuePositive:styles.statisticValueNegative,,


                ]}>{props.lastDayValue+"%"}</Text>
            </View>
            <View style={styles.rowStatisticContent}>
                <Text style={styles.textTitleDescription}>{"7d: "}</Text>
                <Text  style={[

                    props.positiveLast7Day ? styles.statisticValuePositive:styles.statisticValueNegative,


                ]}>{props.las7DayValue+"%"}</Text>
            </View>
        </View>

    </View>

};


export default Card;
