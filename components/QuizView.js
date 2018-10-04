import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
});

class QuizView extends Component {
    render() {

        const {navigation} = this.props;
        const index = navigation.state.params.index;
        const questionCount = navigation.state.params.questionCount;
        let quizContent;

        {
            if (index === questionCount) {
                quizContent =
                    <View>
                        <Text>score view</Text>
                        <TouchableHighlight  onPress={() => navigation.navigate('QuizView', {index: 0, questionCount})}>
                            <Text>Start Quiz Over</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => navigation.goBack()}>
                            <Text>Back to Deck</Text>
                        </TouchableHighlight>
                    </View>
            } else {
                quizContent =
                    <View>
                        <Text>quizview works {index + 1} question</Text>
                        <TouchableHighlight  onPress={() => navigation.navigate('QuizView', {index: index + 1, questionCount})}>
                            <Text>Next question</Text>
                        </TouchableHighlight>
                        <Text>{index}/{questionCount}</Text>
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

export default QuizView;