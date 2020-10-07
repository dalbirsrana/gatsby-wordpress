import React from "react"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <div className="home-page">
        <section className="hero-section">
          <div className="profile-pic"></div>
          <div>Hi, I'm Dalbir, Front-end Web developer</div>
        </section>
        <section>
          <h2>Skills</h2>
        </section>
        <section>
          <h2>Recent work</h2>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
