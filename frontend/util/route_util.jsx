import React from 'react';
import { Route, HashRouter, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? <Component {...props} /> : <Redirect to="/" />
        }
    />
);

const Node = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        // render={props => {
        //     return (loggedIn ? <Component {...props} /> : <Redirect to="/" />)
        // }}
        render={props => {
            return (<Component {...props} />)
        }}
    />
);


const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Auth)
);

export const NodeRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Node)
);



