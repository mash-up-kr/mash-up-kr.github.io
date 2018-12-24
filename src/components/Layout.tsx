import React from 'react'
import styled from 'styled-components'
import PageHelmet from './PageHelmet'
import { GlobalStyle } from '../styles'

interface Props {
  title: string
  header: React.ReactNode
  footer: React.ReactNode
  children: React.ReactNode | string
}

const Layout: React.FunctionComponent<Props> = ({
  title, header, footer, children,
}) => (
  <>
    <PageHelmet title={title} />
    <GlobalStyle />
    <Wrapper>
      <Header>{header}</Header>
      <Content>{children}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  </>
)

export default Layout

const Wrapper = styled.div``

const Header = styled.div``

const Content = styled.div``

const Footer = styled.div``
