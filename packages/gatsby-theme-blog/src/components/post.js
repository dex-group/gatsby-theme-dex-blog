import React from "react"
import { Box, Styled, css } from "theme-ui"

import PostFooter from "./post-footer"
import Layout from "./layout"
import SEO from "./seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} title={title}>
    <SEO title={post.title} description={post.excerpt} />
    <main>
      <Box
        css={css({
          mb: 5,
        })}
      >
        <Styled.h1>{post.title}</Styled.h1>
        <Styled.div
          css={css({
            fontSize: 1,
            mt: -3,
            mb: 3,
          })}
        >
          {post.date}
        </Styled.div>
      </Box>
      <MDXRenderer>{post.body}</MDXRenderer>
    </main>
    <PostFooter {...{ previous, next }} />
  </Layout>
)

export default Post
