import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "normalize.css"

import styled from "styled-components"
import { Link } from "gatsby"
import GlobalStyles from "../styles/GlobalStyles"

const FooterNav = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  font-weight: normal;
  margin-bottom: 10px;
  a {
    color: gray;
  }
  a:hover {
    color: #333;
    text-decoration: underline;
  }
`

const Layout = ({ children, location }) => {
  return (
    <>
      <GlobalStyles />
      <Header location={location} />
      <div>
        <main>{children}</main>
        <footer
          style={{
            marginTop: "30PX",
            marginBottom: "30px",
            textAlign: "center",
            fontSize: "12px",
            color: "gray",
          }}
        >
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
          © {new Date().getFullYear()}, Made by
          {` `}
          <span>Towfiqul Islam</span>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
