import styled from 'styled-components'
import { mainPhoto } from '../../static/images'

const Hero = styled.div`
  position: relative;
  height: 3333px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1000;
    width: 100%;
    height: 100%;
    background: #7c72eb;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1000;
    opacity: .8;
    width: 100%;
    height: 100%;
    background: url(${mainPhoto}) center top / 150% no-repeat;
    filter: blur(2px);
  }
`

export default Hero
