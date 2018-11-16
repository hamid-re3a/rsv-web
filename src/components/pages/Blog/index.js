
import React from 'react';
import Template from '../../Template';
import Article from './article';


class Blog extends React.Component {
    componentWillMount() {
        let that = this;
        this.setState({
            articles: {}
        });

        fetch('http://server.reservina.ir/api/v1/articles').then(res => {
            res.json().then(({ data }) => {
                console.log(data);
                that.setState({
                    articles: data
                })
            });
        })

        this.Nav = this.Nav.bind(this);
        this.Articles = this.Articles.bind(this);
        this.Pagination = this.Pagination.bind(this);
        this.Tags = this.Tags.bind(this);
        this.RecentPost = this.RecentPost.bind(this);
        this.RecentPosts = this.RecentPosts.bind(this);
    }

    Nav() {
        return (
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
        );
    }

    Articles() {
        let that = this;
        if (this.state.articles != null && this.state.articles.data != null) {
            return Object.keys(this.state.articles.data).map((key, index) => <Article key={key} {...that.state.articles.data[key]} />);
        }
        return <span></span>;
    }

    Pagination() {
        var pagesMap = {1: "active", 2: "", 3: "", 4: "disabled", 5: ""};
        var pagesList = Object.keys(pagesMap).map(function(key, index) {
            return <li className={pagesMap[key]}><a href="#">{key}</a></li>;
        });
        return (
            <ul className="pagination">
                <li><a href="#">&raquo;</a></li>
                {pagesList}
                <li><a href="#">&laquo;</a></li>
            </ul>
        );
    }

    Tags() {
        var tagNames = ['رزرو آرایشگاه', 'رزرو آنلاین', 'آرایش', 'مدل', 'رنگ مو', 'آرایشگاه', 'مو', 'زمان', 'کاشت ناخن', 'آموزش'];
        var tags = tagNames.map(function (name) {
            return <li><a href="#" className="blog-tag">{name}</a></li>;
        });
        return (
            <div className="blog-tags">
                <h3>برچسب ها</h3>
                <ul className="blog-tags">
                    {tags}
                </ul>
            </div>
        );
    }

    RecentPost({ title }) {
        return (
            <li>
                <div className="recent-post">
                    <a href="">
                        {/* <img className="pull-left" src="assets/img/blog/thumbs/thumb2.jpg" alt="thumb2" /> */}
                    </a>
                    <a href="#" className="posts-list-title">{title}</a>
                    <br />
                    <span className="recent-post-date">July 30, 2013</span>
                </div>
                <div className="clearfix"></div>
            </li>
        );
    }

    RecentPosts() {
        var that = this;
        var postTitles = ['مطلب 1', 'مطلب 2', 'مطلب 3', 'مطلب 4'];
        var postsList = postTitles.map(function (title) {
            return <that.RecentPost title={title} />;
        })
        return (
            <div className="recent-posts">
                <h3>مطالب دیگر</h3>
                <ul className="posts-list margin-top-10">
                    {postsList}
                </ul>
            </div>
        );
    }

    render() {
        return (
            <Template>
                <div className="container  margin-top-50">
                    <div className="row" style={{ paddingTop: '10px' }}>
                        <hr />
                        <this.Nav />
                        <hr />
                        {/* <!-- Main Column --> */}
                        <div className="col-md-9">
                            <this.Articles />
                            <this.Pagination />
                        </div>
                        {/* <!-- End Main Column --> */}
                        {/* <!-- Side Column --> */}
                        <div className="col-md-3">
                            <this.Tags />
                            <this.RecentPosts />
                        </div>
                        {/* <!-- End Side Column --> */}
                    </div>
                </div>
            </Template>
        );
    }
}

export default Blog;


