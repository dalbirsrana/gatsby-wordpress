import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"


const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="My Blog" />
      <h4>Posts</h4>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div>
          <Link to={`/post/${node.slug}`}>
            <p>{node.title}</p>
          </Link>
          <div dangerouslySetInnerHTML={{ 
            __html: node.excerpt.replace('https://dalbir.wmdd.ca/', 'post/') 
            }} />
        </div>
      ))}
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
  }
`

export default Blog