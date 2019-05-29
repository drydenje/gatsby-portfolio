module.exports = {
  siteMetadata: {
    title: `its me jeremy d`,
    description: `The portfolio site of Jeremy Dryden, a Toronto-based front end web developer`,
    author: `@itsmejeremyd`,
    keywords: [
      'gatsby',
      'react',
      'unit testing',
      'integration testing',
      'test driven development',
    ],
    portfolio: ['feedwatch', 'recipies', 'beachstays'],
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/data/portfolio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/data/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jeremy-dryden-portfolio`,
        short_name: `itsmejeremyd`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icons/icon-48x48.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    'gatsby-transformer-remark',
    'gatsby-plugin-transition-link',
  ],
};
