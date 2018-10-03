import React, { Component } from 'react'
import { ScrollView, Text, View } from "react-native";
import { connect } from 'react-redux'
import { getDecks } from "../selectors/Selectors";
import { bindActionCreators } from "redux";
import { loadDecks } from "../actions/Actions";

class DeckListView extends Component {

    componentDidMount() {
       this.props.loadDecks();
    }

    render() {
          console.log('decks',this.props.decks);
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
    }),
    (dispatch) => bindActionCreators({loadDecks}, dispatch)
)(DeckListView);

