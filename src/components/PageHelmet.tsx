import React from 'react'
import Helmet from 'react-helmet'

interface Props {
  title: string
  description?: string
}

const PageHelmet: React.FunctionComponent<Props> = ({ title }) => (
  <Helmet
    title={title}
  />
)

export default PageHelmet
