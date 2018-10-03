import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
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
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttons: {
        marginTop: 'auto',
        marginBottom: 60
    }
});

class IndividualDeckView extends Component {
    static navigationOptions = ({ navigation }) => {
        const deck = navigation.state.params.deck;
        return {
            title: deck.title,
            headerStyle: {
                backgroundColor: '#000'
            },
            headerTintColor: '#fff'
        }
    };
    render() {
        const {navigation} = this.props;
        const deck = navigation.state.params.deck;

        return (
            <View style={styles.container}>
                    <Text style={styles.title}>{deck.title}</Text>
                    <Text style={styles.count}>{deck.questions.length} cards</Text>
                <View style={styles.buttons}>
                    <TouchableHighlight style={styles.button} underlayColor='#d4271b'>
                        <Text style={styles.buttonText}>
                            Add Card
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight  style={styles.button} underlayColor='#d4271b' onPress={() => navigation.navigate('QuizView')}>
                        <Text style={styles.buttonText}>Start Quiz</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default IndividualDeckView;