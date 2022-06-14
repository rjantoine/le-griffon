import React from 'react';
import {Link} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";
import Moment from 'react-moment';

const LargeListCard = ({post}) => {
    return (
        <article className="post hentry post-list">
            <div className="entry-thumb">
                <figure className="thumb-wrap">
                    <Link to={'/posts/'+post.slug}>
                        <GatsbyImage alt="" image={post.frontmatter.featuredImg.childImageSharp.squareFormat} className="card-img rounded-10" />
                    </Link>
                </figure>
            </div>
            <div className="content-entry-wrap">
                <div className="entry-content">
                    <h3 className="entry-title my-3">
                        <Link to={'/posts/'+post.slug}>{post.frontmatter.title}</Link>
                    </h3>
                </div>
                {post.frontmatter.category === 'annonces' &&
                <div className="entry-meta-content">
                    <div className="entry-date">
                        <span>le <Moment format="D MMMM Y" locale="fr" date={post.frontmatter.date} /></span>
                    </div>
                </div>
                }
                {post.frontmatter.category === 'activites' &&
                <p className="mt-1 mb-0">
                    { post.frontmatter.eventDateTime && <div><strong>Date: </strong>le <Moment format="D MMMM Y [à] H[h]mm" locale="fr" date={post.frontmatter.eventDateTime} /></div>}
                    { post.frontmatter.lieu && <div><strong>Lieu: </strong>{post.frontmatter.lieu}</div>}
                </p>
                }
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
