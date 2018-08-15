import React, {Component} from 'react';
import firebase from 'firebase';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Card, CardSection, Header, Spinner} from './src/Components/Common';
import LoginForm from './src/Components/LoginForm';


type Props = {};
export default class App extends Component<Props> {
    state = {
        isLoggedIn: null
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

    renderContent = () => {
        switch (this.state.isLoggedIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button onButtonPress={() => firebase.auth().signOut()}>Log Out</Button>
                        </CardSection>
                    </Card>
                )
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size="small"/>
        }

    };

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}

            </View>
        );
    }
}

const styles = StyleSheet.create({});
