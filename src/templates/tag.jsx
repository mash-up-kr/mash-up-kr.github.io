import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import get from 'lodash/get'
import Layout from "../layout"
import PostListing from "../components/PostListing/PostListing"
import config from "../../data/SiteConfig"

export default class TagTemplate extends React.Component {
  render() {
    const { tag } = get(this.props, 'pageContext')
    const postEdges = get(this.props, 'data.allMarkdownRemark.edges')
    return (
      <Layout>
        <div className="tag-container">
          <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
