import React from 'react';
import { connect } from 'react-redux';
import { delUser } from '../redux/action';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            showdropdown: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            showdropdown: !this.state.showdropdown
        });
    }

    renderLogin() {
        const showdropdownClass = this.state.showdropdown ? "show-dropdown" : "";
        const { auth: isAuthenticated } = this.props;

        if (!isAuthenticated)
            return <Link to="/login"><button type="button" className="btn btn-success">ورود</button></Link>
        else
            return <div className="header-button">
                <div className="account-wrap">
                    <div className={"account-item clearfix js-item-menu " + showdropdownClass}>

                        <div className="content hidden-sm ">
                            <a className="js-acc-btn" onClick={this.toggle}>{this.props.user.username}</a>
                        </div>
                        <div className="account-dropdown js-dropdown">
                            <div className="info clearfix">

                                <div className="content">
                                    <h5 className="name">
                                        <a ></a>john doe
                                </h5>
                                    <span className="email">johndoe@example.com</span>
                                </div>
                            </div>
                            <div className="account-dropdown__body">
                                <div className="account-dropdown__item">
                                    <i className="zmdi zmdi-account"></i>Account
                            </div>
                                <div className="account-dropdown__item">
                                    <i className="zmdi zmdi-settings"></i>Setting
                            </div>
                                <div className="account-dropdown__item">
                                    <i className="zmdi zmdi-money-box"></i>Billing
                            </div>
                            </div>
                            <div className="account-dropdown__footer">
                                <a onClick={this.logMeOut.bind(this)}>
                                    <i className="zmdi zmdi-power"></i>Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>;

    }
    logMeOut() {
        this.props.delUser();
    }

    render() {
        return (<header className="header-desktop">
            <div className="section__content section__content--p30">
                <div className="container-fluid">
                    <div className="header-wrap">
                        <form className="form-header" action="" method="POST">
                            <input className="au-input au-input--xl" type="text" name="search" placeholder="جستجو ..." />
                            <button className="au-btn--submit" type="submit">
                                <i className="zmdi zmdi-search"></i>
                            </button>
                        </form>

                        {this.renderLogin()}
                    </div>
                </div>
            </div>
        </header>);
    }
}

const mapStateToProps = (state) => {
    let { user } = state;
    return { user };
}
export default connect(mapStateToProps, { delUser })(Header);

