import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { getDeck } from "../selectors/Selectors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 42,
        fontWeight: 'bold',
        marginTop: 150,
        marginBottom: 20
    },
    count: {
        fontSize: 32
    },
    button: {
        borderRadius: 4,
        width: 250,
        height: 60,
        backgroundColor: '#e53224',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    buttonText: {
        fontSize: 24    ,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttons: {
        marginTop: 'auto',
        marginBottom: 60
    },
    disabled: {
        opacity: 0.6
    }
});

class IndividualDeckView extends Component {
    static navigationOptions = ({ navigation }) => {
        const deckTitle = navigation.state.params.deckTitle;
        return {
            title: deckTitle,
            headerStyle: {
                backgroundColor: '#000'
            },
            headerTintColor: '#fff'
        }
    };

    render() {
        const {navigation} = this.props;
        const deckTitle = navigation.state.params.deckTitle;
        const deck = this.props.deck(deckTitle);
        const length = deck.questions.length;
        const disabled = length === 0;

        return (
            <View style={styles.container}>
                    <Text style={styles.title}>{deckTitle}</Text>
                    <Text style={styles.count}>{length} cards</Text>
                <View style={styles.buttons}>
                    <TouchableHighlight style={styles.button} underlayColor='#d4271b'>
                        <Text style={styles.buttonText}>
                            Add Card
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight disabled={disabled}  style={disabled? [styles.button, styles.disabled] : styles.button} underlayColor='#d4271b' onPress={() => navigation.navigate('QuizView', {index: 0, questionCount:  length, title: deckTitle})}>
                        <Text style={styles.buttonText}>Start Quiz</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default connect(
    (state) => ({
        deck: getDeck(state)
    })
)(IndividualDeckView);