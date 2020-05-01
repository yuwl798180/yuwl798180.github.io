import React from "react"
import Layout from "../components/layout"
import HeaderGeneric from "../components/Header"
import pic04 from "../assets/images/pic04.jpg"

class Generic extends React.Component {
  render() {
    return (
      <Layout>
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={pic04} alt="" />
            </span>
            <h2>Magna feugiat lorem</h2>
            <p>Donec eget ex magna.</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
