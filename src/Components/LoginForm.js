import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Card, CardSection} from "./Common";

class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection/>
                <CardSection/>
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