import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer id="footer">
    <section>
      <h2>Acknowledgement</h2>
      <p>
        Thanks for the learning time spent in the Knowledge Engine Laboratory of
        Zhejiang University.
        <br />
        Thank you, my mentor, Professor Huajun Chen.
      </p>
      <ul className="actions">
        <li>
          <Link to="/" className="button">
            Back to Home
          </Link>
        </li>
      </ul>
    </section>

    <section>
      <h2>Contact</h2>
      <dl className="alt">
        <dt>Phone</dt>
        <dd>
          <a href="tel:15056052227">150-5605-2227</a>
        </dd>
        <dt>Email</dt>
        <dd>
          <a href="mailto:yuhaiyang@zju.edu.cn">yuhaiyang@zju.edu.cn</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://github.com/yuwl798180/"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="http://openkg.cn/" className="icon fa-dribbble alt">
            <span className="label">OpenKG</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; Design: <a href="https://www.gatsbyjs.org/">Gatsby</a>
    </p>
  </footer>
)

export default Footer
