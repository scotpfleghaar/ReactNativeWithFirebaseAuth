import React, {Component} from 'react';
import firebase from 'firebase';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from './src/Components/Common';
import LoginForm from './src/Components/LoginForm';


type Props = {};
export default class App extends Component<Props> {
    state = {
        isLoggedIn: false
    };

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


        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({isLoggedIn: true})
            } else {
                this.setState({isLoggedIn: false})
            }
        })
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm/>
            </View>
        );
    }
}

const styles = StyleSheet.create({});
