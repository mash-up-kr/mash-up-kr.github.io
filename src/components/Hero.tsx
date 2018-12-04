import styled from 'styled-components'
import { mainPhoto, mobileBg, appImage } from '../assets/images'

const Hero = styled.div`
  position: relative;
  background: ${({ theme }) => theme.backgroundColor} url(${mainPhoto}) center top / 150% no-repeat;
  &::before {
    content: '';
    position: absolute;
    top: 40%;
    width: 100%;
    height: 1800px;
    background:
      url(${appImage}) 130% 90% no-repeat,
      url(${mobileBg}) no-repeat;
    background-size: 80%, cover;
  }
  & > * {
    position: relative;
  }
`

export default Hero
