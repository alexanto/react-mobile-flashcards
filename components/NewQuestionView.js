import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, StyleSheet, View } from "react-native";
import { bindActionCreators } from "redux";
import { addQuestion } from "../actions/Actions";
import connect from "react-redux/es/connect/connect";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1
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
        marginTop: 50,
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
    }
});

class NewQuestionView extends Component {
    constructor() {
        super();
        this.state = {
            answer: '',
            question: ''
        }
    }
    static navigationOptions = () => {

        return {
            title: 'Add Card',
            headerStyle: {
                backgroundColor: '#000'
            },
            headerTintColor: '#fff'
        }
    };

    handleChange = (text, name) => {
        this.setState({
            [name]: text
        });
    };

    handleSubmit = () => {
        const {navigation, addQuestion} = this.props;
        const {question, answer} = this.state;
        const deckTitle = navigation.state.params.deckTitle;
        addQuestion(deckTitle, {question, answer});
        this.answerInput.clear();
        this.questionInput.clear();
        this.setState({
           question: '',
           answer: ''
        });
    };

    render() {

        const {question, answer} = this.state;
        const disabled = (question.length === 0) || (answer.length === 0);

        return (
            <View style={styles.container}>
                <TextInput ref={input => { this.answerInput = input }} style={styles.input} placeholder='Question' onChangeText={(e) => this.handleChange(e, 'question')}></TextInput>
                <TextInput ref={input => { this.questionInput = input }} style={styles.input} placeholder='Answer' onChangeText={(e) => this.handleChange(e, 'answer')}></TextInput>
                <TouchableOpacity disabled={disabled}  style={disabled? [styles.submit, styles.disabled] : styles.submit} onPress={this.handleSubmit}>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect(
    (state) => ({}),
    (dispatch) => bindActionCreators({addQuestion}, dispatch)
) (NewQuestionView);