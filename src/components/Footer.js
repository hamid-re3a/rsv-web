import React from 'react';


function FooterInfo() {
    return (
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
                    <div className="clearfix" />
                </div>
            </div>
        </div>
    );
}

function FotterCopyRight() {
    return (
        <div id="footer">
            <div className="container">
                <div className="row">
                    <div id="copyright" className="col-md-12">
                        <p>کلیه حقوق برای تیم رزروینا محفوظ است</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


class Footer extends React.Component {
    render() {
        return (
            <div>
                <FooterInfo />
                <FotterCopyRight />
            </div>
        );
    }
}

export default Footer;