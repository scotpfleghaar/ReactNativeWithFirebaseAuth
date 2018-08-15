import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Card, CardSection, Input} from "./Common";

class LoginForm extends Component {
    state = {
        email: ''
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

                {/*<CardSection>*/}
                    {/*<Input />*/}
                {/*</CardSection>*/}

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