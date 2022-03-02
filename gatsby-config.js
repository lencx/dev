module.exports = {
  siteMetadata: {
    siteUrl: `https://github.com/lencx/dev`,
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/content`,
      },
    },
  ],
};
