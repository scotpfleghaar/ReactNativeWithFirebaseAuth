import React from 'react';
import {Text, StyleSheet, TextInput, View} from 'react-native';

const Input = (props) => {
    const {InputStyle, LabelStyle, ContainerStyle} = styles
    return (
        <View style={ContainerStyle}>
            <Text style={LabelStyle}>{props.label}</Text>
            <TextInput
                autoCorrect={false}
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.onChangeText}
                style={InputStyle}
            />
        </View>

    )
};

const styles = StyleSheet.create({
    InputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 5,
        height: 20,
        width: 100,
        borderBottomWidth: 1,
        borderBottomColor: '#b7b7b7'
    },
    LabelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    ContainerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export {Input};