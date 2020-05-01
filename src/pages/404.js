import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/Header'
import Seo from '../components/Seo'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found ｜ 海钓的猫" />
    <Header />
    <div id="main">
      <section id="content" className="main">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <br />
        <Link to="/" className="button">
          Back to Home
        </Link>
      </section>
    </div>
  </Layout>
)

export default NotFoundPage
