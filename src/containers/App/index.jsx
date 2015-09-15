import React from 'react';
import { RouteHandler } from 'react-router';
import { connect } from 'react-redux';

@connect(({counter}) => ({ counter }))
export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        const { children, counter } = this.props;
        return (
            <section>
                <h1>App - counter { counter }</h1>
                {children}
            </section>
        );
    }
}
