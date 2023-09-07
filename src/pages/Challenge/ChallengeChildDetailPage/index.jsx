import { useState } from 'react'
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom'
import {
  ChallengeTitle,
  ChallengeContent,
  ChallengeConfirmButton,
  ChallengeContainer,
  ChallengeImg,
  ChallengeImgWrapper,
  ChallengeContentImgContainer,
} from './style'

export const ChallengeChildDetailPage = () => {
  const params = useParams()
  console.log(params.id)
  const AtomTitle = '26일 챌린지'
  const AtomContent =
    ' 26일 동안 매일 천원씩 저금하면, 26일 뒤에 1500원의 이자가 지급돼!'
  const [title, setTitle] = useState(AtomTitle)
  const [content, setContent] = useState(AtomContent)
  const confirm = () => {
    Swal.fire({
      title: '정말로 참여하시겠습니까?',
      icon: 'warning',
      showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
      confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
      cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
      confirmButtonText: '승인', // confirm 버튼 텍스트 지정
      cancelButtonText: '취소', // cancel 버튼 텍스트 지정
      // reverseButtons: true, // 버튼 순서 거꾸로
    }).then(result => {
      // 만약 Promise리턴을 받으면,
      if (result.isConfirmed) {
        // 만약 모달창에서 confirm 버튼을 눌렀다면

        Swal.fire(
          '참여신청 완료',
          '부모님의 승인요청을 기다려주세요',
          'success',
        )
      }
    })
  }

  return (
    <ChallengeContainer>
      <ChallengeTitle> {title}</ChallengeTitle>
      <ChallengeContentImgContainer>
        <ChallengeContent>{content}</ChallengeContent>
        <ChallengeImgWrapper>
          <ChallengeImg src="/img/Bear.png" />
        </ChallengeImgWrapper>
      </ChallengeContentImgContainer>
      <ChallengeConfirmButton onClick={confirm}>
        참여할래?
      </ChallengeConfirmButton>
    </ChallengeContainer>
  )
}
