import React from 'react';
import {GatsbyImage} from "gatsby-plugin-image";
import {Link} from "gatsby";

const ListCard = ({post}) => (
    <Link to={'/posts/'+post.slug} className="post hentry post-list post-list-small rounded-10 shadow-list" style={{maxHeight:"150px", overflow: "hidden"}}>
        <div className="entry-thumb">
            <figure className="thumb-wrap">
                { post?.frontmatter?.featuredImg && <GatsbyImage alt="" image={post.frontmatter.featuredImg.childImageSharp.smSquareFormat} className="card-img rounded-10" /> }
            </figure>
        </div>
        <div className="content-entry-wrap">
            <div className="entry-content" style={{maxHeight:"100px"}}>
                <div className="py-2 pr-3" >
                    <h3 className="entry-title mb-1">{post.frontmatter.title}</h3>
                    <p>{post.shortExcerpt}</p>
                </div>
            </div>
        </div>
    </Link>
);

export default ListCard;