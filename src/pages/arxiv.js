import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/Header'
import Seo from '../components/Seo'

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <Seo title="博客 | 海钓的猫" />
      <Header />
      <div id="main">
        <section id="content" className="main">
          <div className="image main"></div>
          <div className="blog-posts">
            {posts
              .filter((post) => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => {
                return (
                  <div className="blog-post-preview" key={post.id}>
                    <h1>
                      <Link to={'arxiv' + post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                    </h1>
                    <h3>{post.frontmatter.date}</h3>
                    <p>{post.frontmatter.abstract}</p>
                  </div>
                )
              })}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY-MMMM-DD")
            abstract
            tag
          }
        }
      }
    }
  }
`
