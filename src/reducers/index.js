import { combineReducers } from 'redux';
import counter from './counter';
import { routerStateReducer } from 'redux-react-router';

const rootReducer = combineReducers({
    router: routerStateReducer,
    counter
});

export default rootReducer;
