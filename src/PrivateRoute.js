import React, { Component } from 'react';
import PropTyps from 'prop-types';
import {Redirect , Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
    static propTypes = {
        component : PropTyps.func.isRequired,
        path : PropTyps.string.isRequired
    };

    render(){
        const { component : Component, ...restProps } = this.props;
        const isAuthenticated = this.props.user.isAuthenticated;
        return <Route {...restProps} render={(_props) => (
            isAuthenticated ? (
                <Component {...restProps}  {..._props} />
            ) : (
                <Redirect to={{pathname : '/login', state : {from: _props.location}}}/>
            )
        )} />
    }
}

const mapStateToProps = (state) => {
    let { user } = state;
    return { user };
}
export default withRouter(connect(mapStateToProps, {})(PrivateRoute));