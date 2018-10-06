import {createSelector} from 'reselect';

const decksSelector = state => state.decks;

export const getDecks = createSelector(
    decksSelector,
    state => Object.values(state)
);

export const correctAnswerCountSelector = state => state.correctAnswers;

export const getDeck = createSelector(
    state => state.decks,
    decks =>
        title => decks[title]
);

export const getQuestion = createSelector(
    state => state.decks,
    decks =>
        (title, index) => {
            return decks[title].questions[index]
        }
);

