import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/SEO.js"

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 12px;
  text-transform: uppercase;
  color: gray;
  letter-spacing: 1.2px;
`

const WorkCard = styled.div`
  margin-bottom: 30px;
  line-height: 30px;
  h3 {
    margin-bottom: 5px;
    font-size: 20px;
  }

  p {
    font-size: 14px;
    line-height: 25px;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const SkillTag = styled.div`
  margin-top: 8px;
  span {
    background: #e4e4e4;
    padding: 5px 8px;
    margin-right: 5px;
    font-size: 12px;
  }
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
          <p>
            A web application for people to find best smartphones from various
            e-commerce sites in Bangladesh.
          </p>
          <SkillTag>
            <span>NextJS</span>
            <span>TailwindCSS</span>
            <span>MongoDB</span>
          </SkillTag>
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
          <p>
            A browser plugin which shows what animes are airing on that week.
            Added option of linking a streaming site to the individual anime.
          </p>

          <SkillTag>
            <span>React</span>
            <span>CSS</span>
            <span>REST API</span>
          </SkillTag>
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
          <p>
            A fictional healthcare service which lets people find nearest
            hospital from their location, book appointment with doctors, rent
            hospital cabin for seriously ill patient, upload and store old
            medical records in the app. Built for an university final year
            project.
          </p>

          <SkillTag>
            <span>React</span>
            <span>Node</span>
            <span>MongoDB</span>
          </SkillTag>
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
          <p>
            An experimental social media site built for paper book
            enthusiasts/collectors. Main features include sharing book
            collections with other users, in app messaging.
          </p>

          <SkillTag>
            <span>HTML</span>
            <span>CSS</span>
            <span>JS</span>
            <span>PHP</span>
            <span>MySQL</span>
          </SkillTag>
        </WorkCard>
      </div>
    </Layout>
  </>
)

export default WorkPage
