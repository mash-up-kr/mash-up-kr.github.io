import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import map from 'lodash/map'
import { media, readableHiddenContent } from '../styles'

const Navbar: React.FunctionComponent = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            menuItems
          }
        }
      }
    `}
    render={data => (
      <nav>
        <Heading>글로벌 네비게이션</Heading>
        <Menu>
          {map(JSON.parse(data.site.siteMetadata.menuItems), item => (
            <MenuItem key={item.label}>
              <LinkBox to={item.url}>{item.label}</LinkBox>
            </MenuItem>
          ))}
        </Menu>
      </nav>
    )}
  />
)

export default Navbar

const Heading = styled.h2`
  ${readableHiddenContent}
`

const Menu = styled.ul`
  overflow: auto;
  display: flex;
  color: #FFF;
  border-bottom: 1px solid #FFF;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
  ${media.mobile`
    justify-content: space-around;
  `}
`

const MenuItem = styled.li``

const LinkBox = styled(Link)`
  display: block;
  height: 100%;
  padding: 0.8rem;
`
