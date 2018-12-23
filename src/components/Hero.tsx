import styled from 'styled-components'
import { mainPhoto, backgroundImage, appImage } from '../assets/images'

const Hero = styled.div`
  position: relative;
  background:
    url(${backgroundImage}) 0 -250px / cover no-repeat,
    url(${mainPhoto}) center top / 150% no-repeat,
    ${({ theme }) => theme.backgroundColor} linear-gradient(to bottom, #7C72EB, #7C72EB 88%, #4C3599 100%) no-repeat;
`

export default Hero
