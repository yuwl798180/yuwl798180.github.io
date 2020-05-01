import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import HeaderGeneric from "../components/Header"

const NotFoundPage = () => (
  <Layout>
    <HeaderGeneric />
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
