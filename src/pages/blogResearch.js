import React from "react"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"


const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="home" />
      <h4>Posts</h4>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div>
          <Link to={node.slug}>
            <p>{node.title}</p>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}

      <pre>
        {JSON.stringify(data)}
      </pre>
    </Layout>
  )
}

export const query = graphql`
  {
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
        }
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
`

export default IndexPage