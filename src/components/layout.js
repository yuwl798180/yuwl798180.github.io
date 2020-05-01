import React from "react"
import Footer from "./Footer"
import "../assets/scss/main.scss"
import Seo from "../components/Seo"

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: "is-loading",
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: "" })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    const { children } = this.props
    return (
      <div className={`body ${this.state.loading}`}>
        <Seo />
        <div id="wrapper">
          {children}
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout
