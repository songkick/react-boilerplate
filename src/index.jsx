import React from 'react';
import Router, {
    Route,
    DefaultRoute,
    RouteHandler
} from 'react-router';

import { Welcome } from './components';

const routes = (
    <Route handler={RouteHandler}>
        <DefaultRoute handler={Welcome}/>
    </Route>
);

Router.run(routes, Router.HistoryLocation, (Root) => {
    React.render(<Root/>, document.body);
    //TODO ga('send', 'pageview', options);
});
