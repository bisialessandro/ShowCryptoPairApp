/**
 * Created by abisi on 2019-06-28
 */

import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { COLOR_HIGHLIGHT,COLOR_GRAY_DARK,COLOR_TEXT,COLOR_NEGATIVE } from '../../styles/Colors';

import {FONT_TITLE_SIZE} from "../../styles/Font";

const TextField = props => {
    return (
        <TextInput
            value={props.value}
            placeholderTextColor={props.placeholderTextColor}
            onChange={props.onChangeText}
            underlineColorAndroid="transparent"
            placeholder={props.placeholder}
            style={[styles.TextInput, props.style,
                !props.editable && styles.NotEditableTextColor,
                props.editable && styles.EditableTextColor
            ]}
            keyboardType={props.keyboardType}
            multiline={props.multiline}
            autoCapitalize={props.autoCapitalize}
            autoCorrect={props.autoCorrect}
            autoFocus={props.autoFocus}
            editable={props.editable}
        />
    );
};

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChangeText: PropTypes.func.isRequired,
    keyboardType: PropTypes.string,
    placeholder: PropTypes.string,
    multiline: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    autoCorrect: PropTypes.bool,
    autoFocus: PropTypes.bool,
    editable: PropTypes.bool,
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    placeholderTextColor: PropTypes.string,
};

const styles = StyleSheet.create({
    TextInput: {
        marginTop: 0,
        borderBottomWidth: 2,
        borderBottomColor: COLOR_HIGHLIGHT,
        backgroundColor:COLOR_NEGATIVE,
        fontSize:FONT_TITLE_SIZE,
        padding:10
    },
    NotEditableTextColor:{
        color: COLOR_GRAY_DARK
    },
    EditableTextColor:{
        color: COLOR_TEXT
    }
});

export default TextField;