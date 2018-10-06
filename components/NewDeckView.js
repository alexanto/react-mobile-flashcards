import React, { Component } from 'react';
import { Text, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addDeck } from "../actions/Actions";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1
    },
    question: {
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 80
    },
    input: {
        alignSelf: 'center',
        width: 300,
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
        alignSelf: 'center',
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
        const {deckTitle} = this.state;
        this.props.addDeck(deckTitle);
        setTimeout(() => {
            this.props.navigation.navigate('IndividualDeckView', {deckTitle});
        }, 200);
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior={'position'} enabled>
                <Text style={styles.question}>What is the title of your new deck?</Text>
                <TextInput style={styles.input} placeholder='Deck Title' onChangeText={this.handleChange}></TextInput>
                <TouchableOpacity style={styles.submit} activeOpacity={0.6} onPress={this.handleSubmit}>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

export default connect(
    (state) => ({}),
    (dispatch) => bindActionCreators({addDeck}, dispatch)
)(NewDeckView);