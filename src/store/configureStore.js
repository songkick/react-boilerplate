import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import loggerMiddleware from 'redux-logger';
import reducers from '../reducers';
import { routerStateReducer, reduxReactRouter } from 'redux-react-router';
import { devTools } from 'redux-devtools';
import routes from '../routes';
import createHistory from 'history/lib/createBrowserHistory';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {

    const store = compose(
        applyMiddleware(
          loggerMiddleware(),
          thunk
        ),
        reduxReactRouter({
            routes,
            createHistory
        }),
        devTools()
    )(createStore)(reducers);

    if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
