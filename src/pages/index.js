import * as React from "react"
import {Col, Container, Row} from "react-bootstrap";
import {graphql, Link} from "gatsby"
import OverlayCard from "../components/OverlayCard";
import ListCard from "../components/ListCard";
import Theme from "../templates/Theme";
import LargeListCard from "../components/LargeListCard";
import {GatsbyImage} from "gatsby-plugin-image";
import Moment from 'react-moment';

export const query = graphql`
    query BlogPosts {
        posts:allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                id
                slug
                longExcerpt: excerpt(pruneLength: 250, truncate: false)
                excerpt(pruneLength: 120, truncate: false)
                shortExcerpt: excerpt(pruneLength: 40, truncate: false)
                frontmatter {
                    title
                    category
                    expires(fromNow: true)
                    date
                    eventDateTime
                    eventFromNow: eventDateTime(fromNow: true)
                    lieu
                    featuredImg { childImageSharp {
                        lgCardFormat: gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1.5, transformOptions: {fit: COVER, cropFocus:NORTH })
                        smSquareFormat: gatsbyImageData(width:120, height:120, transformOptions: {fit: COVER, cropFocus:NORTH })
                        squareFormat: gatsbyImageData(width:270, height:220, transformOptions: {fit: COVER, cropFocus:NORTH })
                    } }
                }
            }
        }
    }
`

