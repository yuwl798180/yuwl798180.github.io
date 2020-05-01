/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `海钓的猫`,
    description: `海钓的猫: A simple blog for record knowledge...`,
    author: `Haiyang Yu`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `arxiv`,
        path: `${__dirname}/src/arxiv`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `海钓的猫：个人博客空间`,
        short_name: `海钓的猫`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `minimal-ui`,
        icon: `src/assets/images/website-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sass",
    `gatsby-plugin-emotion`,
  ],
}
