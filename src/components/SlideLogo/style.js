import styled, { keyframes } from 'styled-components'
import { PRIMARY, BROWN } from '@utility/COLORS'
// Keyframes animations
const slideUpAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-40px);
    opacity: 1;
  }
`

const slideDownAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(40px);
    opacity: 1;
  }
`

// Styled components
export const MediaQueryStyles = styled.div`
  @media only screen and (max-width: 600px) {
    .slide-effect,
    .text,
    .slideDown,
    .slideUp {
      font-size: 15px;
    }
  }
`

export const CommonTextStyles = styled.div`
  position: relative;
  font-family: tahoma;
  font-size: 25px;
  opacity: 0;
`

export const SlideDown = styled(CommonTextStyles)`
  top: -40px;
  left: 5px;
  color: ${BROWN};
  font-weight: bold;
  margin-left: 10px;
  animation: ${slideDownAnimation} ease infinite forwards 3s;
`

export const SlideUp = styled(CommonTextStyles)`
  top: 40px;
  left: 10px;
  color: ${PRIMARY};
  font-weight: bold;
  animation: ${slideUpAnimation} ease infinite forwards 3s;
`
export const SlideWrapper = styled.div`
  display: flex;
`
