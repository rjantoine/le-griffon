import * as React from "react"
import {Col, Container, Row} from "react-bootstrap";
import {graphql} from "gatsby"
import Theme from "../templates/Theme";
import LargeListCard from "../components/LargeListCard";

export const query = graphql`
    query AnnoncesPosts {
        annonces:allMdx(
            filter: {frontmatter: {category: {eq: "annonces"}}}
            sort: {fields: frontmatter___date, order: DESC}
        ) {
            nodes {
                id
                slug
                excerpt(pruneLength: 250, truncate: false)
                shortExcerpt: excerpt(pruneLength: 40, truncate: false)
                frontmatter {
                    title
                    category
                    expires(fromNow: true)
                    date
                    featuredImg { childImageSharp {
                        squareFormat: gatsbyImageData(width:270, height:220, transformOptions: {fit: COVER, cropFocus:NORTH })
                    } }
                }
            }
        }
    }
`

// markup
const AnnoncesPage = ({data}) => {
    return (
        <Theme title="Annonces" pathname='/annonces'>
            <Container>
                <Row className="my-4">
                    <Col>
                        <h1>Annonces</h1>
                        { data.annonces.nodes.filter(node => !(node.frontmatter.expires?.search('ago') > 0)).map( post => <LargeListCard post={post} />) }
                    </Col>
                </Row>
            </Container>
        </Theme>
    )
}

export default AnnoncesPage
