import React from 'react'
import { graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { Hero, Layout } from '../components'
import { Footer, Goal, Header, PrimaryActs, BasicInfo } from '../templates'
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
        <BasicInfo />
        <PrimaryActs />
        <Goal />
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
