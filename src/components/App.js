import React from 'react';
import {connect} from 'react-redux';
// import * as actions from '../actions';

export function App(props) {
    return (
        <div>
            <h1>{props.welcome}</h1>
        </div>
    );
};

export const mapStateToProps = state => ({
    welcome: state.welcome
});

export default connect(mapStateToProps)(App);