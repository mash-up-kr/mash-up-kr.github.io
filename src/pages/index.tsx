import React from 'react'
import { graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { Background, Footer, Header, Layout } from '../components'
import theme from '../styles/theme'
import config from '../../data/SiteConfig'

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

class Index extends React.Component<Props> {
  render() {
    const { data } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Background>
          <Layout
            title={config.siteTitle}
            header={<Header>Header</Header>}
            footer={<Footer />}
          >
            {data.site.siteMetadata.title}
          </Layout>
        </Background>
      </ThemeProvider>
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
