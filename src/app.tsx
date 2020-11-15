import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom';
// @ts-ignore
import {Provider} from 'react-redux'
import configureStore from "./redux/store/configureStore";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
