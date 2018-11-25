const config = require('./data/SiteConfig')

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: 'Mash-Up',
    siteTitle: 'Mash-Up - 앱 개발 동아리',
    siteTitleAlt: '',
    siteLogo: '',
    siteDescription: '',
    siteUrl: 'https://mash-up-kr.github.io',
    videoUrl: 'https://youtu.be/0rgspcbnQEA',
    menuItems: JSON.stringify([
      { label: 'MASH-UP', title: '메쉬업', url: '#mash-up' },
      { label: 'VISION', title: '목표', url: '#vision' },
      { label: 'ACTIVITY', title: '활동', url: '#activity' },
      { label: 'INTERVIEW', title: '인터뷰', url: '#interview' },
      { label: 'CONTACT', title: '연락처', url: '#contact' }
    ]),
    copyright: 'Copyright © 2018. Mash Up',
    googleAnalyticsID: '',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-tslint',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-lodash',
    'gatsby-plugin-styled-components'
  ]
}
