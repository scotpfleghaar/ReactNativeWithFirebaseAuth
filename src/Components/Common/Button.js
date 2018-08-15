import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onButtonPress} style={styles.button}>
            <Text style={styles.text}>{props.children}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        paddingTop: 10,
        paddingBottom: 10,
    },
    text: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
    }
});

export {Button};