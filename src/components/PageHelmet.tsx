import React from 'react'
import Helmet from 'react-helmet'

interface Props {
  title: string
  description?: string
}

const PageHelmet: React.SFC<Props> = ({ title }) => (
  <Helmet
    title={title}
  />
)

export default PageHelmet
