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
  font-size: 12px;
  font-weight: bold;
  color: gray;
  margin-top: 8px;
`

const BlogPost = styled.div`
  line-height: 30px;
`

const Title = styled.h2`
  @media screen and (max-width: 500px) {
    font-size: 20px;
    line-height: 25px;
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
