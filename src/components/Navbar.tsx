import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import map from 'lodash/map'
import media from '../styles/media'
import readableHiddenContent from '../styles/readable-hidden-content'
import config from '../../data/siteConfig'

const Navbar: React.SFC = () => (
  <nav>
    <Heading>글로벌 네비게이션</Heading>
    <Menu>
      {map(config.navItems, item => (
        <MenuItem key={item.label}>
          <LinkBox to={item.url}>{item.label}</LinkBox>
        </MenuItem>
      ))}
    </Menu>
  </nav>
)

export default Navbar

const Heading = styled.h2`
  ${readableHiddenContent}
`

const Menu = styled.ul`
  overflow: auto;
  display: flex;
  color: #fff;
  border-bottom: 1px solid #fff;
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
