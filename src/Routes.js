import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';

function Logout () {
    localStorage.removeItem('blogToken');
    console.log("Entre a logout")
	return <Redirect to="/login" />
}

function Routes() {

    return(
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
        </>
    );
}

export default Routes;
