import React from 'react';
import { Link } from 'react-router-dom';


function HeaderContact() {
    return (
        <div id="pre_header" className="container">
            <div className="row margin-top-10 visible-lg">
                <div className="col-md-6">
                    <p>
                        <strong> تلفن تماس :</strong> &nbsp; 57-72-938-0936
                    </p>
                </div>
                <div className="col-md-6 text-right">
                    <p>
                        {/* <strong> ایمیل :</strong> info@reservina.ir  */}
                    </p>
                </div>
            </div>
        </div>
    );
}

function HeaderTitle() {
    return (
        <div id="header" className="container">
            <div className="row">
                <div className="logo">
                    <a href="/" title="">
                        <img src="img/logo.png" alt="Logo" />
                    </a>
                </div>
            </div>
        </div>
    );
}

function HeaderNav() {
    return (
        <div id="hornav" className="container no-padding">
            <div className="row background-white">
                <div className="col-md-12 no-padding">
                    <div className="pull-right navigation-bar">
                        <div className="input-group search">
                            <input id="nav-input-search" type="text" className="form-control" placeholder="جستجوی آرایشگاه" />
                            <span className="input-group-btn">
                                <button id="nav-button-search" className="btn btn-default" type="button"><i className="fa fa-search"></i> </button>
                            </span>

                        </div>
                        <ul id="hornavmenu" className="nav navbar-nav">
                            <li>
                                <Link to={`blog`} className="fa-pencil">&nbsp; وبلاگ </Link>
                            </li>
                            {/* <li className="visible-lg">
                                               <a href="contact.html" className="fa-comment"> ارتباط با ما </a>
                                           </li>
                                           <li>
                                               <a href="index.html" className="fa-th-list"> وبلاگ  صفحه اصلی </a>
                                           </li> */}

                            <li>
                                <Link to={`/`} className="fa-home"> صفحه اصلی </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}


class Header extends React.Component {
    render() {
        return (
            <div>
                <HeaderContact />
                <div className="primary-container-group">
                    <div className="primary-container-background">
                        <div className="primary-container"></div>
                        <div className="clearfix" />
                    </div>
                    <div className="primary-container">
                        <HeaderTitle />
                        <HeaderNav />

                        <div id="content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
