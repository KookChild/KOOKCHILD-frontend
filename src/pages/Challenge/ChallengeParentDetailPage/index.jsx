import { TopContainer, TermsAndConditions } from '@components'
import {
  DetailContainer,
  DetailTextWrapper,
  ParentRewardInputWrapper,
  ParentRewardWrapper,
  ParentRewardTextWrapper,
  UnitWrapper,
  ParentRewardImgWrapper,
  ChallengeTitle,
} from './style'
import { TopNavigationBar } from '@components'
export const ChallengeParentDetailPage = () => {
  return (
    <TopContainer style={{ backgroundColor: 'white' }}>
      <TopNavigationBar title={'챌린지 상세설명'} />
      <ChallengeTitle>26일 챌린지</ChallengeTitle>
      <DetailContainer>
        <DetailTextWrapper>
          <img src="/img/Dog.png" alt="dog" />
          26일 동안 저금을 해서 적금 미리 맛보기 기회를 제공
        </DetailTextWrapper>
      </DetailContainer>
      <DetailContainer>
        <DetailTextWrapper>
          부모가 얹어주는 금리로 높아지는 아이의 저축노력
        </DetailTextWrapper>
        <img src="/img/Bear.png" alt="bear" />
      </DetailContainer>
      <ParentRewardWrapper>
        <ParentRewardTextWrapper>부모 리워드 (더금리)</ParentRewardTextWrapper>
        <ParentRewardInputWrapper>
          <input
            type="number"
            name="reward"
            placeholder="금액을 입력해주세요"
            width={100}
            required={true}
          />
          <UnitWrapper>원</UnitWrapper>
        </ParentRewardInputWrapper>
        <ParentRewardImgWrapper>
          <img src="/img/Together.png" alt="together" />
        </ParentRewardImgWrapper>
      </ParentRewardWrapper>
      <TermsAndConditions />
    </TopContainer>
  )
}
