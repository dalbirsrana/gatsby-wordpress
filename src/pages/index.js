import React from "react"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="home" />
      <h4>HOme</h4>
      <div>
        Home Body
      </div>
    </Layout>
  )
}

export default IndexPage