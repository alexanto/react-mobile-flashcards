import React, { Component } from 'react'
import { ScrollView } from "react-native";
import { connect } from 'react-redux'

class DeckListView extends Component {

    render() {
      return (
            <ScrollView>

            </ScrollView>
        )
    }
}

export default connect(
    (state) => ({
        decks: state.decks
    })
)(DeckListView);

