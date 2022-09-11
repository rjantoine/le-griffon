import * as React from "react"
import {Col, Container, Row} from "react-bootstrap";
import {graphql} from "gatsby"
import Theme from "../templates/Theme";
import LargeListCard from "../components/LargeListCard";

export const query = graphql`
    query JeuxPosts {
        jeux:allMdx(
            filter: {frontmatter: {categories: {in: "pavillon"}}}
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
                    formattedDate: date(locale: "fr", formatString: "D MMMM Y")
                    featuredImg { childImageSharp {
                        squareFormat: gatsbyImageData(width:270, height:220, transformOptions: {fit: COVER, cropFocus:NORTH })
                    } }
                }
            }
        }
    }
`

// markup
const JeuxPage = ({data}) => {
    return (
        <Theme title="Jeux du Canada" pathname='/jeux'>
            <Container className="p-5">
                <Row>
                    <Col>
                        <h1>Les Jeux du Canada</h1>
                        { data.jeux.nodes.filter(node => !(node.frontmatter.expires?.search('ago') > 0)).map( post => <LargeListCard post={post} />) }
                    </Col>
                </Row>
            </Container>
        </Theme>
    )
}

export default JeuxPage
