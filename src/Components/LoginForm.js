import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Card, CardSection, Input} from "./Common";
import firebase from 'firebase';

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    };
    onButtonPress = () => {
        const {email, password} = this.state
        firebase.auth.signInWithEmailAndPassword(email, password).then(() => {

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

                <CardSection>
                    <Button onPress={this.onButtonPress}>
                        Log In/Sign Up
                    </Button>
                </CardSection>
            </Card>
        )
    }
};

const styles = StyleSheet.create({});

export default LoginForm;