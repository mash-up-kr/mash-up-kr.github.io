import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import config from '../../data/SiteConfig'

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  }
}

class Index extends React.Component<Props> {
  render() {
    const { data } = this.props
    return (
      <div>
        <Helmet title={config.siteTitle} />
        {data.site.siteMetadata.title}
      </div>
    )
  }
}

export default Index

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
