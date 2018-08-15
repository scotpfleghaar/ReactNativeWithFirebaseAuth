import React, {Component} from 'react';
import firebase from 'firebase';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from './src/Components/Common';


type Props = {};
export default class App extends Component<Props> {
    componentWillMount() {
        // Initialize Firebase
        firebase.initializeApp({
            apiKey: 'AIzaSyAaeRLwgdt5dy9TV2RIzF4xTr402fJ-94c',
            authDomain: "reactauthenticationapp.firebaseapp.com",
            databaseURL: "https://reactauthenticationapp.firebaseio.com",
            projectId: "reactauthenticationapp",
            storageBucket: "reactauthenticationapp.appspot.com",
            messagingSenderId: "908900560010"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({});
