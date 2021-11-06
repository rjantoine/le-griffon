import * as React from "react"
import SiteNavbar from "../components/SiteNavbar";
import {Container, Row} from "react-bootstrap";
import {GatsbyImage, getImage, StaticImage} from "gatsby-plugin-image";
import {graphql} from "gatsby";

// export const query = graphql`
//   query PostQuery($slug: String) {
//     mdx(slug: { eq: $slug }) {
//       frontmatter {
//         title
//         featuredImg {
//           childImageSharp {
//             gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1.5, transformOptions: {fit: COVER, cropFocus:NORTH })
//           }
//         }
//       }
//     }
//   }
// `

const PurpleBorder = (props) => {
    const {data, pageContext, children} = props;
    console.log(props)

    return (
        <>
            <StaticImage src="../images/griffon-bg.jpg" layout="fullWidth" aspectRatio={8} transformOptions={{fit: "cover", cropFocus: "center"}} />
            <SiteNavbar />
            <Container>
                <Row className="pt-5">
                    <h1 className="pb-3">{pageContext.frontmatter.title}</h1>
                    <GatsbyImage image={getImage(pageContext.frontmatter.featuredImg)} />
                    {JSON.stringify(data)}
                    <div className="clearfix">
                        {children}
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default PurpleBorder
