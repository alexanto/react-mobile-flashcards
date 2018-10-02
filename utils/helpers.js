import { AsyncStorage } from "react-native";

const DECKS_STORAGE_KEY = 'MobileFlashCards:decks';

export function getDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(decks => decks)
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

