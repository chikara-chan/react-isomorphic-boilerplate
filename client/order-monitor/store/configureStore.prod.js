import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk)
    );

    return store;
};