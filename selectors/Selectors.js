import {createSelector} from 'reselect';
import * as _ from 'lodash';

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