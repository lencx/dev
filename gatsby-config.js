module.exports = {
  siteMetadata: {
    title: `DEV`,
    description: `🙈 开发那些事儿`,
    repo: `https://github.com/lencx/dev`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `discussions`,
        path: `${__dirname}/discussions`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@comps': 'src/components',
          '@layouts': 'src/layouts',
          '@pages': 'src/pages',
          '@styles': 'src/styles',
          '@hooks': 'src/hooks',
          '@templates': 'src/templates',
          '@utils': 'src/utils',
          '@icons': 'src/icons',
        },
        extensions: ['js', 'jsx', 'ts', 'tsx'],
      },
    },
  ],
};
