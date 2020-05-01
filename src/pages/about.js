import React from "react"
import Layout from "../components/layout"
import HeaderGeneric from "../components/Header"
import pic04 from "../assets/images/pic04.jpg"

class Generic extends React.Component {
  render() {
    return (
      <Layout>
        {/* <Helmet title="Generic Page Title" /> */}
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={pic04} alt="" />
            </span>
            <h2>关于博客</h2>
            <p>
              博客使用 <a href="https://www.gatsbyjs.org/">Gatsby</a>{" "}
              构建。主题设计参考了{" "}
              <a href="https://github.com/codebushi/gatsby-starter-stellar">
                gatsby-starter-stellar
              </a>
              。
            </p>
            <h2>关于博主</h2>
            <p>本科就读于安徽大学，硕士就读于浙江大学。</p>
            <p>
              研究方向为自然语言处理、知识图谱。现主要结合元学习、终身学习、终身学习低资源场景下的信息抽取难题。
            </p>
            <h2>关于就业</h2>
            <p>现寻求一份nlp、kg领域的算法工程师工作。具体简历见下方按钮。</p>
            <p>
              <a href="#top" className="button">
                个人简历
              </a>
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
