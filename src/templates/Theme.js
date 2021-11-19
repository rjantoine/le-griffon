import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import SiteNavbar from "../components/SiteNavbar";
import SiteFooter from "../components/SiteFooter";
import {Helmet} from "react-helmet";
import {graphql, useStaticQuery} from "gatsby";

function Theme({title, description, image: metaImage, pathname, children}) {
    const { site } = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
    )

    const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null
    const metaDescription = description || site.siteMetadata.description
    const image = metaImage ? `${site.siteMetadata.siteUrl}${metaImage}` : `${site.siteMetadata.siteUrl}/griffon-bg.jpg`

    return (
        <>
            <Helmet
                title={title}
                titleTemplate={`%s | ${site.siteMetadata.title}`}
                link={ canonical ? [ { rel: "canonical", href: canonical } ] : [] }
                meta={
                    [
                        { name: `description`, content: metaDescription, },
                        { property: `og:title`, content: title },
                        { property: `og:description`, content: metaDescription },
                        { property: `og:type`, content: `website` },
                        { name: `twitter:title`, content: title },
                        { name: `twitter:description`, content: metaDescription },
                    ]
                    .concat(
                        metaImage
                            ? [
                                { property: "og:image", content: image },
                                { property: "og:image:width", content: metaImage.width },
                                { property: "og:image:height", content: metaImage.height },
                                { name: "twitter:card", content: "summary_large_image" },
                            ]
                            : [ { name: "twitter:card", content: "summary" } ]
                    )
                }
            />
            <StaticImage src="../images/griffon-bg.jpg" alt="Un griffon superposé sur le drapeau franco-Ontarien" layout="fullWidth" aspectRatio={8} transformOptions={{fit: "cover", cropFocus: "center"}} />
            <SiteNavbar />
                <main className="site-main" style={{backgroundColor: '#ddd'}}>
                    {children}
                </main>
            <SiteFooter />
        </>
    );
}

export default Theme;