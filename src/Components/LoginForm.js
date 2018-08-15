import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Card, CardSection, Input} from "./Common";

class LoginForm extends Component {
    state = {
        text: ''
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email:"
                        value={this.state.text}
                        onChangeText={text => this.setState({text})}
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