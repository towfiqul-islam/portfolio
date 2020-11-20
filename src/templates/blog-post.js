import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/SEO.js"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        next
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
  @media screen and (max-width: 500px) {
    font-size: 12px;
    font-weight: 700;
    color: gray;
    margin-top: 10px;
  }
`

const BlogPost = styled.div`
  font-size: 18px;
  line-height: 32px;
  margin-top: 30px;
  @media screen and (max-width: 500px) {
    font-size: 16px;
    line-height: 30px;
    margin-top: 20px;
  }
`

const Title = styled.h2`
  font-size: 24px;
  margin-top: 50px;
  line-height: 36px;

  @media screen and (max-width: 500px) {
    font-size: 20px;
    margin-top: 30px;
    line-height: 32px;
  }
`

const NextRead = styled.div`
  margin-top: 40px;
  p {
    margin-bottom: 10px;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    font-size: 14px;
  }
  a {
    border-bottom: 1px solid gray;
    padding-bottom: 2px;
    line-height: 30px;
    font-size: 18px;
  }

  @media screen and (max-width: 500px) {
    p {
      font-size: 14px;
      margin-bottom: 5px;
    }
    a {
      font-size: 16px;
    }
  }
`

const createSlug = str => {
  return str.replace(/\s+/g, "-").toLowerCase()
}

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
        <NextRead>
          <p>Next Read</p>
          <Link
            to={`/blog/${createSlug(data.markdownRemark.frontmatter.next)}`}
          >
            {data.markdownRemark.frontmatter.next}{" "}
          </Link>
          <span style={{ marginLeft: "5px" }}>&#8594;</span>
        </NextRead>
      </Layout>
    </>
  )
}

export default blogpost
