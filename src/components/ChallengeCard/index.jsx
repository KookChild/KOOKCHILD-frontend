import {
  ChallengeImg,
  ChallengeCardImgWrapper,
  ChallengeCardTextWrapper,
} from './style'
export const ChallengeCard = ({ imgSource, startDate, endDate }) => {
  return (
    <div>
      <ChallengeCardImgWrapper>
        <ChallengeImg src={imgSource || '/img/Challenge1.png'} />
      </ChallengeCardImgWrapper>
      <ChallengeCardTextWrapper>
        <span>{startDate}</span>
        <span>~</span>
        <span>{endDate}</span>
      </ChallengeCardTextWrapper>
    </div>
  )
}
