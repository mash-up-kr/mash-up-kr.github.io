import styled from 'styled-components'
import { mainPhoto, backgroundImage } from '../assets/images'
import { media } from '../styles'

const Hero = styled.div`
  position: relative;
  background:
    url(${backgroundImage}) 0 -250px / cover no-repeat,
    url(${mainPhoto}) center top / 150% no-repeat,
    ${({ theme }: { theme: { backgroundColor: string } }) => theme.backgroundColor} linear-gradient(to bottom, #7C72EB, #7C72EB 88%, #4C3599 100%) no-repeat;
  ${media.tablet`
    background:
      url(${backgroundImage}) 0 600px / 100% no-repeat,
      url(${mainPhoto}) center top / 100% no-repeat,
      linear-gradient(to bottom, #7C72EB, #7C72EB 88%, #4C3599 100%) no-repeat;
  `}
`

export default Hero
