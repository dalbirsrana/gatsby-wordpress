import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ data, siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <ul>
      { 
        data.allWordpressCategory.edges.map(( { node } ) => (
          <div> { node.name } </div>
          ))
        }

      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export const query = graphql`
  {
    allWordpressCategory(filter: {slug: {ne: "uncategorized"}}) {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`


export default Header
