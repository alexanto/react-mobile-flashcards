import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { getQuestion } from "../selectors/Selectors";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        height: '100%',
        paddingLeft: 10,
        paddingRight: 10
    },
    question: {
        fontSize: 42,
        marginTop: 100,
        textAlign: 'center'
    },
    progress: {
        fontSize: 24,
        marginTop: 10,
        marginLeft: 10,
        alignSelf: 'flex-start'
    },
    answer: {
        color: '#ff0000',
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold'
    },
    buttons: {
        marginTop: 'auto',
        marginBottom: 60
    },
    button: {
        borderRadius: 4,
        width: 250,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    correct: {
        backgroundColor: '#33cc66',
    },
    incorrect: {
        backgroundColor: '#e53224',
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    },
    percentage: {
        fontSize: 38,
        fontWeight: 'bold',
        marginTop: 10
    },
    results: {
        textAlign: 'center',
        fontSize: 32,
        marginTop: 150
    }
});

class QuizView extends Component {
    static navigationOptions = ({ navigation }) => {
        const deck = navigation.state.params.deck;
        return {
            title: 'Quiz',
            headerStyle: {
                backgroundColor: '#000'
            },
            headerTintColor: '#fff'
        }
    };
    markIfCorrect = (isCorrect) => {
        const {navigation} = this.props;
        const {index, questionCount, title} = navigation.state.params;
        navigation.navigate('QuizView', {index: index + 1, questionCount, title});
    };

    render() {
        const {navigation, questionByIndex} = this.props;
        const index = navigation.state.params.index;
        const questionCount = navigation.state.params.questionCount;
        const deckTitle = navigation.state.params.title;
        let quizContent;
        const question = questionByIndex(deckTitle, index);

        {
            if (index === questionCount) {
                quizContent =
                    <View style={styles.container}>
                        <Text style={styles.results}>X correct out of Y questions</Text>
                        <Text style={styles.percentage}>80%</Text>
                        <View style={styles.buttons}>
                            <TouchableHighlight style={[styles.button, styles.incorrect]} underlayColor='#336633' onPress={() => navigation.navigate('QuizView', {index: 0, questionCount, title: deckTitle})}>
                                <Text style={styles.buttonText}>Start Quiz Over</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={[styles.button, styles.incorrect]} underlayColor='#336633' onPress={() => navigation.goBack()}>
                                <Text style={styles.buttonText}>Back to Deck</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
            } else {
                quizContent =
                    <View>
                        <View style={styles.container}>
                            <Text style={styles.progress}>{index + 1}/{questionCount}</Text>
                            <Text style={styles.question}>{question.question}</Text>
                            <TouchableOpacity onPress={() => {}}>
                                <Text style={styles.answer}>Answer</Text>
                            </TouchableOpacity>
                            <View style={styles.buttons}>
                                <TouchableHighlight style={[styles.button, styles.correct]} underlayColor='#336633' onPress={() => this.markIfCorrect(true)}>
                                    <Text style={styles.buttonText}>Correct</Text>
                                </TouchableHighlight>
                                <TouchableHighlight  style={[styles.button, styles.incorrect]} underlayColor='#d4271b'  onPress={() => this.markIfCorrect(false)}>
                                    <Text style={styles.buttonText}>Incorrect</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View>

                        </View>
                    </View>
            }
        }

        return (
            <View>
                {quizContent}
            </View>
        )
    }
}

export default connect(
    (state) => ({
        questionByIndex: getQuestion(state)
    })
) (QuizView);