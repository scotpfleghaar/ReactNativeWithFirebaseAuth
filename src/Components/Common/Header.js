// Import Libraries for making a component
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// Make a component
const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{props.headerText}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    //Styles are camelCased rather than dash-cased
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fcfcfc',
        paddingTop: 30,
        paddingBottom: 10,
        height: 70,
        shadowColor: '#ccc',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    header: {
        fontSize: 30
    }
});

// Make component available to other parts of the app
export {Header};