import React from 'react'
import { Link } from 'gatsby'
import { Waypoint } from 'react-waypoint'
import Header from '../components/HeaderIndex'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Seo from '../components/Seo'
import pic01 from '../assets/images/Blog.svg'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Seo />
        <Header />
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Welcome</h2>
                </header>
                <p>
                  This is my personal blog, used to record learning knowledge.
                  <br />
                  And it is also an online resume for a job.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/about" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>

              <span className="image">
                <img src={pic01} alt="blog" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Main Content</h2>
            </header>
            <ul className="features">
              <li>
                <Link
                  to="/arxiv"
                  className="icon major style1 fa-code home-index"
                ></Link>
                <h3>Code Reproduction</h3>
                <p>
                  Data Structure Implementation
                  <br />
                  Machine Learning Algorithm Reproduction
                </p>
              </li>
              <li>
                <Link
                  to="/arxiv"
                  className="icon major style3 fa-copy home-index"
                ></Link>
                <h3>Knowledge Article</h3>
                <p>
                  Personal Learning Notebook
                  <br />
                  Knowledge Graph, Meta Learning
                </p>
              </li>
              <li>
                <Link
                  to="/arxiv"
                  className="icon major style5 fa-diamond home-index"
                ></Link>
                <h3>Useful Link</h3>
                <p>
                  Common External Websites
                  <br />
                  Well-known Blog
                </p>
              </li>
            </ul>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Article</h2>
              <p>
                Focus on machine learning and deep learning algorithm research.
                <br />
                Currently concentrating on solving the problem of information
                extraction(IE) in low resource scenarios.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <Link to="/arxiv" style={{ borderBottomColor: 'transparent' }}>
                  <span className="icon fa-book"></span>
                  <strong>130</strong> NLP
                </Link>
              </li>
              <li className="style2">
                <Link to="/arxiv" style={{ borderBottomColor: 'transparent' }}>
                  <span className="icon fa-leanpub"></span>
                  <strong>192</strong> NLG
                </Link>
              </li>
              <li className="style3">
                <Link to="/arxiv" style={{ borderBottomColor: 'transparent' }}>
                  <span className="icon fa-globe"></span>
                  <strong>148</strong> KG
                </Link>
              </li>
              <li className="style4">
                <Link to="/arxiv" style={{ borderBottomColor: 'transparent' }}>
                  <span className="icon fa-laptop"></span>
                  <strong>496</strong> Essay
                </Link>
              </li>
              {/* <li className="style5">
                <Link to="/arxiv" style={{ borderBottomColor: 'transparent' }}>
                  <span className="icon fa-diamond"></span>
                  <strong>1,024</strong> Nullam
                </Link>
              </li> */}
            </ul>
          </section>
          <section id="cta" className="main special">
            <header className="major">
              <h2>Contact Me</h2>
              <p>
                I really welcome all kinds of academic discussions or just
                simply making friends.
                <br />
                At present, I am looking for a job, and a suitable job
                recommendation is very welcome, thanks!
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/about" className="button">
                    Download Resume
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
