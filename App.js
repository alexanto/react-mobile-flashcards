import React, { Component } from 'react';
import DeckListView from "./components/DeckListView";
import { createMaterialTopTabNavigator, createStackNavigator } from "react-navigation";
import Provider from "react-redux/es/components/Provider";
import { applyMiddleware, createStore } from "redux";
import { View } from "react-native";
import reducer from './reducers/Reducer';
import thunk from 'redux-thunk';
import IndividualDeckView from "./components/IndividualDeckView";
import QuizView from "./components/QuizView";
import NewDeckView from "./components/NewDeckView";
import { Constants } from 'expo';
import NewQuestionView from "./components/NewQuestionView";
import { setLocalNotification } from "./utils/helpers";

const Tabs = createMaterialTopTabNavigator(
    {
        DeckListView: {
            screen: DeckListView,
            navigationOptions: {
                tabBarLabel: 'Decks'
            }
        },
        NewDeckView: {
            screen: NewDeckView,
            navigationOptions: {
                tabBarLabel: 'New Deck'
            }
        }
    },
    {
        tabBarOptions : {
            inactiveTintColor: '#fff',
            style: {
                backgroundColor: '#000',
                paddingTop: Constants.statusBarHeight,
            },
            indicatorStyle: {
                backgroundColor: '#ff0000'
            }
        }
    }
);

const MainNav = createStackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            header: null

        }
    },
    IndividualDeckView: {
        screen: IndividualDeckView
    },
    QuizView: {
        screen: QuizView
    },
    NewQuestionView: {
        screen: NewQuestionView
    }
});

const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {

    componentDidMount() {
        setLocalNotification()
    }

    render() {
        return (
            <Provider store={store}>
                <View style={{flex: 1}} >
                    <MainNav></MainNav>
                </View>
            </Provider>
        )
    }
}

export default App;
