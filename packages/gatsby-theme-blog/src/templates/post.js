import React from "react"
import { graphql } from "gatsby"

import Post from "../components/post"

export default ({ pageContext: { previous, next }, location, data }) => (
  <Post
    data={data}
    location={location}
    previous={previous}
    next={next}
  />
)

export const pageQuery = graphql`
  query($id: String!) {
    post: blogPost(id: { eq: $id }) {
      id
      title
      date(formatString: "YYYY-MM-DD")
      excerpt
      body
    }
    site: site {
      siteMetadata {
        title
      }
    }
  }
`
