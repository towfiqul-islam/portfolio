import React from "react"

import Layout from "../components/layout"
import SEO from "../components/SEO.js"
import { About, Skill } from "../styles/HomeStyles"

const IndexPage = () => {
  const openMail = () => {
    window.location.href =
      "mailto:towfiqu@gmail.com?subject=Subject&body=message%20goes%20here"
  }

  return (
    <>
      <SEO title="Home" description="Full Stack Developer" />
      <Layout>
        <div>
          <Skill>
            <h2>Skilled in</h2>
            <div>
              <span>JavaScript - </span>
              <span>Node - </span>
              <span>React - </span>
              <span>NEXT.js - </span>
              <span>Gatsby - </span>
              <span>CSS</span>
            </div>
          </Skill>
          <About>
            <h2>Few bits about me</h2>
            <p>
              I have been building web application for the last three years. And
              planning to do it for the next ten. I don't want to waste too much
              of your time babbling about how passionate I am about web
              development. Just head over to the work section to see some of my
              latest work. <br /> <br /> I also write about my work and any
              other interesting stuff I find about this industry. If you have a
              bit of time to spare, give those a shot. You will get a clearer
              picture of how I approach problem solving and my overall
              personality in general. And If you like what you see send me a
              "hi" on{" "}
              <a
                href="#!"
                onClick={openMail}
                style={{
                  textDecoration: "underline",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                towfiqu@gmail.com.
              </a>{" "}
              I will reply as soon as possible.
            </p>
          </About>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
