import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch, HashRouter, withRouter} from 'react-router-dom';
import LoginFormContainer from './sessions/login_form_container';
import SignupFormContainer from './sessions/signup_form_container';
import {AuthRoute, NodeRoute} from '../util/route_util';
import NodeListContainer from './nodes/nodes_list_container';
import Logo from './logo/logo';
const App = () => (
    <div>
        <header>
            <AuthRoute path="/" component={Logo}/>
            <Route path="/" component={GreetingContainer} /> 
        </header> 

        <Switch>
            <NodeRoute forceRefresh={true} path="/nodes/:id" component={NodeListContainer} />
            <NodeRoute path="/" component={NodeListContainer} />
        </Switch>
        
        <AuthRoute path="/api/session" component={LoginFormContainer} />
        <AuthRoute path="/api/users" component={SignupFormContainer} />

    </div>
);

export default App;