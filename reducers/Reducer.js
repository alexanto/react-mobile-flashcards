import { ADD_DECK, CLEAR_QUIZ_ANSWERS, LOAD_DECKS, SAVE_QUIZ_ANSWER } from "../actions/Actions";

const initialState = {
    decks: {},
    correctAnswers: 0
};

export default (state = initialState, action) => {
    const { type, decks, isCorrect, result } = action;

    switch(type) {
        case LOAD_DECKS:
            return {...state, decks};
        case SAVE_QUIZ_ANSWER:
            return isCorrect ? {...state, correctAnswers: state.correctAnswers + 1} : state;
        case CLEAR_QUIZ_ANSWERS:
            return {...state, correctAnswers: 0};
        case ADD_DECK:
            return {...state, decks: result};
        default:
            return state;
    }
}