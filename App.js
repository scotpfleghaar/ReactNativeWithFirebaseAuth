import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from './src/Components/Common';


type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({});
