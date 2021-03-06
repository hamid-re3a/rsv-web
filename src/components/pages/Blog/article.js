
import React, { Component } from 'react';


function ArticleHeader({ title }) {
    return (
        <div className="blog-item-header">
            <h2>
                <a dangerouslySetInnerHTML={{ __html: title }}>
                </a>
            </h2>
            <div className="clearfix"></div>
        </div>
    );
}

function ArtivleDetails({user, published_at}) {
    return (
        <div className="blog-post-details">
            {/* <!-- Author Name --> */}
            <div className="blog-post-details-item blog-post-details-item-left">
                <i className="fa fa-user color-gray-light"></i>
                <a href="#"> {user} </a>
            </div>
            {/* <!-- End Author Name --> */}
            {/* <!-- Date --> */}
            <div className="blog-post-details-item blog-post-details-item-left">
                <i className="fa fa-calendar color-gray-light"></i>
                <a href="#"> {published_at} </a>
            </div>
            {/* <!-- End Date --> */}
            {/* <!-- Tags --> */}
            {/* <div className="blog-post-details-item blog-post-details-item-left blog-post-details-tags">
                        <i className="fa fa-tag color-gray-light"></i>
                        <a href="#"> HTML5</a>,
                                        <a href="#"> CSS</a>,
                                        <a href="#"> Grunt</a>
                    </div> */}
            {/* <!-- End Tags --> */}
            {/* <!-- # of Comments --> */}
            <div className="blog-post-details-item blog-post-details-item-left blog-post-details-item-last">
                <i className="fa fa-comments color-gray-light"></i>
                <a href=""> &nbsp;9 Comments&nbsp; </a>
            </div>
            {/* <!-- End # of Comments --> */}
        </div>
    );
}

function ArticleBody({image, fulltext}) {
    return (
        <div className="blog">
            <div className="clearfix"></div>
            <div className="blog-post-body row margin-top-15">
                <div className="col-md-5">
                    <img className="margin-bottom-20" src={"http://server.reservina.ir/" + image} alt="thumb1" />
                </div>
                <div className="col-md-7">
                    <div dangerouslySetInnerHTML={{ __html: fulltext.substring((fulltext.search("</h1>") != -1 ? fulltext.search("</h1>") : fulltext.search("</h2>")), 500) }} />
                    {/* <!-- Read More --> */}
                    <a href="#" className="btn btn-primary">
                        ادامه مطلب
                        <i className="icon-chevron-right readmore-icon"></i>
                    </a>
                    {/* <!-- End Read More --> */}
                </div>
            </div>
        </div>
    );
}


class Article extends Component {
    render() {
        const { title, fulltext, image, published_at, tags, user } = this.props;
        return (
            <div className="blog-post padding-bottom-20">
                <ArticleHeader title={title} />
                <ArtivleDetails user={user} published_at={published_at} />
                <ArticleBody image={image} fulltext={fulltext} />
            </div>
        );
    }
}

export default Article;


