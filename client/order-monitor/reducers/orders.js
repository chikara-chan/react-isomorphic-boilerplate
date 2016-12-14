import { GET_ORDER, SEARCH } from '../constants/ActionTypes';

const initialState = [{
    id: 1,
    text: 'Use Flux'
}, {
    id: 2,
    text: 'Use Flux'
}, {
    id: 3,
    text: 'Use Flux'
}];

export default function orders(state = initialState, action) {
    switch (action.type) {
        case GET_ORDER:
            return action.orders;
        case SEARCH:
            return action.orders;
        default:
            return state;
    }
};
