import React from 'react';
import {Text, StyleSheet, TextInput, View} from 'react-native';

const Input = (props) => {
    return (
        <View>
            <Text>{props.label}</Text>
            <TextInput
                value={props.value}
                onChangeText={props.onChangeText}
                style={{height: 20, width: 100}}
            />
        </View>

    )
};

const styles = StyleSheet.create({

});

export {Input};