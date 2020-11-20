import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "normalize.css"

import styled from "styled-components"
import { Link } from "gatsby"
import GlobalStyles from "../styles/GlobalStyles"

const FooterNav = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  font-weight: normal;
  margin-bottom: 10px;
  font-size: 14px;
  a {
    color: gray;
  }
  a:hover {
    color: #333;
    text-decoration: underline;
  }

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`

const Footer = styled.footer`
  margin-top: 40px;
  margin-bottom: 30px;
  text-align: center;
  color: gray;
  line-height: 20px;
  p {
    font-size: 12px;
  }
`

const Layout = ({ children, location }) => {
  return (
    <>
      <GlobalStyles />
      <Header location={location} />
      <div>
        <main>{children}</main>
        <Footer>
          <FooterNav>
            <span>
              <Link to="/">HOME</Link>
            </span>
            <span>
              <Link to="/work">WORK</Link>
            </span>
            <span>
              <Link to="/blog">BLOG</Link>
            </span>
          </FooterNav>
          <p>
            {" "}
            © {new Date().getFullYear()}, Made by
            {` `}
            <span>Towfiqul Islam</span>
          </p>
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
