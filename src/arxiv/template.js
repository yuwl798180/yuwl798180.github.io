import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/Header'
import Seo from '../components/Seo'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.abstract}
      />
      <Header />
      <div id="main">
        <section id="content" className="main">
        <div className="image main">
        <h1 style={{textAlign:"center",lineHeight:'4em', whiteSpace: "nowrap"}} >{post.frontmatter.title}</h1>
        </div>
          <div>
            
            <blockquote>{post.frontmatter.abstract}</blockquote>
            <ul className="actions">
              {post.frontmatter.tag.split('，').map((item) => (
                <li key={item.toString()}>
                  <a href="/about" className="button tag" >
                    {item.trim()}
                  </a>
                </li>
              ))}
            </ul>
            <hr />
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
        abstract
        tag
      }
    }
  }
`
