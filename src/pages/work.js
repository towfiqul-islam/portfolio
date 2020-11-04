import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/SEO.js"

const Title = styled.h2`
  font-size: 12px;
  text-transform: uppercase;
  color: gray;
  letter-spacing: 1.2px;
`

const WorkCard = styled.div`
  margin-top: 30px;
  line-height: 30px;
  h3 {
    margin-bottom: 5px;
    font-size: 20px;
  }

  p {
    font-size: 14px;
    /* line-height: 30px; */
  }
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const WorkPage = () => (
  <>
    <SEO title="Work" description="Full Stack Developer" />
    <Layout>
      <div>
        <Title>These are my most recent work</Title>
        <WorkCard>
          <TitleWrapper>
            {" "}
            <div
              style={{
                width: "20px",
                height: "6px",
                background: "#CD3E3E",
                borderRadius: "10px",
                marginBottom: "4px",
              }}
            ></div>
            <h3>
              <a
                href="https://spotr.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spotr.com.bd
              </a>
            </h3>
          </TitleWrapper>
          <p>Role: Full Stack Developer</p>
          <p>Built with: NextJS, TailwindCSS, MongoDB</p>
        </WorkCard>
        <WorkCard>
          <TitleWrapper>
            {" "}
            <div
              style={{
                width: "20px",
                height: "6px",
                background: "#59CC8F",
                borderRadius: "10px",
                marginBottom: "4px",
              }}
            ></div>
            <h3>
              <a
                href="https://addons.mozilla.org/en-US/firefox/addon/stay-anime/?utm_content=search&utm_medium=referral&utm_source=addons.mozilla.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stay Anime - Firefox Plugin
              </a>
            </h3>
          </TitleWrapper>
          <p>Role: Full Stack Developer</p>
          <p>Built with: React, CSS, Custom API</p>
        </WorkCard>
        <WorkCard>
          <TitleWrapper>
            {" "}
            <div
              style={{
                width: "20px",
                height: "6px",
                background: "#99ABE4",
                borderRadius: "10px",
                marginBottom: "4px",
              }}
            ></div>
            <h3>
              <a
                href="https://amscare.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Advanced Medical Care
              </a>
            </h3>
          </TitleWrapper>
          <p>Role: Full Stack Developer</p>
          <p>Built with: React, Node, MongoDB</p>
        </WorkCard>
        <WorkCard>
          <TitleWrapper>
            {" "}
            <div
              style={{
                width: "20px",
                height: "6px",
                background: "#343740",
                borderRadius: "10px",
                marginBottom: "4px",
              }}
            ></div>
            <h3>
              <a
                href="https://exchangeyourbook.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Exchange
              </a>
            </h3>
          </TitleWrapper>
          <p>Role: Full Stack Developer</p>
          <p>Built with: HTML, CSS, JS, PHP, MySQL</p>
        </WorkCard>
      </div>
    </Layout>
  </>
)

export default WorkPage
