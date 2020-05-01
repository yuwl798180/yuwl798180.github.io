import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import HeaderGeneric from "../components/Header"
import Seo from "../components/Seo"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Seo title={post.frontmatter.title} description={post.excerpt} />
      <HeaderGeneric />
      <div id="main">
        <section id="content" className="main">
          <div>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`
