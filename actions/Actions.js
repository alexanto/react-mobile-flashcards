import * as helpers from '../utils/helpers';

export const LOAD_DECKS = 'LOAD_DECKS';
export const SAVE_QUIZ_ANSWER = 'SAVE_QUIZ_ANSWER';
export const CLEAR_QUIZ_ANSWERS = 'CLEAR_QUIZ_ANSWERS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_QUESTION = 'ADD_QUESTION';

export function loadDecks() {
    return (dispatch) => {
        return helpers.getDecks().then(decks => {
            dispatch({
                type: LOAD_DECKS,
                decks
            });
        });
    }
}

export function addDeck(deckTitle, navigation) {
    return (dispatch) => {
        return helpers.saveDeckTitle(deckTitle).then(result => {
            dispatch({
                type: ADD_DECK,
                result
            });
            navigation.navigate('IndividualDeckView', {deckTitle});
        });
    }
}

export function addQuestion(deckTitle, card) {
    return (dispatch) => {
        return helpers.addCardToDeck(deckTitle, card).then(() => {
            dispatch({
                type: ADD_QUESTION,
                deckTitle,
                card
            });
        });
    }
}

export function saveQuizAnswer(isCorrect) {
    return {
        type: SAVE_QUIZ_ANSWER,
        isCorrect
    }
}

export function clearQuizAnswer() {
    return {
        type: CLEAR_QUIZ_ANSWERS
    }
}

