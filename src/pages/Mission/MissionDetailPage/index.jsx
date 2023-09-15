import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { BsCheck } from 'react-icons/bs'
import { AiFillDollarCircle } from 'react-icons/ai'
import Swal from 'sweetalert2'
import {
  Header,
  HeaderContent,
  HeaderImage,
  HeaderTitle,
  AreaContainer,
  AreaFooterContainer,
  DeleteMissionButton,
  ChildInfoContainer,
  ChildImage,
  ChildName,
  MissionDescription,
  EditButton,
  SuccessButton,
  CompleteButton,
  ButtonsContainer,
  LogoutButton,
  MissionReward,
  WaitingReward
} from './style'
import imgSrc from './img/Luna.png'
import prefer from './img/prefer.png'
import { MissionInfo } from '@components'
import {
  fetchMissionDetail,
  completeMission,
  updateMission,
  deleteMission,
  confirmMissionSuccess,
} from '../../../apis/mission/index'
import { TopContainer } from '@components'

export const MissionDetailPage = () => {
  const { missionId } = useParams()
  const [missionData, setMissionData] = useState(null)
  const [isEditable, setIsEditable] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isChild, setIsChild] = useState(false)
  const [updatedMission, setUpdatedMission] = useState({})
  const [missionTitle, setMissionTitle] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchMissionData = async () => {
      try {
        const fetchedData = await fetchMissionDetail(missionId)

        // 기존 미션 데이터 설정 코드
        setMissionData(fetchedData)

        // 추가된 코드: updatedMission 초기값 설정
        setUpdatedMission({
          title: fetchedData.title,
          content: fetchedData.content,
          reward: fetchedData.reward,
          endDate: fetchedData.endDate,
        })
        setMissionTitle(fetchedData.title)

        setIsSuccess(fetchedData.parentConfirm)
        setIsChild(fetchedData.childConfirm)
      } catch (error) {
        console.error('Error fetching mission details:', error)
      }
    }

    fetchMissionData()
  }, [missionId])

  const handleLogoutClick = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('parent');
    navigate('/');
  };

  const handleEditClick = () => {
    setIsEditable(true)
  }

  const handleCompleteEditClick = async () => {
    try {
      console.log(updatedMission)
      await updateMission(
        missionId,
        updatedMission.title,
        updatedMission.content,
        updatedMission.reward,
        updatedMission.endDate,
      )

      setMissionTitle(updatedMission.title);
      setIsChild(true);

      Swal.fire({
        title: '성공!',
        text: '미션이 성공적으로 수정되었습니다.',
        icon: 'success',
        confirmButtonText: '확인',
      }).then(() => {
        setIsEditable(false)
      })
    } catch (error) {
      console.error('Error updating mission:', error)
      Swal.fire({
        title: '오류!',
        text: '미션 수정 중 오류가 발생했습니다.',
        icon: 'error',
        confirmButtonText: '확인',
      })
    }
  }

  const handleSuccessClick = () => {
    Swal.fire({
      title: '확인',
      text: '미션 승인 및 미션 리워드를 송금하시겠습니까?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '네',
      cancelButtonText: '아니오'
    }).then((result) => {
      if (result.isConfirmed) {
        confirmMissionSuccess(missionId)
          .then(response => {
            if (response.isError) {
              switch (response.data.status) {
                case 403:
                  Swal.fire({
                    title: '접근 거부!',
                    text: '권한이 없습니다.',
                    icon: 'warning',
                    confirmButtonText: '확인',
                  });
                  break;
                case 400:
                  Swal.fire({
                    title: '요청 오류!',
                    text: '이미 승인한 요청입니다.',
                    icon: 'error',
                    confirmButtonText: '확인',
                  });
                  break;
                case 422:
                  Swal.fire({
                    title: '잔액 부족!',
                    text: '잔액이 부족합니다.',
                    icon: 'error',
                    confirmButtonText: '확인',
                  });
                  break;
                default:
                  console.error('Error confirming mission success:', response.data);
                  Swal.fire({
                    title: '오류!',
                    text: '미션 승인 중 오류가 발생했습니다.',
                    icon: 'error',
                    confirmButtonText: '확인',
                  });
              }
            } else if (response.data.status == 200) {
              setIsSuccess(true)
              Swal.fire({
                title: '성공!',
                text: '미션 리워드가 성공적으로 송금되었습니다.',
                icon: 'success',
                confirmButtonText: '확인',
              });
            }
          })
          .catch(error => {
            console.error('Unexpected error confirming mission success:', error);
            Swal.fire({
              title: '오류!',
              text: '미션 승인 중 예기치 않은 오류가 발생했습니다.',
              icon: 'error',
              confirmButtonText: '확인',
            })
          })
      }
    });
  }

  const handleDeleteClick = () => {
    Swal.fire({
      title: '삭제하시겠습니까?',
      text: '이 작업은 되돌릴 수 없습니다!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '네, 삭제하겠습니다!',
      cancelButtonText: '취소',
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          await deleteMission(missionId) // API 호출
          Swal.fire('삭제됨!', '미션이 성공적으로 삭제되었습니다.', 'success')
          navigate('/mission/parentview') // 미션 삭제 후 미션 목록 페이지로 리다이렉션
        } catch (error) {
          console.error('Error deleting mission:', error)
          Swal.fire('오류!', '미션 삭제 중 오류가 발생했습니다.', 'error')
        }
      }
    })
  }

  const handleCompleteMissionClick = () => {
    Swal.fire({
      title: '승인 요청',
      text: '승인 요청하시겠습니까?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '네, 요청하겠습니다!',
      cancelButtonText: '취소',
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          await completeMission(missionId) // API 호출

          setIsChild(true) // isChild를 true로 설정
          Swal.fire(
            '요청됨!',
            '승인 요청이 성공적으로 전송되었습니다.',
            'success',
          )
        } catch (error) {
          console.error('Error completing mission:', error)
          Swal.fire('오류!', '미션 완료 요청 중 오류가 발생했습니다.', 'error')
        }
      }
    })
  }

  if (!missionData) return <div>Loading...</div>

  const {
    parent,
    title,
    content,
    reward,
    endDate,
    childName,
    completeDate,
  } = missionData

  return (
    <TopContainer>
      <Header>
        <HeaderContent onClick={() => navigate(-1)} parentConfirm={isSuccess} childConfirm={isChild}>
          <HeaderImage src={prefer} />
          <HeaderTitle>{missionTitle}</HeaderTitle>
          <BsCheck className='checkIcon'/>
        </HeaderContent>
      </Header>

      {parent && !isEditable && (
        <AreaContainer>
          <ButtonsContainer>
            <EditButton onClick={handleEditClick}>미션 수정</EditButton>
            <DeleteMissionButton onClick={handleDeleteClick}>
              미션 삭제
            </DeleteMissionButton>
          </ButtonsContainer>
        </AreaContainer>
      )}

      {parent ? (
        <AreaContainer>
          <ChildInfoContainer>
            <div>
              <ChildImage src={imgSrc} alt={childName} />
              <ChildName>{childName}</ChildName>
            </div>
            <MissionDescription>님의 현재 미션입니다</MissionDescription>
          </ChildInfoContainer>
        </AreaContainer>
      ) : (
        <AreaContainer>
        </AreaContainer>
      )}

      <AreaContainer>
        <MissionInfo
          title={missionTitle}
          content={content}
          reward={reward}
          endDate={endDate}
          isSuccess={isSuccess}
          isParent={parent}
          completedTime={completeDate}
          readOnly={!isEditable}
          onUpdate={updatedValues =>
            setUpdatedMission(prevState => ({
              ...prevState,
              ...updatedValues,
            }))
          }
        />
      </AreaContainer>
      <AreaFooterContainer>
      { !isEditable && 
        <MissionReward>
          <AiFillDollarCircle className='moneyIcon' /> &nbsp; <span className='rewardName'>미션 보상금 &nbsp;</span> <span className='reward'>{reward}원</span>
        </MissionReward>}

        {!isSuccess && isChild && !parent && <WaitingReward>입금대기중입니다</WaitingReward>}

        {parent ? (
          isEditable ? (
            <SuccessButton onClick={handleCompleteEditClick}>
              수정완료
            </SuccessButton>
          ) : (
            <SuccessButton
              onClick={handleSuccessClick}
              disabled={
                isSuccess || (isChild === false && isSuccess === false)
              }
            >
              {isSuccess ? '성공 완료' : '미션 성공'}
            </SuccessButton>
          )
        ) : (
          !isSuccess && (
            <CompleteButton
              onClick={handleCompleteMissionClick}
              disabled={isChild}
              isChild={isChild}
            >
              {isChild ? '승인 요청 중...' : '미션 완료'}
            </CompleteButton>
          )
        )}
      </AreaFooterContainer>
      <LogoutButton onClick={handleLogoutClick}>로그아웃</LogoutButton>
    </TopContainer>
  )
}
