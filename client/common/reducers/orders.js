import { GET_ORDER, SEARCH } from '../constants/ActionTypes';

const initialState = [{
    id: 1,
    text: 'Use Redux'
}, {
    id: 2,
    text: 'Use Redux'
}, {
    id: 3,
    text: 'Use Redux'
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
