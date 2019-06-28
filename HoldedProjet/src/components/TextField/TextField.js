/**
 * Created by abisi on 2019-06-28
 */

import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { COLOR_HIGHLIGHT,COLOR_GRAY_DARK,COLOR_TEXT } from '../../styles/Colors';

const TextField = props => {
    return (
        <TextInput
            value={props.value}
            placeholderTextColor={props.placeholderTextColor}
            onChange={event => props.onChangeText(event, props.name)}
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
        padding: 0,
        marginTop: 0,
        borderBottomWidth: 2,
        borderBottomColor: COLOR_HIGHLIGHT,
    },
    NotEditableTextColor:{
        color: COLOR_GRAY_DARK
    },
    EditableTextColor:{
        color: COLOR_TEXT
    }
});

export default TextField;