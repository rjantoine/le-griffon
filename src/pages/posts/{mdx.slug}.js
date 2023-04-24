import * as React from "react"
import {Col, Container, Row} from "react-bootstrap";
import {GatsbyImage} from "gatsby-plugin-image";
import {graphql, Link} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import Theme from "../../templates/Theme";
import mediumZoom from '../../assets/js/myZoom'

export const query = graphql`
  query($id: String) {
      posts:allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 5) {
        nodes {
            id
            slug
            excerpt(pruneLength: 120, truncate: false)
            frontmatter {
                title
                category
                categories
                expires
                date
                formattedDate: date(locale: "fr", formatString: "D MMMM Y")
                formattedEventDate: eventDateTime(locale: "fr", formatString: "D MMMM Y")
                formattedEventDateTime: eventDateTime(locale: "fr", formatString: "D MMMM Y [à] H[h]mm")
                eventDateTime
                eventFromNow: eventDateTime(fromNow: true)
                lieu
                featuredImg { childImageSharp {
                    lgCardFormat: gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1.5, transformOptions: {fit: COVER, cropFocus:NORTH })
                } }
            }
        }
    },
    mdx(id: {eq: $id}) {
      body
      slug
      excerpt(pruneLength: 120, truncate: false)
      frontmatter {
        expires
        formattedDate: date(locale: "fr", formatString: "D MMMM Y")
        title
        category
        featuredImg { childImageSharp {
            metaFormat: gatsbyImageData(width:800)
        } }
      }
    }
  }
`

const BlogPost = ({data, pageContext, children}) => {
    // let posts = data.posts.nodes.filter(node => node.id !== pageContext.id).filter(node => !(node.frontmatter.expires?.search('ago') > 0))
    let posts = data.posts.nodes.filter(node => node.id !== pageContext.id).filter(node => !node.frontmatter.expires || new Date(node.frontmatter.expires) > Date.now())
    React.useEffect(() => {
        const zoom = mediumZoom('.gatsby-resp-image-image')

        return () => {
            zoom.detach()
        }
    }, [])
    return (
        <Theme title={data.mdx.frontmatter.title} pathname={'/posts/'+data.mdx.slug} description={data.mdx.excerpt} image={data.mdx.frontmatter.featuredImg.childImageSharp.metaFormat.images.fallback.src}>
            <Container>
                <Row>
                    <Col lg={8} className="p-5">
                        <div className={`post single-post single-post-three category-${data.mdx.frontmatter.category}`}>
                            <div className="single-post-content">
                                <div className="entry-content">
                                    <h1 className="h3 entry-title">{data.mdx.frontmatter.title}</h1>
                                    <div className="mb-4"><em>le {data.mdx.frontmatter.formattedDate}</em></div>
                                    <MDXRenderer>{data.mdx.body}</MDXRenderer>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className="bg-light">
                        <div className="widget p-3">
                            <h4 className="widget-title"><span>Récents</span></h4>
                            { posts.slice(0,5).map(post => <div className="card border-0 bg-light mt-5">
                                    <Link to={'/posts/' + post.slug}><GatsbyImage
                                        image={post.frontmatter?.featuredImg?.childImageSharp?.lgCardFormat}
                                        className="w-100 card-img rounded-10 hover-zoom"/></Link>
                                    <h3 className="my-3"><Link
                                        to={'/posts/' + post.slug}>{post.frontmatter.title}</Link></h3>
                                {post.frontmatter.category === 'activites' && <p className="mt-1 mb-0">
                                    { post.frontmatter.eventDateTime && <div><strong>Date: </strong>le {post.frontmatter.eventDateTime.includes("T00:00:00.000") ? post.frontmatter.formattedEventDate : post.frontmatter.formattedEventDateTime}</div>}
                                    { post.frontmatter.lieu && <div><strong>Lieu: </strong>{post.frontmatter.lieu}</div>}
                                </p>}
                                <p className="mb-0">{post.excerpt}</p>
                                    <p className="read-more-wrap">
                                        <Link to={'/posts/'+post.slug} className="read-more">Lire davantage</Link>
                                    </p>
                                </div>
                            ) }
                        </div>
                    </Col>
                </Row>
            </Container>
        </Theme>
    )
}
export default BlogPost