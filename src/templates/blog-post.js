import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/SEO.js"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
      timeToRead
    }
  }
`

const DateText = styled.p`
  font-size: 16px;
  font-weight: normal;
  color: #555;
  margin-top: 12px;
`

const BlogPost = styled.div`
  font-size: 20px;
  line-height: 36px;
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`

const Title = styled.h2`
  font-size: 24px;
  margin-top: 50px;
  line-height: 36px;
  @media screen and (max-width: 500px) {
    font-size: 20px;
    line-height: 32px;
  }
`

const blogpost = ({ data }) => {
  return (
    <>
      <SEO
        title={data.markdownRemark.frontmatter.title}
        description="Written by Towfiqul Islam"
      />
      <Layout>
        <div>
          <Title>{data.markdownRemark.frontmatter.title}</Title>
          <DateText>
            {data.markdownRemark.frontmatter.date} -{" "}
            <span>{data.markdownRemark.timeToRead} min read</span>
          </DateText>

          <BlogPost
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          ></BlogPost>
        </div>
      </Layout>
    </>
  )
}

export default blogpost
