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
export const ChallengeChildDetailPage = () => {
  const params = useParams()
  // const AtomTitle = '26일 챌린지'
  // const AtomContent =
  //   ' 26일 동안 매일 천원씩 저금하면, 26일 뒤에 1500원의 이자가 지급돼!'
  // const [title, setTitle] = useState(AtomTitle)
  // const [content, setContent] = useState(AtomContent)

  const [challenge, setChallenge] = useState()
  const [challengeType, setChallengeType] = useState()

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
      // reverseButtons: true, // 버튼 순서 거꾸로
    }).then(async result => {
      // 만약 Promise리턴을 받으면,
      if (result.isConfirmed) {
        // 만약 모달창에서 confirm 버튼을 눌렀다면
        if (challengeType == 0) {
          await childConfirmAPI(params.id)
            .then(
              Swal.fire(
                '참여신청 완료',
                '부모님의 승인요청을 기다려주세요',
                'success',
              ),
            )
            .then(navigate('/child/challenge'))
        } else {
          await childConfirmAPI(params.id)
            .then(
              Swal.fire('참여신청 완료', '챌린지를 진행해주세요', 'success'),
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
        <TopNavigationBar title={'detail'} />
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
