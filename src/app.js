import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addSport } from './actions/sports';
import { addMySport } from './actions/mySports';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import sports from '../data/parent_sports';
import childSport from '../data/child_sports';


const store = configureStore();
sports.forEach((sport) => {
    store.dispatch(addSport(sport));
})

store.dispatch(addMySport(childSport));


ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('app')
);


