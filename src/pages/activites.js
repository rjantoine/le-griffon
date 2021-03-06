import * as React from "react"
import {Col, Container, Row} from "react-bootstrap";
import {graphql} from "gatsby"
import Theme from "../templates/Theme";
import LargeListCard from "../components/LargeListCard";

export const query = graphql`
    query ActivitesPosts {
        activites:allMdx(
            filter: {frontmatter: {category: {eq: "activites"}}}
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
                    date
                    eventDateTime
                    lieu
                    featuredImg { childImageSharp {
                        squareFormat: gatsbyImageData(width:270, height:220, transformOptions: {fit: COVER, cropFocus:NORTH })
                    } }
                }
            }
        }
    }
`

// markup
const ActivitesPage = ({data}) => {
    return (
        <Theme title="Activités" pathname='/activites'>
            <Container>
                <Row className="my-4">
                    <Col>
                        <h1>Activités</h1>
                        { data.activites.nodes.map( post => <LargeListCard post={post} />) }
                    </Col>
                </Row>
            </Container>
        </Theme>
    )
}

export default ActivitesPage
