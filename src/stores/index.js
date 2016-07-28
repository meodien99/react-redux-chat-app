import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

// import root reducer
import rootReducer from '../reducers/rootReducer';

// create middleware
const loggerMiddleware = createLogger();


export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware
            ),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ),
    );
}