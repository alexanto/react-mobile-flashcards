import {createSelector} from 'reselect';

const decksSelector = state => state.decks;

export const getDecks = createSelector(
    decksSelector,
    state => Object.values(state)
);

export const getDeck = createSelector(
    state => state.decks,
    decks => _.memoize(
        title => decks.filter(question => question.title === title)
    )
);

export const getQuestion = createSelector(
    state => state.decks,
    decks =>
        (title, index) => {
            return decks[title].questions[index]
        }
);

