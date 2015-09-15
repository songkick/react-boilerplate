import 'babel-core/polyfill';
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { Route, IndexRoute } from 'react-router';
import { ReduxRouter } from 'redux-react-router';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import configureStore from './store/configureStore';
const store = configureStore();

class Root extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    {() => <ReduxRouter />}
                </Provider>
                <DebugPanel top right bottom>
                    <DevTools store={store} monitor={LogMonitor} />
                </DebugPanel>
            </div>
        );
    }
}

React.render(<Root />, document.getElementById('app'));
