import { LOAD_DECKS } from "../actions/Actions";

const initialState = {
    decks: {}
};

export default (state = initialState, action) => {
    const { type, decks } = action;

    switch(type) {
        case LOAD_DECKS:
            return {...state, decks};
        default:
            return state;
    }
}