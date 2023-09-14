import { styled, keyframes } from 'styled-components'
import { PRIMARY } from '@utility/COLORS'
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const DetailContainer = styled.div`
  display: flex;
  animation: ${fadeIn} 1s ease 0s 1 normal forwards;
`
export const DetailTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ChallengeTitle = styled.div`
  font-size: 30px;
  padding: 15px;
  display: flex;
  justify-content: center;
  font-family: kbFontBold;
`
export const ParentRewardWrapper = styled.div`
  border: 3px solid ${PRIMARY};
  border-radius: 15px;
  height: 200px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`
export const ParentRewardTextWrapper = styled.div`
  text-align: center;
  padding: 20px;
`
export const ParentRewardInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 35px;
`
export const UnitWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-left: 10px;
`
export const ParentRewardImgWrapper = styled.div`
  display: flex;
  justify-content: end;
`
