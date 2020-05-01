import React from "react"
import { Link } from "gatsby"
import { Waypoint } from "react-waypoint"
import Header from "../components/HeaderIndex"
import Layout from "../components/layout"
import Nav from "../components/Nav"
import pic01 from "../assets/images/Blog.svg"

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
                <span className="icon major style1 fa-code"></span>
                <h3>Code Reproduction</h3>
                <p>
                  Data Structure Implementation
                  <br />
                  Machine Learning Algorithm Reproduction
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Knowledge Article</h3>
                <p>
                  Personal Learning Notebook
                  <br />
                  Knowledge Graph, Meta Learning
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
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
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/arxiv" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
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
                  <Link to="/about" className="button special">
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
