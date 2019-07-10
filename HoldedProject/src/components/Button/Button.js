/**
 * Created by abisi on 2019-06-26
 */

import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';

import styles from './Button-styles';
import {COLOR_NEGATIVE, COLOR_PRIMARY_ORANGE} from "../../styles/Colors";

const Button = props => {
    return (

        <TouchableOpacity
            activeOpacity={0.5}
            onPress={props.onPress}
            disabled={props.disabled || props.withLoader}
            style={[
                styles.Button,
                props.primary && styles.Button_Primary,
                props.disabled && styles.Button_Primary_Disabled,
                props.fullWidth && styles.Button_FullWidth,
                props.bottomFixed && styles.Button_BottomFixed,
                props.inverted && styles.Button_Inverted,
                props.buttonDisabledInverted && styles.Button_Inverted_Disabled,
                props.buttonInverted && styles.Button_Inverted,
                props.style,
            ]}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                {props.withLoader ? (
                    <ActivityIndicator size="large" color={props.withLoaderSync ? COLOR_NEGATIVE:COLOR_PRIMARY_ORANGE} />
                ) : (
                    <Text
                        style={[
                            styles.ButtonText,
                            props.disabled && styles.WhiteText,
                            props.primary && styles.BlueText,
                            props.inverted && styles.WhiteText,
                            props.buttonDisabledInverted && styles.BlueText,
                            props.buttonInverted && styles.WhiteText,
                            props.textStyle,
                        ]}
                    >
                        {!props.big ? props.label.toUpperCase() : props.label}
                    </Text>
                )}

            </View>
        </TouchableOpacity>
    );
};


export default Button