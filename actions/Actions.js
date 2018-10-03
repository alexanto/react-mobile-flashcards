import * as helpers from '../utils/helpers';

export const LOAD_DECKS = 'LOAD_DECKS';

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