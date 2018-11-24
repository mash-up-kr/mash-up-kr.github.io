import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import get from 'lodash/get'
import Layout from "../layout"
import PostListing from "../components/PostListing/PostListing"
import config from "../../data/SiteConfig"

export default class CategoryTemplate extends React.Component {
  render() {
    const { category } = get(this.props, 'pageContext')
    const postEdges = get(this.props, 'data.allMarkdownRemark.edges')
    return (
      <Layout>
        <div className="category-container">
          <Helmet
            title={`Posts in category "${category}" | ${config.siteTitle}`}
          />
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`
