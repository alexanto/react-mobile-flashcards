import React, { Component } from 'react';
import { Text, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        height: '100%',
        paddingLeft: 20,
        paddingRight: 20
    },
    question: {
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 80
    },
    input: {
        width: '100%',
        height: 40,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#000',
        borderStyle: 'solid',
        marginTop: 60,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 18
    },
    submit: {
        backgroundColor: '#000',
        marginTop: 60,
        borderRadius: 4,
        width: 250,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitText: {
        color: '#fff'
    }
});

class NewDeckView extends Component {
    constructor() {
        super();
        this.state = {
           deckTitle: ''
        };
    }

    handleChange = (e) => {
        this.setState({deckTitle: e});
    };

    handleSubmit = () => {
        //TODO
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
                <Text style={styles.question}>What is the title of your new deck?</Text>
                <TextInput style={styles.input} placeholder='Deck Title' onChangeText={this.handleChange}></TextInput>
                <TouchableOpacity style={styles.submit} activeOpacity={0.6} onPress={this.handleSubmit}>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

export default NewDeckView;