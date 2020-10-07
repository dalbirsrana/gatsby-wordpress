/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "../elegant_font/style.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query wordpressAndSiteTitleQuery {
      
      site {
        siteMetadata {
          title
        }
      }
    
      allWordpressCategory(filter: {slug: {ne: "uncategorized"}}) {
        edges {
          node {
            name
            slug
          }
        }
      }
    }

  `)

  return (
      <div className="site-wrapper">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />      
        <div className="site-content">
          <main>{children}</main>
          <footer>
            <p>dalbir.me © {new Date().getFullYear()}, Powered by {` `}<a href="https://www.gatsbyjs.com">Gatsby</a></p>
            </footer>
        </div>
        
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}



export default Layout
