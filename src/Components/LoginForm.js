import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button, Card, CardSection, Input} from "./Common";
import firebase from 'firebase';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    };
    onButtonPress = () => {
        const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {

        }).catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {

            }).catch((error) => {
                this.setState({error: error.message})
            })
        });
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email:"
                        value={this.state.email}
                        placeholder="example@example.com"
                        onChangeText={text => this.setState({email: text})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry={true}
                        label="Password:"
                        value={this.state.password}
                        placeholder="*********"
                        onChangeText={text => this.setState({password: text})}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    <Button onPress={this.onButtonPress()}>
                        Log In/Sign Up
                    </Button>
                </CardSection>
            </Card>
        )
    }
};

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});

export default LoginForm;