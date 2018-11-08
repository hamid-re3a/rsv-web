
import React, { Component } from 'react';
import Template from '../../Template';
class Introduction extends Component {
    render() {
        return (
            <Template logoutfunc={this.props.logoutfunc.bind(this)}>
                Introduction
            </Template>
        );
    }
}

export default Introduction;


