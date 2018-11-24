const config = require('./data/SiteConfig')

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: "Mash-Up"
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-tslint",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-lodash",
    `gatsby-plugin-styled-components`,
  ],
}
