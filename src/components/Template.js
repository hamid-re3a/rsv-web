import React from 'react';
import Footer from './Footer';
import Header from './Header';


class Template extends React.Component {
    render() {
        return (
            <div id="body_bg">
                <Header>
                    {this.props.children}
                </Header>
                <Footer/>
            </div>
        );
    }
}
export default Template;

