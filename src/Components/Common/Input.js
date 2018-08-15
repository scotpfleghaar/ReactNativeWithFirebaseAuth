import React from 'react';
import {Text, StyleSheet, TextInput, View} from 'react-native';

const Input = (props) => {
    const {InputStyle, LabelStyle, ContainerStyle} = styles
    return (
        <View style={ContainerStyle}>
            <Text style={LabelStyle}>{props.label}</Text>
            <TextInput
                secureTextEntry={!!props.secureTextEntry}
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
        flex: 2,
        height: 20,
        width: 100,
        borderBottomWidth: 1,
        borderBottomColor: '#d4d4d4'
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