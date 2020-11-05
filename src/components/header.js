import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"

import Img from "gatsby-image"
import {
  MobileNavigation,
  Name,
  Navigation,
  NavTitle,
  Social,
  Title,
  TopHeader,
} from "../styles/HeaderStyles"

const Header = ({ location }) => {
  const openMail = () => {
    window.location.href =
      "mailto:towfiqu@gmail.com?subject=Subject&body=message%20goes%20here"
  }

  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/self_edited.png" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  // console.log(image.file.childImageSharp.fixed)

  return (
    <header>
      <MobileNavigation>
        <div>
          <Link
            style={{
              color:
                location !== undefined &&
                location.pathname === "/work" &&
                "gray",
            }}
            to="/work"
          >
            Work
          </Link>
        </div>
        <div>
          <Link
            style={{
              color:
                location !== undefined &&
                location.pathname === "/blog" &&
                "gray",
            }}
            to="/blog"
          >
            Blog
          </Link>
        </div>
      </MobileNavigation>
      <TopHeader>
        <Link to="/">
          <Img
            style={{
              borderRadius: "50%",
              boxShadow: "0px 2px 4px 2px rgba(0, 0, 0, 0.2)",
            }}
            fixed={image.file.childImageSharp.fixed}
            alt="Towfiqul Islam"
          />
        </Link>

        <NavTitle>
          <Name>
            <Link to="/">Towfiqul Islam </Link>{" "}
            <Title> - Full Stack Developer</Title>
          </Name>

          <Social>
            <div>
              <a
                href="https://twitter.com/Towfiq_ul_Islam"
                target="_blank"
                rel="noopener noreferrer"
              >
                twitter -{" "}
              </a>
              <a
                href="https://github.com/towfiqul-islam"
                target="_blank"
                rel="noopener noreferrer"
              >
                github -{" "}
              </a>
              <a
                title="towfiqu@gmail.com"
                onClick={openMail}
                href="#!"
                target="_blank"
                rel="noopener noreferrer"
              >
                gmail
              </a>
            </div>
          </Social>
        </NavTitle>

        <Navigation>
          <div>
            <Link
              style={{
                color:
                  location !== undefined &&
                  location.pathname === "/work" &&
                  "gray",
              }}
              to="/work"
            >
              Work
            </Link>
          </div>
          <div>
            <Link
              style={{
                color:
                  location !== undefined &&
                  location.pathname === "/blog" &&
                  "gray",
              }}
              to="/blog"
            >
              Blog
            </Link>
          </div>
        </Navigation>
      </TopHeader>
    </header>
  )
}

export default Header
