import { TopContainer, TermsAndConditions } from '@components'
import Swal from 'sweetalert2'
import {
  DetailContainer,
  DetailTextWrapper,
  ParentRewardInputWrapper,
  ParentRewardWrapper,
  ParentRewardTextWrapper,
  UnitWrapper,
  ParentRewardImgWrapper,
  ChallengeTitle,
  ChallengeConfirmButton,
} from './style'
import { selectedChild } from '../../../recoil'
import { TopNavigationBar } from '@components'
import { PRIMARY } from '@utility/COLORS'
import { useState, useEffect } from 'react'
import {
  loadChallengeDetailAPI,
  parentConfirmAPI,
  checkChallengeIsProceedingAPI,
} from '@apis'
import { useNavigate, useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
export const ChallengeParentDetailPage = () => {
  const selectedChildId = useRecoilValue(selectedChild)
  const navigate = useNavigate()
  const params = useParams()
  const [parentReward, setParentReward] = useState(0)
  const [challenge, setChallenge] = useState()
  const [challengeType, setChallengeType] = useState()
  const handleChange = event => {
    setParentReward(event.target.value)
  }

  const confirm = async () => {
    Swal.fire({
      title: '추천을 하시겠습니까?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: { PRIMARY },
      cancelButtonColor: '#d33',
      confirmButtonText: '승인',
      cancelButtonText: '취소',
    }).then(async result => {
      // 만약 Promise리턴을 받으면,
      if (result.isConfirmed) {
        // 만약 모달창에서 confirm 버튼을 눌렀다면
        if (challengeType == 0) {
          await parentConfirmAPI(params.id, selectedChildId, parentReward)
            .then(
              Swal.fire(
                '챌린지 추천 완료',
                '아이의 승인요청을 기다려주세요',
                'success',
              ),
            )
            .then(navigate('/'))
        } else {
          await parentConfirmAPI(params.id, selectedChildId, parentReward)
            .then(Swal.fire('참여신청 완료', '미션을 진행해주세요', 'success'))
            .then(navigate('/'))
        }
      }
    })
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const challengeDetailData = await loadChallengeDetailAPI(params.id)
        setChallenge(challengeDetailData)
        console.log(challengeDetailData)
        const challengeTypeData = await checkChallengeIsProceedingAPI(params.id)
        setChallengeType(challengeTypeData)
      } catch (error) {
        console.error('Error fetching challenge detail:', error)
      }
    }

    fetchData()
  }, [params.id])
  return (
    challenge && (
      <TopContainer style={{ backgroundColor: 'white' }}>
        <TopNavigationBar title={'챌린지 상세설명'} />
        <ChallengeTitle>26일 챌린지</ChallengeTitle>
        <DetailContainer>
          <DetailTextWrapper>
            {/* 이미지 크기 줄이기 */}
            <img src="/img/Dog.png" alt="dog" />
            {challenge.parentContent}
          </DetailTextWrapper>
        </DetailContainer>
        <DetailContainer>
          <DetailTextWrapper>
            부모가 얹어주는 높은 금리로 아이의 저축노력을 자극해요
          </DetailTextWrapper>
          <img src="/img/Bear.png" alt="bear" />
        </DetailContainer>
        <ParentRewardWrapper>
          <ParentRewardTextWrapper>
            부모 리워드 (더금리)
          </ParentRewardTextWrapper>
          <ParentRewardInputWrapper>
            <input
              type="number"
              name="reward"
              placeholder="금액을 입력해주세요"
              width={100}
              style={{
                border: 'none',
                borderBottom: '1px solid #000',
                fontSize: '25px',
                textAlign: 'center',
              }}
              required
              onChange={handleChange}
            />
            {/* input box 숫자크기 키워주고, 보더 아래만 남기게 */}
            <UnitWrapper>원</UnitWrapper>
          </ParentRewardInputWrapper>
          <ParentRewardImgWrapper>
            <img src="/img/Together.png" alt="together" />
          </ParentRewardImgWrapper>
        </ParentRewardWrapper>
        <TermsAndConditions />
        {challengeType === 0 && (
          <ChallengeConfirmButton onClick={confirm}>
            추천하기
          </ChallengeConfirmButton>
        )}

        {challengeType === 1 && (
          <ChallengeConfirmButton onClick={confirm}>
            승인하기
          </ChallengeConfirmButton>
        )}
      </TopContainer>
    )
  )
}
