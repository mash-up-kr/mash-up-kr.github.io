import React from 'react'
import { graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { Hero, Footer, Header, Layout } from '../components'
import theme from '../styles/theme'

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
        siteTitle: string
      }
    }
  }
}

const IndexPage: React.SFC<Props> = ({ data }) => (
  <ThemeProvider theme={theme}>
    <Hero>
      <Layout
        title={data.site.siteMetadata.siteTitle}
        header={<Header>{data.site.siteMetadata.title}</Header>}
        footer={<Footer />}
      >
        {data.site.siteMetadata.title}
      </Layout>
    </Hero>
  </ThemeProvider>
)

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        siteTitle
      }
    }
  }
`
