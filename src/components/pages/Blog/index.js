
import React, { Component } from 'react';
import Template from '../../Template';
import Article from './article';
class Blog extends Component {
    componentWillMount() {
        let that = this;
        this.setState({
            articles : {}
        });

        fetch('http://server.reservina.ir/api/v1/articles').then(res => {
            res.json().then(({ data }) => {
                console.log(data);
                that.setState({
                    articles : data
                })
                
            });
        })


    }

    renderArticles(){
        let that = this;
        if(this.state.articles != null && this.state.articles.data != null){
            return Object.keys(this.state.articles.data).map((key,index)=><Article key={key} {...that.state.articles.data[key]}/>);
        }
        return <span></span>
    }

    render() {
        const { auth: isAuthenticated } = this.props;
        return (
            <Template auth={isAuthenticated} logoutfunc={this.props.logoutfunc.bind(this)}>
                <div className="container  margin-top-50">

                    <div className="row" style={{ paddingTop: '10px' }}>
                        <hr />
                        <div className="row" style={{ display: 'table', margin: '0 auto' }}>
                            <ul className="nav nav-pills">
                                <li className="active">
                                    <a href="#sample-3a" data-toggle="tab">
                                        <i className="fa fa-home"></i> همه گروه‌ها </a>
                                </li>
                                <li>
                                    <a href="#sample-3b" data-toggle="tab">
                                        <i className="fa fa-cloud"></i> آموزشی </a>
                                </li>
                                <li>
                                    <a href="#sample-3c" data-toggle="tab">
                                        <i className="fa fa-comments"></i> خبرنامه </a>
                                </li>
                                <li>
                                    <a href="#sample-3d" data-toggle="tab">
                                        <i className="fa fa-gear"></i> توسعه سایت </a>
                                </li>
                            </ul>
                        </div>
                        <hr />
                        <div className="col-md-9">

                            {/* <!-- Articles --> */}                        
                            {this.renderArticles()}
                            {/* <!-- Articles --> */}
                            
                            {/* <!-- Pagination --> */}
                            <ul className="pagination">
                                <li>
                                    <a href="#">&raquo;</a>
                                </li>
                                <li className="active">
                                    <a href="#">1</a>
                                </li>
                                <li>
                                    <a href="#">2</a>
                                </li>
                                <li>
                                    <a href="#">3</a>
                                </li>
                                <li className="disabled">
                                    <a href="#">4</a>
                                </li>
                                <li>
                                    <a href="#">5</a>
                                </li>
                                <li>
                                    <a href="#">&laquo;</a>
                                </li>
                            </ul>
                            {/* <!-- End Pagination --> */}
                        </div>
                        {/* <!-- End Main Column --> */}
                        {/* <!-- Side Column --> */}
                        <div className="col-md-3">
                            {/* <!-- Blog Tags --> */}
                            <div className="blog-tags">
                                <h3>برچسب ها</h3>
                                <ul className="blog-tags">
                                    <li>
                                        <a href="#" className="blog-tag">رزرو آرایشگاه</a>
                                    </li>
                                    <li>
                                        <a href="#" className="blog-tag">رزرو آنلاین</a>
                                    </li>
                                    <li>
                                        <a href="#" className="blog-tag">آرایش</a>
                                    </li>
                                    <li>
                                        <a href="#" className="blog-tag">مدل</a>
                                    </li>
                                    <li>
                                        <a href="#" className="blog-tag">رنگ مو</a>
                                    </li>
                                    <li>
                                        <a href="#" className="blog-tag">آرایشگاه</a>
                                    </li>
                                    <li>
                                        <a href="#" className="blog-tag">مو</a>
                                    </li>
                                    <li>
                                        <a href="#" className="blog-tag">زمان</a>
                                    </li>
                                    <li>
                                        <a href="#" className="blog-tag">کاشت ناخن</a>
                                    </li>
                                    <li>
                                        <a href="#" className="blog-tag">آموزش</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- End Blog Tags --> */}
                            {/* <!-- Recent Posts --> */}
                            <div className="recent-posts">
                                <h3>مطالب دیگر</h3>
                                <ul className="posts-list margin-top-10">
                                    <li>
                                        <div className="recent-post">
                                            <a href="">
                                                {/* <img className="pull-left" src="assets/img/blog/thumbs/thumb1.jpg" alt="thumb1" /> */}
                                            </a>
                                            <a href="#" className="posts-list-title">لورم ایسام</a>
                                            <br />
                                            <span className="recent-post-date">
                                                July 30, 2013
                                                    </span>
                                        </div>
                                        <div className="clearfix"></div>
                                    </li>
                                    <li>
                                        <div className="recent-post">
                                            <a href="">
                                                {/* <img className="pull-left" src="assets/img/blog/thumbs/thumb2.jpg" alt="thumb2" /> */}
                                            </a>
                                            <a href="#" className="posts-list-title">لورم ایسام</a>
                                            <br />
                                            <span className="recent-post-date">
                                                July 30, 2013
                                                    </span>
                                        </div>
                                        <div className="clearfix"></div>
                                    </li>
                                    <li>
                                        <div className="recent-post">
                                            <a href="">
                                                {/* <img className="pull-left" src="assets/img/blog/thumbs/thumb3.jpg" alt="thumb3" /> */}
                                            </a>
                                            <a href="#" className="posts-list-title">لورم ایسام</a>
                                            <br />
                                            <span className="recent-post-date">
                                                July 30, 2013
                                                    </span>
                                        </div>
                                        <div className="clearfix"></div>
                                    </li>
                                    <li>
                                        <div className="recent-post">
                                            <a href="">
                                                {/* <img className="pull-left" src="assets/img/blog/thumbs/thumb4.jpg" alt="thumb4" /> */}
                                            </a>
                                            <a href="#" className="posts-list-title">لورم ایسام</a>
                                            <br />
                                            <span className="recent-post-date">
                                                July 30, 2013
                                                    </span>
                                        </div>
                                        <div className="clearfix"></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </Template>
        );
    }
}

export default Blog;


