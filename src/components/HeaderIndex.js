import React from 'react'
import { css } from '@emotion/core'
import logo from '../assets/images/logo.svg'

const Header = () => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="logo" />
    </span>
    <p
      css={css`
        font-family: Arial, x-locale-body, sans-serif;
      `}
    >
      Hi, I am Haiyang Yu, a master of computer technology.
      <br />
      My research interest focuses on Natural Language Processing, Knowledge
      Graph.
    </p>
  </header>
)

export default Header
