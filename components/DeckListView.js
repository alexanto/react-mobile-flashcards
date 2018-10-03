import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from 'react-redux'
import { getDecks } from "../selectors/Selectors";
import { bindActionCreators } from "redux";
import { loadDecks } from "../actions/Actions";

const styles = StyleSheet.create({
    deck: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 2,
        borderBottomColor: '#000',
        height: 150,
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    count: {
        fontSize: 16
    }
});

class DeckListView extends Component {

    componentDidMount() {
       this.props.loadDecks();
    }

    render() {
        const {navigation} = this.props;
        return (
            <ScrollView style={{flex: 1}}>
                {this.props.decks.map(deck =>
                    <TouchableOpacity onPress={() => navigation.navigate('IndividualDeckView', {deck})}  style={styles.deck} key={deck.title}>
                            <Text style={styles.title}>{deck.title}</Text>
                            <Text style={styles.count}>{deck.questions.length} questions</Text>

                    </TouchableOpacity>
                )}
            </ScrollView>
        )
    }
}

export default connect(
    (state) => ({
        decks: getDecks(state)
    }),
    (dispatch) => bindActionCreators({loadDecks}, dispatch)
)(DeckListView);

