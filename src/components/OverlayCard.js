/**
 * Requires the following as {post}
    query BlogPosts {
        posts:allMdx {
            nodes {
                id
                slug
                excerpt
                frontmatter {
                    title
                    lgCardImg: featuredImg {
                        childImageSharp {
                            gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1.5, transformOptions: {fit: COVER, cropFocus:NORTH })
                        }
                    }
                    smSquareImg: featuredImg {
                        childImageSharp{
                            gatsbyImageData(width:120, height:120, transformOptions: {fit: COVER, cropFocus:NORTH })
                        }
                    }
                }
            }
        }
    }
 */
import React from 'react';
import {Card} from "react-bootstrap";
import {GatsbyImage} from "gatsby-plugin-image";
import {Link} from "gatsby";

function OverlayCard({post}) {
    return (
        <Link to={'/posts/'+post.slug}>
            <Card className="bg-dark text-white rounded-10 shadow-card">
                { post?.frontmatter?.featuredImg?.childImageSharp.lgCardFormat && <GatsbyImage alt="" image={post.frontmatter.featuredImg.childImageSharp.lgCardFormat} className="card-img hover-zoom rounded-10" style={{WebkitMaskImage: "-webkit-radial-gradient(white, black)"}} /> }
                <Card.ImgOverlay style={{paddingTop: "60px", borderRadius:"10px"}}>
                    <div className="p-5" style={{position:"absolute", left:0, bottom:0, background: "linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent)"}}>
                        <Card.Title as="div" className="h3">{post.frontmatter.title}</Card.Title>
                        <Card.Text className="d-none d-md-block">
                            {post.excerpt}
                        </Card.Text>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </Link>
    );
}

export default OverlayCard;