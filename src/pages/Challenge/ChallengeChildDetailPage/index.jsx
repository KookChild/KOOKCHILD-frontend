import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import {
  ChallengeTitle,
  ChallengeContent,
  ChallengeConfirmButton,
  ChallengeImg,
  ChallengeImgWrapper,
  ChallengeContentImgContainer,
} from './style'
import { useNavigate, useParams } from 'react-router-dom'
import { TopNavigationBar } from '@components'
import {
  loadChallengeDetailAPI,
  childConfirmAPI,
  checkChallengeIsProceedingAPI,
} from '@apis'
import { PRIMARY } from '@utility/COLORS'
import { TopContainer } from '@components'
import { 
  Button, 
  SendButtonContainer, 
  commonSwalOptions
 } from './style';

export const ChallengeChildDetailPage = () => {
  const params = useParams()
  const [challenge, setChallenge] = useState()
  const [challengeType, setChallengeType] = useState(null)

  const navigate = useNavigate()
  const confirm = async () => {
    Swal.fire({
      title: '정말로 참여하시겠습니까?',
      icon: 'warning',
      showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
      confirmButtonColor: { PRIMARY }, // confrim 버튼 색깔 지정
      cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
      confirmButtonText: '승인', // confirm 버튼 텍스트 지정
      cancelButtonText: '취소', // cancel 버튼 텍스트 지정
      customClass: {
        // 성공 알림 모달에 사용할 클래스 추가
        container: 'custom-swal-container',
      },
      ...commonSwalOptions,
      // reverseButtons: true, // 버튼 순서 거꾸로
    }).then(async result => {
      // 만약 Promise리턴을 받으면,
      if (result.isConfirmed) {
        // 만약 모달창에서 confirm 버튼을 눌렀다면
        if (challengeType == 0) {
          await childConfirmAPI(params.id)
            .then(
              Swal.fire({
               title: '참여신청 완료',
               icon: 'success',
               text: '부모님의 승인요청을 기다려주세요',
               customClass: {
                // 성공 알림 모달에 사용할 클래스 추가
                container: 'custom-swal-container',
              },
              ...commonSwalOptions,
              }
              ),
            )
            .then(navigate('/child/challenge'))
        } else {
          await childConfirmAPI(params.id)
            .then(
              Swal.fire({
                title: '참여신청 완료',
                text: '챌린지를 진행해주세요',
                icon: 'success',
                customClass: {
                  // 성공 알림 모달에 사용할 클래스 추가
                  container: 'custom-swal-container',
                },
                ...commonSwalOptions,
              }),
            )
            .then(navigate('/child/challenge'))
        }
      }
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const challengeDetailData = await loadChallengeDetailAPI(params.id)
        setChallenge(challengeDetailData)
        const challengeTypeData = await checkChallengeIsProceedingAPI(
          null,
          params.id,
        )
        setChallengeType(challengeTypeData)
      } catch (error) {
        console.error('Error fetching challenge detail:', error)
      }
    }

    fetchData()
  }, [params.id])
  if (challengeType == null) return
  return (
    challenge && (
      <TopContainer style={{ backgroundColor: 'white' }}>
        <TopNavigationBar title={'챌린지 상세'} />
        <ChallengeTitle> {challenge.title}</ChallengeTitle>
        <ChallengeContentImgContainer>
          <ChallengeContent>{challenge.childContent}</ChallengeContent>
          <ChallengeImgWrapper>
            <ChallengeImg src="/img/Bear.png" />
          </ChallengeImgWrapper>
        </ChallengeContentImgContainer>
        {challengeType === 0 && (
          <ChallengeConfirmButton onClick={confirm}>
            참여하기
          </ChallengeConfirmButton>
        )}

        {challengeType === 2 && (
          <ChallengeConfirmButton onClick={confirm}>
            승인하기
          </ChallengeConfirmButton>
        )}
      </TopContainer>
    )
  )
}