// markup
const IndexPage = ({data}) => {
    let posts = data.posts.nodes.filter(node => !(node.frontmatter.expires?.search('ago') > 0))
    const bgColors = ["bg-white", "bg-gray"]
    let currBgColor = 0
    const getBgColor = (toggle=false) => {
        if(toggle) currBgColor = currBgColor === 0 ? 1 : 0
        return bgColors[currBgColor]
    }
  return (
      <Theme title="Accueil" pathname='/'>
              <main>
                  <div className="py-4" style={{backgroundColor: 'white'}}>
                      <Container>
                          <Row className="py-4 align-items-center">
                              <Col lg={7}>
                                  { posts.slice(0,1).map( featuredPost => <OverlayCard key={'home-posts-'+featuredPost.slug} post={featuredPost} /> ) }
                              </Col>
                              <Col lg={5} className="mt-4 m-lg-0">
                                  <div className="my-auto">
                                      { posts.slice(1,4).map(post => <ListCard key={'home-posts-'+post.slug} post={post} />) }
                                  </div>
                              </Col>
                          </Row>
                      </Container>
                  </div>
                  {}
                  { data.posts.nodes.filter(node => node.frontmatter.category === "activites" && !(node.frontmatter.eventFromNow?.search('ago') > 0) && !(node.frontmatter.expires?.search('ago') > 0)).length > 0 && <div className={getBgColor(true)}>
                      <Container className="pb-5">
                          <Row className="py-4">
                              <Col>
                                  <h2 className="pt-5"><Link to="/activites/">Activités à venir</Link></h2>
                                  <Row>
                                      { data.posts.nodes.filter(node => node.frontmatter.category === "activites" && !(node.frontmatter.eventFromNow?.search('ago') > 0) && !(node.frontmatter.expires?.search('ago') > 0)).slice(0,3).map( post => <Col sm={4} className="mt-3">
                                          <div className={`card border-0 ${getBgColor()}`}>
                                              <Link to={'/posts/'+post.slug}><GatsbyImage alt={post.frontmatter.title} image={post.frontmatter.featuredImg.childImageSharp.lgCardFormat} className="w-100 card-img rounded-10 hover-zoom" /></Link>
                                              <h3 className="mt-4 mb-2"><Link to={'/posts/'+post.slug}>{post.frontmatter.title}</Link></h3>
                                              <p className="mt-1 mb-0">
                                                  { post.frontmatter.eventDateTime && <div><strong>Date: </strong>le <Moment format="D MMMM Y [à] H[h]mm" locale="fr" date={post.frontmatter.eventDateTime} /></div>}
                                                  { post.frontmatter.lieu && <div><strong>Lieu: </strong>{post.frontmatter.lieu}</div>}
                                              </p>
                                              <p className="mt-3 mb-2">{post.excerpt}</p>
                                              <p className="read-more-wrap">
                                                  <Link to={'/posts/'+post.slug} className="read-more">Lire davantage</Link>
                                              </p>
                                          </div>
                                      </Col>) }
                                  </Row>
                                  <Row className="mt-5">
                                      <Col>
                                          { data.posts.nodes.filter(node => node.frontmatter.category === "activites" && !(node.frontmatter.eventFromNow?.search('ago') > 0) && !(node.frontmatter.expires?.search('ago') > 0)).slice(3,10).map( post => <LargeListCard post={post} />) }
                                      </Col>
                                  </Row>
                                  {
                                      data.posts.nodes.filter(node => node.frontmatter.category === "activites" && !(node.frontmatter.eventFromNow?.search('ago') > 0) && (node.frontmatter.expires?.search('ago') > 0)).length > 10 &&
                                      <Row className="mt-5">
                                          <Col>
                                              <Link to="/activites/">Voir les autres activités...</Link>
                                          </Col>
                                      </Row>
                                  }
                              </Col>
                          </Row>
                      </Container>
                  </div> }
                  <div className={getBgColor(true)}>
                      <Container>
                          <Row className="py-4">
                              <Col>
                                  <h2 className="mt-5"><Link to="/annonces/">Annonces</Link></h2>
                                  <Row>
                                      { data.posts.nodes.filter(node => node.frontmatter.category === "annonces" && !(node.frontmatter.expires?.search('ago') > 0)).slice(0,3).map( post => <Col sm={4} className="mt-3">
                                          <div className={`card border-0 ${getBgColor()}`}>
                                              <Link to={'/posts/'+post.slug}><GatsbyImage image={post.frontmatter.featuredImg.childImageSharp.lgCardFormat} className="w-100 card-img rounded-10 hover-zoom" /></Link>
                                              <h3 className="mt-4 mb-2"><Link to={'/posts/'+post.slug}>{post.frontmatter.title}</Link></h3>
                                              <div className="entry-meta-content">
                                                  <div className="entry-date">le <Moment format="D MMMM Y" locale="fr" date={post.frontmatter.date} /></div>
                                              </div>
                                              <div className="entry-summary py-3">{post.excerpt}</div>
                                              <p className="read-more-wrap">
                                                  <Link to={'/posts/'+post.slug} className="read-more">Lire davantage</Link>
                                              </p>
                                          </div>
                                      </Col>) }
                                  </Row>
                                  <Row className="mt-5">
                                      <Col>
                                          { data.posts.nodes.filter(node => node.frontmatter.category === "annonces" && !(node.frontmatter.expires?.search('ago') > 0)).slice(3,10).map( post => <LargeListCard post={post} />) }
                                      </Col>
                                  </Row>
                                  {
                                      data.posts.nodes.filter(node => node.frontmatter.category === "annonces" && !(node.frontmatter.expires?.search('ago') > 0)).length > 10 &&
                                      <Row className="mt-5">
                                          <Col>
                                              <Link to="/annonces/">Voir les autres annonces...</Link>
                                          </Col>
                                      </Row>
                                  }
                              </Col>
                          </Row>
                      </Container>
                  </div>
                  <div className={getBgColor(true)}>
                      <Container className="pb-5">
                          <Row className="py-4">
                              <Col>
                                  <h2 className="pt-5"><Link to="/activites/">Activités passées</Link></h2>
                                  <Row>
                                      { data.posts.nodes.filter(node => node.frontmatter.category === "activites" && node.frontmatter.eventFromNow?.search('ago') > 0 && !(node.frontmatter.expires?.search('ago') > 0)).slice(0,3).map( post => <Col sm={4} className="mt-3">
                                          <div className={`card border-0 ${getBgColor()}`}>
                                              <Link to={'/posts/'+post.slug}><GatsbyImage alt={post.frontmatter.title} image={post.frontmatter.featuredImg.childImageSharp.lgCardFormat} className="w-100 card-img rounded-10 hover-zoom" /></Link>
                                              <h3 className="mt-4 mb-2"><Link to={'/posts/'+post.slug}>{post.frontmatter.title}</Link></h3>
                                              <p className="mt-1 mb-0">
                                                  { post.frontmatter.eventDateTime && <div><strong>Date: </strong>le <Moment format="D MMMM Y [à] H[h]mm" locale="fr" date={post.frontmatter.eventDateTime} /></div>}
                                                  { post.frontmatter.lieu && <div><strong>Lieu: </strong>{post.frontmatter.lieu}</div>}
                                              </p>
                                              <p className="mt-3 mb-2">{post.excerpt}</p>
                                              <p className="read-more-wrap">
                                                  <Link to={'/posts/'+post.slug} className="read-more">Lire davantage</Link>
                                              </p>
                                          </div>
                                      </Col>) }
                                  </Row>
                                  <Row className="mt-5">
                                      <Col>
                                          { data.posts.nodes.filter(node => node.frontmatter.category === "activites" && node.frontmatter.eventFromNow?.search('ago') > 0 && !(node.frontmatter.expires?.search('ago') > 0)).slice(3,10).map( post => <LargeListCard post={post} />) }
                                      </Col>
                                  </Row>
                                  {
                                      data.posts.nodes.filter(node => node.frontmatter.category === "activites" && node.frontmatter.eventFromNow?.search('ago') > 0 && !(node.frontmatter.expires?.search('ago') > 0)).length > 10 &&
                                      <Row className="mt-5">
                                          <Col>
                                              Voir les autres activités...
                                          </Col>
                                      </Row>
                                  }
                              </Col>
                          </Row>
                      </Container>
                  </div>

              </main>
      </Theme>
  )
}

export default IndexPage
