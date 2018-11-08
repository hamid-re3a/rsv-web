import React, { Component } from 'react';
import PropTyps from 'prop-types';
import {Redirect , Route} from 'react-router-dom';

class PublicRoute extends Component {
    static propTypes = {
        component : PropTyps.func.isRequired,
        path : PropTyps.string.isRequired
    };

    render(){
        const { component : Component , auth : isAuthenticated , ...restProps } = this.props;
        return <Route {...restProps} render={(props) => (
            !isAuthenticated ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{pathname : '/', state : {from :props.location}}}/>
            )
        )} />
    }
}


export default PublicRoute;