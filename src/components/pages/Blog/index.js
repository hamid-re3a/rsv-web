
import React, { Component } from 'react';
import Template from '../../Template';
class Blog extends Component {
    componentWillMount() {
        fetch('http://server.reservina.ir/api/v1/articles').then(res => {
            res.json().then(({ data }) => {
                console.log(data);
            });
        })
    }
    render() {
        const { auth: isAuthenticated } = this.props;
        return (
            <Template auth={isAuthenticated} logoutfunc={this.props.logoutfunc.bind(this)}>
                <div class="container  margin-top-50">

                    <div class="row" style={{ paddingTop: '10px' }}>
                        <hr />
                        <div class="row" style={{ display: 'table', margin: '0 auto' }}>
                            <ul class="nav nav-pills">
                                <li class="active">
                                    <a href="#sample-3a" data-toggle="tab">
                                        <i class="fa fa-home"></i> همه گروه‌ها </a>
                                </li>
                                <li>
                                    <a href="#sample-3b" data-toggle="tab">
                                        <i class="fa fa-cloud"></i> آموزشی </a>
                                </li>
                                <li>
                                    <a href="#sample-3c" data-toggle="tab">
                                        <i class="fa fa-comments"></i> خبرنامه </a>
                                </li>
                                <li>
                                    <a href="#sample-3d" data-toggle="tab">
                                        <i class="fa fa-gear"></i> توسعه سایت </a>
                                </li>
                            </ul>
                        </div>
                        <hr />
                        <div class="col-md-9">
                            {/* <!-- Blog Post --> */}
                            <div class="blog-post padding-bottom-20">
                                {/* <!-- Blog Item Header --> */}
                                <div class="blog-item-header">
                                    {/* <!-- Title --> */}
                                    <h2>
                                        <a href="#">
                                            لورم ایپسوم یا طرح‌نما</a>
                                    </h2>
                                    <div class="clearfix"></div>
                                    {/* <!-- End Title --> */}
                                </div>
                                {/* <!-- End Blog Item Header --> */}
                                {/* <!-- Blog Item Details --> */}
                                <div class="blog-post-details">
                                    {/* <!-- Author Name --> */}
                                    <div class="blog-post-details-item blog-post-details-item-left">
                                        <i class="fa fa-user color-gray-light"></i>
                                        <a href="#"> Admin </a>
                                    </div>
                                    {/* <!-- End Author Name --> */}
                                    {/* <!-- Date --> */}
                                    <div class="blog-post-details-item blog-post-details-item-left">
                                        <i class="fa fa-calendar color-gray-light"></i>
                                        <a href="#"> 22nd Apr, 2014 </a>
                                    </div>
                                    {/* <!-- End Date --> */}
                                    {/* <!-- Tags --> */}
                                    <div class="blog-post-details-item blog-post-details-item-left blog-post-details-tags">
                                        <i class="fa fa-tag color-gray-light"></i>
                                        <a href="#"> HTML5</a>,
                                        <a href="#"> CSS</a>,
                                        <a href="#"> Grunt</a>
                                    </div>
                                    {/* <!-- End Tags --> */}
                                    {/* <!-- # of Comments --> */}
                                    <div class="blog-post-details-item blog-post-details-item-left blog-post-details-item-last">
                                        <i class="fa fa-comments color-gray-light"></i>
                                        <a href="">
                                            &nbsp;9 Comments&nbsp;
                                        </a>
                                    </div>
                                    {/* <!-- End # of Comments --> */}
                                </div>
                                {/* <!-- End Blog Item Details --> */}
                                {/* <!-- Blog Item Body --> */}
                                <div class="blog">
                                    <div class="clearfix"></div>
                                    <div class="blog-post-body row margin-top-15">
                                        <div class="col-md-5">
                                            <img class="margin-bottom-20" src="assets/img/blog/image1.jpg" alt="thumb1" />
                                        </div>
                                        <div class="col-md-7">
                                            <p>لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد</p>
                                            {/* <!-- Read More --> */}
                                            <a href="#" class="btn btn-primary">
                                                ادامه مطلب
                                                        <i class="icon-chevron-right readmore-icon"></i>
                                            </a>
                                            {/* <!-- End Read More --> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Blog Item Body --> */}
                            </div>
                            {/* <!-- End Blog Item --> */}

                            {/* <!-- Pagination --> */}
                            <ul class="pagination">
                                <li>
                                    <a href="#">&raquo;</a>
                                </li>
                                <li class="active">
                                    <a href="#">1</a>
                                </li>
                                <li>
                                    <a href="#">2</a>
                                </li>
                                <li>
                                    <a href="#">3</a>
                                </li>
                                <li class="disabled">
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
                        <div class="col-md-3">
                            {/* <!-- Blog Tags --> */}
                            <div class="blog-tags">
                                <h3>برچسب ها</h3>
                                <ul class="blog-tags">
                                    <li>
                                        <a href="#" class="blog-tag">HTML</a>
                                    </li>
                                    <li>
                                        <a href="#" class="blog-tag">CSS</a>
                                    </li>
                                    <li>
                                        <a href="#" class="blog-tag">جاوا اسکریپت</a>
                                    </li>
                                    <li>
                                        <a href="#" class="blog-tag">jQuery</a>
                                    </li>
                                    <li>
                                        <a href="#" class="blog-tag">PHP</a>
                                    </li>
                                    <li>
                                        <a href="#" class="blog-tag">Ruby</a>
                                    </li>
                                    <li>
                                        <a href="#" class="blog-tag">CoffeeScript</a>
                                    </li>
                                    <li>
                                        <a href="#" class="blog-tag">Grunt</a>
                                    </li>
                                    <li>
                                        <a href="#" class="blog-tag">Bootstrap</a>
                                    </li>
                                    <li>
                                        <a href="#" class="blog-tag">HTML5</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- End Blog Tags --> */}
                            {/* <!-- Recent Posts --> */}
                            <div class="recent-posts">
                                <h3>مطالب دیگر</h3>
                                <ul class="posts-list margin-top-10">
                                    <li>
                                        <div class="recent-post">
                                            <a href="">
                                                <img class="pull-left" src="assets/img/blog/thumbs/thumb1.jpg" alt="thumb1" />
                                            </a>
                                            <a href="#" class="posts-list-title">لورم ایسام</a>
                                            <br />
                                            <span class="recent-post-date">
                                                July 30, 2013
                                                    </span>
                                        </div>
                                        <div class="clearfix"></div>
                                    </li>
                                    <li>
                                        <div class="recent-post">
                                            <a href="">
                                                <img class="pull-left" src="assets/img/blog/thumbs/thumb2.jpg" alt="thumb2" />
                                            </a>
                                            <a href="#" class="posts-list-title">لورم ایسام</a>
                                            <br />
                                            <span class="recent-post-date">
                                                July 30, 2013
                                                    </span>
                                        </div>
                                        <div class="clearfix"></div>
                                    </li>
                                    <li>
                                        <div class="recent-post">
                                            <a href="">
                                                <img class="pull-left" src="assets/img/blog/thumbs/thumb3.jpg" alt="thumb3" />
                                            </a>
                                            <a href="#" class="posts-list-title">لورم ایسام</a>
                                            <br />
                                            <span class="recent-post-date">
                                                July 30, 2013
                                                    </span>
                                        </div>
                                        <div class="clearfix"></div>
                                    </li>
                                    <li>
                                        <div class="recent-post">
                                            <a href="">
                                                <img class="pull-left" src="assets/img/blog/thumbs/thumb4.jpg" alt="thumb4" />
                                            </a>
                                            <a href="#" class="posts-list-title">لورم ایسام</a>
                                            <br />
                                            <span class="recent-post-date">
                                                July 30, 2013
                                                    </span>
                                        </div>
                                        <div class="clearfix"></div>
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


