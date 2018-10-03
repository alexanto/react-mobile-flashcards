import React, { Component } from 'react'
import { ScrollView, Text, View } from "react-native";
import { connect } from 'react-redux'
import { getDecks } from "../selectors/Selectors";

class DeckListView extends Component {

    render() {
          console.log(this.props.decks);
      return (
            <ScrollView style={{flex: 1}}>
                {this.props.decks.map(deck =>
                        <View key={deck.title}>
                            <Text>{deck.title}</Text>
                            <Text>{deck.questions.length} questions</Text>
                        </View>
                )}

            </ScrollView>
        )
    }
}

export default connect(
    (state) => ({
        decks: getDecks(state)
    })
)(DeckListView);

