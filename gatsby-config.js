module.exports = {
  siteMetadata: {
    siteUrl: `https://github.com/lencx/interview`,
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
