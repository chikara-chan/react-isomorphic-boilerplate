import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

export default function configureStore(preloadedState?:any) {
    const store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk)
    )

    return store
}
