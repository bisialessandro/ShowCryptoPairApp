/**
 * Created by abisi on 2019-06-28
 */

import React from 'react';
import {Image,StyleSheet,View} from 'react-native'
import animation from '../../assets/img/animation.gif'

const ImageLoader = (props) => {

    return <View style={styles.View}>
        <Image source={require('../../assets/img/animation.gif')} style={styles.LoaderStyle} ></Image>
    </View>
}

const styles = StyleSheet.create({
    LoaderStyle:{


    },
    View:{
        flex:1,
        alignSelf:'center',
        flexDirection:'column'
    }
});
export default ImageLoader;