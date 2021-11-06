import React from 'react';
import {Link} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";

const LargeListCard = ({post}) => {
    return (
        <article className="post hentry post-list">
            <div className="entry-thumb">
                <figure className="thumb-wrap">
                    <Link to={'/posts/'+post.slug}>
                        <GatsbyImage alt="" image={post.frontmatter.featuredImg.childImageSharp.smSquareFormat} className="card-img rounded-10" />
                    </Link>
                </figure>
            </div>
            <div className="content-entry-wrap">
                <div className="entry-content">
                    <h3 className="entry-title my-3">
                        <Link to={'/posts/'+post.slug}>{post.frontmatter.title}</Link>
                    </h3>
                </div>
                <div className="entry-meta-content">
                    <div className="entry-date">
                        <span>le {post.frontmatter.date}</span>
                    </div>
                </div>
                <div className="entry-summary">
                    <p className="mb-1">{post.excerpt}</p>
                    <p className="read-more-wrap">
                        <Link to={'/posts/'+post.slug} className="read-more">Lire davantage</Link>
                    </p>
                </div>
            </div>
        </article>
    );
};

export default LargeListCard;
