import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterActions from '../../actions/counter';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

class Home extends React.Component {
    render() {
        return (
            <section>
                <h2>Home page</h2>
                <button onClick={this.syncInc}>Sync increment</button>
                <button onClick={this.syncDec}>Sync decrement</button>
                <button onClick={this.async}>Async increment</button>
            </section>
        );
    }

    async = () => {
        this.props.incrementAsync(1000);
    }
    syncDec = () => {
        this.props.decrement();
    }
    syncInc = () => {
        this.props.increment();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
