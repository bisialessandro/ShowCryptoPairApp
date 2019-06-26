/**
 * Created by abisi on 2019-06-26
 */

import React from 'react';

import { Text } from 'react-native';

import styles from './BodyText-styles';

const BodyText = props => {
    return (
        <Text
            onPress={props.onPress}
            style={[
                styles.BodyText,
                props.title && styles.BodyText_Title,
                props.negative && styles.BodyText_Negative,
                props.highlight && styles.BodyText_Highlight,
                props.bigTitle && styles.BodyText_BigTitle,
                props.currencyTitle && styles.BodyText_Currency,
                props.smallSize && styles.BodyText_SmallSize,
                props.label && styles.BodyText_Label,
                props.greyed && styles.BodyText_Greyed,
                props.bold && styles.BodyText_Bold,
                props.alignCenter && styles.BodyText_AlignCenter,
                props.bottomFixed && styles.BodyText_BottomFixed,
                props.errorText && styles.BodyText_ErrorText,
                props.style,
            ]}
        >
            {props.children}
        </Text>
    );
};



export default BodyText;