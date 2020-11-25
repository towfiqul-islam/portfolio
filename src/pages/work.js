import React from "react"

import Layout from "../components/layout"
import SEO from "../components/SEO.js"
import {
  SkillTag,
  TitleWrapper,
  VisitLink,
  WorkCard,
} from "../styles/WorkStyles"

const WorkPage = props => (
  <>
    <SEO title="Work" description="Full Stack Developer" />
    <Layout location={props.location}>
      <div>
        {/* <Title>These are my most recent work</Title> */}
        <WorkCard>
          <TitleWrapper>
            <h3>
              <a
                href="https://simplifind.com.bd"
                target="_blank"
                rel="noopener noreferrer"
              >
                Simplifind
              </a>
            </h3>
          </TitleWrapper>
          <p>
            A web application for people to choose smartphones based on their
            preferences from various e-commerce sites in Bangladesh.
          </p>
          <VisitLink
            href="https://spotr.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the site <span>&#8594;</span>
          </VisitLink>
          <SkillTag>
            <span>NextJS</span>
            <span>TailwindCSS</span>
            <span>MongoDB</span>
          </SkillTag>
        </WorkCard>
        <WorkCard>
          <TitleWrapper>
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

          <VisitLink
            href="https://addons.mozilla.org/en-US/firefox/addon/stay-anime/?utm_content=search&utm_medium=referral&utm_source=addons.mozilla.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download the plugin <span>&#8594;</span>
          </VisitLink>

          <SkillTag>
            <span>React</span>
            <span>CSS</span>
            <span>REST API</span>
          </SkillTag>
        </WorkCard>
        <WorkCard>
          <TitleWrapper>
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

          <VisitLink
            href="https://amscare.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the site <span>&#8594;</span>
          </VisitLink>

          <SkillTag>
            <span>React</span>
            <span>Node</span>
            <span>MongoDB</span>
          </SkillTag>
        </WorkCard>
        <WorkCard>
          <TitleWrapper>
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

          <VisitLink
            href="https://exchangeyourbook.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the site <span>&#8594;</span>
          </VisitLink>

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
