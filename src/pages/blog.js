import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/SEO.js"
import { BlogCard, DateText, ExcerptText } from "../styles/BlogStyles"

function BlogPage(props) {
  const data = useStaticQuery(graphql`
    query {
      posts: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
            }
            timeToRead
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
    <>
      <SEO title="Blog" description="Full Stack Developer" />
      <Layout location={props.location}>
        <div>
          {/* <Title>I write every week</Title> */}
          {result.map((post, i) => (
            <BlogCard key={i}>
              <Link to={`/blog/${post.node.fields.slug}`}>
                <h3>{post.node.frontmatter.title}</h3>
                <DateText>
                  {post.node.frontmatter.date} - {post.node.timeToRead} min read
                </DateText>
                <ExcerptText>{post.node.excerpt}</ExcerptText>{" "}
              </Link>
            </BlogCard>
          ))}
        </div>
      </Layout>
    </>
  )
}

export default BlogPage
