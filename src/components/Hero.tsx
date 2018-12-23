import styled from 'styled-components'
import { mainPhoto, backgroundImage, appImage } from '../assets/images'

const Hero = styled.div`
  position: relative;
  background:
    url(${backgroundImage}) 0 -250px / cover no-repeat,
    ${({ theme }) => theme.backgroundColor} url(${mainPhoto}) center top / 150% no-repeat;
`

export default Hero
