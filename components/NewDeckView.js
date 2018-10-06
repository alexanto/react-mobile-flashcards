import React, { Component } from 'react';
import {
    Text,
    KeyboardAvoidingView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    TouchableHighlight
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addDeck } from "../actions/Actions";
import { getDeck, getDecks } from "../selectors/Selectors";

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
    disabled: {
      opacity: 0.6
    },
    submitText: {
        color: '#fff'
    },
    duplicate: {
        color: '#ff0000',
        fontSize: 22,
        alignSelf: 'center',
        marginTop: 20
    }
});

class NewDeckView extends Component {
    constructor() {
        super();
        this.state = {
           deckTitle: '',
            duplicate: false
        };
    }

    handleChange = (e) => {
        this.checkDuplicate(e);
        this.setState({deckTitle: e});
    };

    handleSubmit = () => {
        const {deckTitle} = this.state;
        const duplicate = this.state.duplicate;
        if(!duplicate) {
            this.props.addDeck(deckTitle, this.props.navigation);
        }
    };

    checkDuplicate = (deckTitle) => {
        const exists = this.props.deck(deckTitle);
        if(exists) {
            this.setState({
               duplicate: true
            });
        } else {
            this.setState({
                duplicate: false
            })
        }
    };

    render() {
        const {duplicate} = this.state;
        const disabled = this.state.deckTitle.length === 0 || duplicate;

        return (
            <KeyboardAvoidingView style={styles.container} behavior={'position'} enabled>
                <Text style={styles.question}>What is the title of your new deck?</Text>
                <TextInput style={styles.input} placeholder='Deck Title' onChangeText={this.handleChange}></TextInput>
                {
                    (duplicate) &&
                        <Text style={styles.duplicate}>Title already exists</Text>
                }
                <TouchableOpacity  disabled={disabled}  style={disabled? [styles.submit, styles.disabled] : styles.submit} activeOpacity={0.6} onPress={this.handleSubmit}>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

export default connect(
    (state) => ({
        decks: getDecks(state),
        deck: getDeck(state)
    }),
    (dispatch) => bindActionCreators({addDeck}, dispatch)
)(NewDeckView);