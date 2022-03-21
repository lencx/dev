module.exports = {
  siteMetadata: {
    title: `DEV`,
    description: `🙈 开发那些事儿`,
    repo: `https://github.com/lencx/dev`,
    rss: '/feed.xml',
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DEV`,
        short_name: `DEV`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#232629`,
        display: `standalone`,
        icon: `./src/static/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          importWorkboxFrom: `cdn`,
        },
      },
    },
  ],
};
