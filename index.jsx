import React from 'react';
import Router from 'react-router';
import App from './components/App.jsx';
import Welcome from './components/Welcome.jsx';

const { Route, DefaultRoute } = Router;

var routes = (
    <Route handler={App}>
        <DefaultRoute handler={Welcome}/>
    </Route>
);

Router.run(routes, Router.HistoryLocation, (Root) => {
    React.render(<Root/>, document.querySelector('#app'));
    //ga('send', 'pageview', options);
});
