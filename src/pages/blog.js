import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const BlogCard = styled.div`
  margin-top: 30px;
  line-height: 30px;
  h3 {
    /* margin-bottom: 1px; */
    font-size: 20px;
    line-height: 25px;
  }
`

const DateText = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: gray;
`

const ExcerptText = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 25px;
  max-width: 500px;
  /* font-weight: bold; */
  /* color: gray; */
`

function BlogPage() {
  const data = useStaticQuery(graphql`
    query {
      posts: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
            }
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // console.log(data.posts.edges)
  const result = data.posts.edges
  return (
    <Layout>
      <div>
        {/* <Title>I write every week</Title> */}
        {result.map((post, i) => (
          <BlogCard key={i}>
            <Link to={`/blog/${post.node.fields.slug}`}>
              <h3>{post.node.frontmatter.title}</h3>
            </Link>

            <DateText>{post.node.frontmatter.date}</DateText>
            <ExcerptText>{post.node.excerpt}</ExcerptText>
          </BlogCard>
        ))}
      </div>
    </Layout>
  )
}

export default BlogPage
