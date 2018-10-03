import { GET_DECKS } from "../actions/Actions";

const initialState = {
    decks: {
        React: {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ]
        },
        JavaScript: {
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        }
    }
};

export default (state = initialState, action) => {
    const { type, decks } = action;

    switch(type) {
        case GET_DECKS:
            return {...state, decks};
        default:
            return state;
    }
}