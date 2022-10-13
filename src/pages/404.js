import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const ErrorPage = props => <StaticQuery
    query={graphql`
        query {
          site {
            siteMetadata {
              siteUrl
            }
          }
        }
    `}
    render={data => {
        return (
            <Helmet>
                <meta
                    http-equiv="refresh"
                    content={`0;url=${data.site.siteMetadata.siteUrl}`}
                />
            </Helmet>
        );
    }}
/>

export default ErrorPage