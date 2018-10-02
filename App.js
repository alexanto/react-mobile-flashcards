import React, { Component } from 'react';
import DeckListView from "./components/DeckListView";
import { createStackNavigator } from "react-navigation";
import Provider from "react-redux/es/components/Provider";
import { createStore } from "redux";
import { View } from "react-native";
import reducer from './reducers/Reducer';

const MainNav = createStackNavigator({
    DeckListView: {
        screen: DeckListView,
        navigationOptions: {
            title: 'Decks',
            headerStyle: {
                backgroundColor: '#000'
            },
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
});

class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View style={{flex: 1}} >
                    <MainNav></MainNav>
                </View>
            </Provider>
        )
    }
}

export default App;
