import React from 'react';
import {connect} from 'react-redux';
import {setWelcome} from '../actions';

export function App(props) {
    return (
        <div>
            <button onClick={() => props.dispatch(setWelcome('Welcome'))}>
                Click Here
            </button>
            <h1>{props.welcome}</h1>
        </div>
    );
};

App.defaultProps ={
    welcome: ''
};

export const mapStateToProps = state => ({
    welcome: state.welcome
});

export default connect(mapStateToProps)(App);