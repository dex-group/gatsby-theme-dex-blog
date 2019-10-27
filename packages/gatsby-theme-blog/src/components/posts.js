import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Flex, Box, Styled, css } from "theme-ui"
import Layout from "./layout"
import SEO from "./seo"

const Posts = ({ location, posts, siteTitle }) => (
  <Layout location={location} title={siteTitle}>
    <main>
      {posts.map(({ node }) => {
        const title = node.title || node.slug
        const keywords = node.keywords || []
        return (
          <Fragment key={node.slug}>
            <SEO title="Home" keywords={keywords} />
            <Flex
              css={css({
                alignItems: 'center',
                mb: 4,
              })}
            >
              <Styled.h2
                css={css({
                  width: '70%',
                  fontSize: '1.8vw',
                  mx: 0,
                  my: 0,
                })}
              >
                <Styled.a
                  as={Link}
                  to={node.slug}
                >
                  {title}
                </Styled.a>
              </Styled.h2>
              <Box
                css={css({
                  marginLeft: 'auto',
                  fontFamily: 'Chivo',
                  fontSize: '1.4vw',
                  fontWeight: 300,
                })}
              >
                {node.date}
              </Box>
            </Flex>
          </Fragment>
        )
      })}
    </main>
  </Layout>
)

export default Posts
