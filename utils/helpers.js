import { AsyncStorage } from "react-native";

export const DECKS_STORAGE_KEY = 'MobileFlashCards:decks';

const initialState = {
    decks: {
        React: {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ]
        },
        JavaScript: {
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        }
    }
};

export function getDecks() {
        return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
        if(!results) {
            AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialState.decks)).then(() => {
                return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(JSON.parse);
            });

        } else {
            return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(JSON.parse);
        }
    });

}

export function saveDeckTitle(title) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: {
            title,
            questions: []
        }
    }))
}

export function addCardToDeck({title, card}) {
    const decks = AsyncStorage.getItem(DECKS_STORAGE_KEY).then(decks => decks);
    decks[title].questions.push(card);
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
}

