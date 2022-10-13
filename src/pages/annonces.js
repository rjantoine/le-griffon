import * as React from "react"
import {Col, Container, Row} from "react-bootstrap";
import {graphql} from "gatsby"
import Theme from "../templates/Theme";
import LargeListCard from "../components/LargeListCard";

export const query = graphql`
    query AnnoncesPosts {
        annonces:allMdx(
            filter: {frontmatter: {categories: {in: "annonces"}}}
            sort: {fields: frontmatter___date, order: DESC}
        ) {
            nodes {
                id
                slug
                excerpt(pruneLength: 250, truncate: false)
                frontmatter {
                    title
                    category
                    date
                    formattedDate: date(locale: "fr", formatString: "D MMMM Y")
                    formattedEventDate: eventDateTime(locale: "fr", formatString: "D MMMM Y")
                    formattedEventDateTime: eventDateTime(locale: "fr", formatString: "D MMMM Y [à] H[h]mm")
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
            <Container className="p-5">
                <Row>
                    <Col>
                        <h1>Annonces</h1>
                        { data.annonces.nodes.filter(node => (!node.frontmatter.expires || new Date(node.frontmatter.expires) > Date.now())).map( post => <LargeListCard post={post} />) }
                    </Col>
                </Row>
            </Container>
        </Theme>
    )
}

export default AnnoncesPage
