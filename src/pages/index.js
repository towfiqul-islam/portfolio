import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/SEO.js"

const Skill = styled.div`
  margin-top: 10px;
  h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  span {
    font-size: 12px;
    font-weight: normal;
    color: #555;
  }
`
const About = styled.div`
  margin-top: 30px;
  h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  p {
    font-weight: normal;
    line-height: 26px;
    font-size: 14px;
  }
`

const IndexPage = () => (
  <>
    <SEO title="Home" description="Full Stack Developer" />
    <Layout>
      <div>
        <Skill>
          <h2>Comfortable working with</h2>
          <div>
            <span>React - </span>
            <span>NEXT.js - </span>
            <span>Gatsby - </span>
            <span>Node - </span>
            <span>CSS - </span>
            <span>JS - </span>
            <span>MongoDB</span>
          </div>
        </Skill>
        <About>
          <h2>Few bits about me</h2>
          <p>
            I have been building web application for the last three years. And
            planning to do it for the next ten. I don't want to waste too much
            of your time babbling about how passionate I am about web
            development. Just head over to the work section to see some of my
            latest work. <br /> <br /> I also write about my work and any other
            interesting stuff I find about this industry. If you have a bit of
            time to spare, give those a shot. You will get a clearer picture of
            how I approach problem solving and my overall personality in
            general. And If you like what you see send me a "hi" on{" "}
            <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
              towfiqu@gmail.com.
            </span>{" "}
            I will reply as soon as possible.
          </p>
        </About>
      </div>
    </Layout>
  </>
)

export default IndexPage
