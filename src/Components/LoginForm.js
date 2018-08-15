import React, {Component} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Button, Card, CardSection} from "./Common";

class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput style={{height: 20, width: 100}}/>
                </CardSection>

                <CardSection>
                    <TextInput style={{height: 20, width: 100}}/>
                </CardSection>

                <CardSection>
                    <Button>
                        Log In/Sign Up
                    </Button>
                </CardSection>
            </Card>
        )
    }
};

const styles = StyleSheet.create({});

export default LoginForm;