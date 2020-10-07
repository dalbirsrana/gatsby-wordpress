import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"


const Contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Recent Work" />
      <h4>
        {data.wordpressPage.title}
      </h4>      
      <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
      <div>
        {data.wordpressPage._links.wp_featuredmedia.map((item)=>(
          <img src={item.href} alt="post" />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    wordpressPage(slug: {eq: "contact"}) {
      title
      content
      _links {
        wp_featuredmedia {
          href
        }
      }
    }
  }
`

export default Contact