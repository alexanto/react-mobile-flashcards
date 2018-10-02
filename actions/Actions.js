import * as helpers from '../utils/helpers';

export const GET_DECKS = 'GET_DECKS';

export function getDecks() {
    return (dispatch) => {
        return helpers.getDecks().then(decks => {
            dispatch({
                type: GET_DECKS,
                decks
            });
        });
    }

}