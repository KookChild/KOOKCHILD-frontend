import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AiFillDollarCircle } from 'react-icons/ai'
import Swal from 'sweetalert2'
import {
  AreaContainer,
  DeleteMissionButton,
  ChildInfoContainer,
  ChildImage,
  ChildName,
  WhiteContainer,
  EditButton,
  SuccessButton,
  CompleteButton,
  ButtonsContainer,
  MissionReward,
  WaitingReward,
  AreaFooterContainer,
  CenterContainer
} from './style'

import { TopContainer, TopNavigationBar, MissionInfo } from '@components';
import {
  fetchMissionDetail,
  completeMission,
  updateMission,
  deleteMission,
  confirmMissionSuccess,
} from '@apis';
export const MissionDetailPage = () => {
  const { missionId } = useParams()
  const [missionData, setMissionData] = useState(null)
  const [isEditable, setIsEditable] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isChild, setIsChild] = useState(false)
  const [updatedMission, setUpdatedMission] = useState({})
  const [missionTitle, setMissionTitle] = useState(null)

  const navigate = useNavigate()
  const { index } = useParams();
  const indexAsNumber = parseInt(index, 10);

  useEffect(() => {
    const fetchMissionData = async () => {
      try {
        const fetchedData = await fetchMissionDetail(missionId)
        setMissionData(fetchedData)
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

  const getButtonText = () => {
    if (isSuccess && isChild) {
      return '미션 성공';
    } else if (!isSuccess && isChild) {
      return '승인 요청 중...';
    } else {
      return '미션 완료';
    }
  };

  const formatReward = (reward) => {
    const parsedReward = parseInt(reward, 10);
    if (isNaN(parsedReward)) return reward;
    return new Intl.NumberFormat('ko-KR').format(parsedReward);
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
        title: '<span style="font-size: 20px;">미션 내용이 수정되었습니다!</span>',
        icon: 'success',
        confirmButtonText: '확인',
        customClass: {
          container: 'custom-swal-container',
        },
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
        customClass: {
          container: 'custom-swal-container',
        },
      })
    }
  }

  const handleSuccessClick = () => {
    Swal.fire({
      title: '<span style="font-size: 20px;">미션 승인 및 미션 리워드를<br/>송금하시겠습니까?</span>',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#D9D9D9',
      confirmButtonText: '예',
      cancelButtonText: '아니오',
      reverseButtons: true,
      customClass: {
        container: 'custom-swal-container',
      },
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
                    customClass: {
                      // 성공 알림 모달에 사용할 클래스 추가
                      container: 'custom-swal-container',
                    },
                  });
                  break;
                case 400:
                  Swal.fire({
                    title: '요청 오류!',
                    text: '이미 승인한 요청입니다.',
                    icon: 'error',
                    confirmButtonText: '확인',
                    customClass: {
                      container: 'custom-swal-container',
                    },
                  });
                  break;
                case 422:
                  Swal.fire({
                    title: '잔액 부족!',
                    text: '잔액이 부족합니다.',
                    icon: 'error',
                    confirmButtonText: '확인',
                    customClass: {
                      container: 'custom-swal-container',
                    },
                  });
                  break;
                default:
                  console.error('Error confirming mission success:', response.data);
                  Swal.fire({
                    title: '오류!',
                    text: '미션 승인 중 오류가 발생했습니다.',
                    icon: 'error',
                    confirmButtonText: '확인',
                    customClass: {
                      container: 'custom-swal-container',
                    },
                  });
              }
            } else if (response.data.status == 200) {
              setIsSuccess(true)
              Swal.fire({
                title: '<span style="font-size: 20px;">미션 리워드가 성공적으로<br/>송금되었습니다.</span>',
                icon: 'success',
                confirmButtonText: '확인',
                customClass: {
                  container: 'custom-swal-container',
                },
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
              customClass: {
                container: 'custom-swal-container',
              },
            })
          })
      }
    });
  }

  const handleDeleteClick = () => {
    Swal.fire({
      title: '<span style="font-size: 20px;">미션을 삭제하시겠습니까?</span>',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#D9D9D9',
      confirmButtonText: '예',
      cancelButtonText: '아니오',
      reverseButtons: true,
      customClass: {
        container: 'custom-swal-container',
      },
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          await deleteMission(missionId)
          Swal.fire({
            title: '<span style="font-size: 20px;">미션이 성공적으로 삭제되었습니다.</span>',
            icon: 'success',
            customClass: {
              container: 'custom-swal-container',
            },
          })
          navigate('/mission/parentview')
        } catch (error) {
          console.error('Error deleting mission:', error)
          Swal.fire({
            title: '오류!',
            text: '미션 삭제 중 오류가 발생했습니다.',
            icon: 'error',
            customClass: {
              container: 'custom-swal-container',
            },
          })
        }
      }
    })
  }

  const handleCompleteMissionClick = () => {
    Swal.fire({
      title: '<span style="font-size: 20px;">부모님께 승인 요청하시겠습니까?</span>',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#D9D9D9',
      confirmButtonText: '예',
      cancelButtonText: '아니오',
      reverseButtons: true,
      customClass: {
        container: 'custom-swal-container',
      },
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          await completeMission(missionId)

          setIsChild(true)
          Swal.fire({
            title: '<span style="font-size: 20px;">승인 요청되었습니다!</span>',
            icon: 'success',
            customClass: {
              container: 'custom-swal-container',
            },
          })
        } catch (error) {
          console.error('Error completing mission:', error)
          Swal.fire({
            title: '<span style="font-size: 20px;">미션 완료 요청 중 오류가 발생했습니다.</span>',
            icon: 'error',
            customClass: {
              container: 'custom-swal-container',
            },
          })
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
    image,
  } = missionData

  return (
    <TopContainer>
      <TopNavigationBar title={`${title}`} />

      {parent && !isEditable && (
        <AreaContainer>
          <ButtonsContainer>
            <EditButton onClick={handleEditClick}>미션 수정</EditButton>
            <DeleteMissionButton onClick={handleDeleteClick}>미션 삭제</DeleteMissionButton>
          </ButtonsContainer>
        </AreaContainer>
      )}
      {!parent && !isEditable &&(
        <AreaContainer>
        <CenterContainer></CenterContainer>
        </AreaContainer>
      )}
      <WhiteContainer>
          {parent ? (
            <AreaContainer>
              <ChildInfoContainer>
                <div>
                  <ChildImage src={require(`../../../img/아이${indexAsNumber + 1}.jpg`)} alt={childName} />
                  <ChildName>{childName}</ChildName>
                </div>
              </ChildInfoContainer>
            </AreaContainer>
          ) : (
            <AreaContainer>
            </AreaContainer>
          )}

          <MissionInfo
            title={missionTitle}
            content={content}
            reward={reward}
            endDate={endDate}
            isSuccess={isSuccess}
            isParent={parent}
            completedTime={completeDate}
            image={image}
            readOnly={!isEditable}
            onUpdate={updatedValues =>
              setUpdatedMission(prevState => ({
                ...prevState,
                ...updatedValues,
              }))
            }
          />
      </WhiteContainer>
      <AreaFooterContainer>
        {!isEditable &&
          <MissionReward>
            <AiFillDollarCircle className='moneyIcon' /> &nbsp; <span className='rewardName'>미션 보상금 &nbsp;</span> <span className='reward'>{formatReward(reward)}원</span>
          </MissionReward>}
        {!isSuccess && isChild && !parent && <WaitingReward>입금대기중입니다</WaitingReward>}
        {parent ? (
          isEditable ? (
            <SuccessButton onClick={handleCompleteEditClick}>수정완료</SuccessButton>
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
          <CompleteButton
            onClick={handleCompleteMissionClick}
            disabled={isChild}
            isChild={isChild}
            success={isSuccess}
          >
            {getButtonText()}
          </CompleteButton>
        )}
      </AreaFooterContainer>
    </TopContainer>
  )
}