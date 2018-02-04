import { createStore, combineReducers } from 'redux';
import sportsReducer from '../reducers/sports';
import mySportsReducer from '../reducers/mySports';
import filtersReducer from '../reducers/filters';
import getVisibleSports from '../selectors/sports';

export default () => {
    const store = createStore(
        combineReducers({
            sports: sportsReducer,
            mySports: mySportsReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};

