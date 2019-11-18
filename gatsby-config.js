module.exports = {
  siteMetadata: {
    title: `lkskrt`,
    description: `Personal homepage`,
    author: `@lkskrt`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lkskrt`,
        short_name: `lkskrt`,
        start_url: `/`,
        background_color: `#F0F2F5`,
        theme_color: `#F0F2F5`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        contentPath: './src/decks',
        basePath: '/talks',
      },
    },
  ],
};
