import React from 'react';
import {Text, StyleSheet, TextInput} from 'react-native';

const Input = (props) => {
    return (
        <View>
            <Text>{props.label}</Text>
            <TextInput/>
        </View>

    )
};

const styles = StyleSheet.create({

});

export {Input};