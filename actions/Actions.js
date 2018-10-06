import * as helpers from '../utils/helpers';

export const LOAD_DECKS = 'LOAD_DECKS';
export const SAVE_QUIZ_ANSWER = 'SAVE_QUIZ_ANSWER';
export const CLEAR_QUIZ_ANSWERS = 'CLEAR_QUIZ_ANSWERS';
export const ADD_DECK = 'ADD_DECK';

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

export function addDeck(title) {
    return (dispatch) => {
        return helpers.saveDeckTitle(title).then(result => {
            dispatch({
                type: ADD_DECK,
                result
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

