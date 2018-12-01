module.exports = {
  siteMetadata: {
    siteTitle: 'Mash-Up - 앱 개발 동아리',
    siteTitleAlt: '',
    siteLogo: '',
    siteDescription: '',
    siteUrl: 'https://mash-up-kr.github.io',
    title: 'Mash-Up',
    videoUrl: 'https://youtu.be/0rgspcbnQEA',
    menuItems: JSON.stringify([
      { label: 'MASH-UP', title: '메쉬업', url: '#mash-up' },
      { label: 'VISION', title: '목표', url: '#vision' },
      { label: 'ACTIVITY', title: '활동', url: '#activity' },
      { label: 'INTERVIEW', title: '인터뷰', url: '#interview' },
      { label: 'CONTACT', title: '연락처', url: '#contact' },
    ]),
    infoItems: JSON.stringify([
      { title: '창립연도', content: '2006', unit: '년' },
      { title: '총 활동 인원', content: '150', unit: '명' },
      { title: '현 활동 인원', content: '56', unit: '명' },
      { title: '개발된 앱', content: '47', unit: '개' },
      { title: '평균 나이', content: '26.4', unit: '세' },
    ]),
    copyright: 'Copyright © 2018. Mash Up',
    googleAnalyticsID: '',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-tslint',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-lodash',
    'gatsby-plugin-styled-components',
  ],
}
