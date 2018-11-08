import React from 'react';
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';
import Header from './Header';

class Template extends React.Component {
    
    render() {
        const { auth: isAuthenticated } = this.props;
        return (
            <div>
                <div>
                    <div id="body_bg">
                        <div id="pre_header" className="container">
                            <div className="row margin-top-10 visible-lg">
                                <div className="col-md-6">
                                    <p>
                                        <strong> تلفن تماس :</strong> &nbsp;57-72-938-0936 </p>
                                </div>
                                <div className="col-md-6 text-right">
                                    <p>
                                        {/* <strong> ایمیل :</strong> info@reservina.ir  */}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="primary-container-group">
                            <div className="primary-container-background">
                                <div className="primary-container"></div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="primary-container">
                                <div id="header" className="container">
                                    <div className="row">
                                        <div className="logo">
                                            <a href="index.html" title="">
                                                <img src="img/logo.png" alt="Logo" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
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



                                <div id="content">
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                        <div id="base">
                            <div className="container padding-vert-30 margin-top-40">
                                <div className="row">
                                    <div className="col-md-6 margin-bottom-20">
                                        <h3 className="margin-bottom-10">رزروینا</h3>
                                        <ul className="menu">
                                            <li>
                                                <a className="fa-eye" href="">چطور استفاده کنم؟</a>
                                            </li>
                                            <li>
                                                <a className="fa-smile-o" href="">چطور از رزروها مطمئن باشم؟</a>
                                            </li>
                                            <li>
                                                <a className="fa-dollar" href="">آرایشگاهتان را به کاربران نشان دهید.</a>
                                            </li>
                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="col-md-6 margin-bottom-20 ">
                                        <h3 className="margin-bottom-10">اطلاعات تماس</h3>
                                        <p>
                                            <span className="fa-phone"> شماره تلفن : 57-72-938-0936</span>
                                            <br />
                                            <span className="fa-envelope"> ایمیل : </span>
                                            <a href="mailto:info@joomla51.com">info@reservina.ir</a>
                                            <br />

                                        </p>
                                        <h4 className="margin-bottom-10">ما را در شبکه های اجتماعی دنبال کنید</h4>
                                        <p className="social-network-icons">
                                            {/* <a href=""> <i className="fa fa-instagram-square fa-2x"></i></a> */}
                                            <a href="http://www.instagram.com/reservina.ir" > <i className="fa fa-instagram fa-3x"></i></a>
                                            {/* <a href=""> <i className="fa fa-facebook-square fa-2x"></i></a>
                                   <a href=""> <i className="fa fa-google-plus-square fa-2x"></i></a>
                                   <a href=""> <i className="fa fa-instagram-square fa-2x"></i></a> */}
                                            <a href="http://www.twitter.com/reservina"> <i className="fa fa-twitter-square fa-3x"></i></a>

                                        </p>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                        <div id="footer">
                            <div className="container">
                                <div className="row">
                                    <div id="copyright" className="col-md-12">
                                        <p>کلیه حقوق برای تیم رزروینا محفوظ است</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Template;

