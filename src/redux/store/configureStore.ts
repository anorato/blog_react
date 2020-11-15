import {applyMiddleware, combineReducers, createStore} from "redux";
import postsReducer from "../reducers/postsReducer";
import createSagaMiddleware from 'redux-saga';

import {createLogger} from "redux-logger/src";
import routeSaga from "../sagas/routeSaga";

const middlewares = [createLogger()];

export default () => {
    const sagaMiddleware = createSagaMiddleware({});
    middlewares.push(sagaMiddleware);

    const store = createStore(
        combineReducers(
            {
                posts: postsReducer,
            },
        ), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(...middlewares)
    );

    sagaMiddleware.run(routeSaga);

    return store;
}

