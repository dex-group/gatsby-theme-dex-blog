module.exports = options => {
  const {
    mdx = true
  } = options

  return {
    siteMetadata: {
      title: `Blog Title Placeholder`,
      author: `Name Placeholder`,
      description: `Description placeholder`,
      social: [{
          name: `twitter`,
          url: `https://twitter.com/dingyi`,
        },
        {
          name: `github`,
          url: `https://github.com/dingyi`,
        },
      ],
    },
    plugins: [
      mdx && {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          defaultLayouts: {
            default: require.resolve(`./src/components/layout.js`),
          },
          gatsbyRemarkPlugins: [{
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1380,
                linkImagesToOriginal: false,
              },
            },
            {
              resolve: `gatsby-remark-copy-linked-files`
            },
            {
              resolve: `gatsby-remark-numbered-footnotes`
            },
            {
              resolve: `gatsby-remark-smartypants`
            },
          ],
          remarkPlugins: [require(`remark-slug`)],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `pages`,
          path: `${__dirname}/src/pages/`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.contentPath || `content/posts`,
          name: options.contentPath || `content/posts`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.assetPath || `content/assets`,
          name: options.assetPath || `content/assets`,
        },
      },
      {
        resolve: `gatsby-plugin-prefetch-google-fonts`,
        options: {
          fonts: [{
              family: `Noto Serif SC`,
              subsets: [`chinese-simplified`],
              variants: [`900`]
            },
            {
              family: `Chivo`,
              variants: [`300`, `400`]
            },
          ],
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-twitter`,
      `gatsby-plugin-emotion`,
      `gatsby-plugin-theme-ui`,
    ].filter(Boolean),
  }
}
