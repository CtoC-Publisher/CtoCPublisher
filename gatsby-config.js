module.exports = {
  siteMetadata: {
    title: `CtoC Books - Independent Bookshop`,
    description: `Amazon affiliate bookshop specializing in curated bestsellers, fiction, and non-fiction books.`,
    siteUrl: `https://ctoc-publisher.github.io/CtoCPublisher`,
  },
  pathPrefix: "/CtoCPublisher",
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`autoprefixer`)],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    `gatsby-adapter-netlify`,
  ],
};
