import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
    BodyContainer,
    AreaContainer,
    DeleteMissionButton,
    ChildInfoContainer,
    ChildImage,
    ChildName,
    MissionDescription,
    EditButton,
    SuccessButton,
    CompleteButton,
    ButtonsContainer,
    StyledTitle
} from './style';
import imgSrc from './cat2.png';
import { MissionInfo, BackHeader } from '@components';
import { fetchMissionDetail, completeMission, updateMission, deleteMission, confirmMissionSuccess } from '../../../apis/missions';


export const MissionDetailPage = () => {
    const { missionId } = useParams();
    const [missionData, setMissionData] = useState(null);
    const [isEditable, setIsEditable] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isChild, setIsChild] = useState(false);
    const [updatedMission, setUpdatedMission] = useState({});

    const navigate = useNavigate();


    useEffect(() => {
        const fetchMissionData = async () => {
            try {
                const fetchedData = await fetchMissionDetail(missionId);

                // 기존 미션 데이터 설정 코드
                setMissionData(fetchedData);

                // 추가된 코드: updatedMission 초기값 설정
                setUpdatedMission({
                    title: fetchedData.title,
                    content: fetchedData.content,
                    reward: fetchedData.reward,
                    endDate: fetchedData.endDate
                });

                setIsSuccess(fetchedData.parentConfirm);
                setIsChild(fetchedData.childConfirm);
            } catch (error) {
                console.error("Error fetching mission details:", error);
            }
        };

        fetchMissionData();
    }, [missionId]);



    const handleEditClick = () => {
        setIsEditable(true);
    };

    const handleCompleteEditClick = async () => {
        Swal.fire({
            title: '수정 중...',
            text: '미션을 수정하는 중입니다.',
            allowOutsideClick: false,
        });

        try {
            console.log(updatedMission);
            await updateMission(missionId, updatedMission.title, updatedMission.content, updatedMission.reward, updatedMission.endDate);

            Swal.fire({
                title: '성공!',
                text: '미션이 성공적으로 수정되었습니다.',
                icon: 'success',
                confirmButtonText: '확인'
            }).then(() => {
                setIsEditable(false);
            });
        } catch (error) {
            console.error("Error updating mission:", error);
            Swal.fire({
                title: '오류!',
                text: '미션 수정 중 오류가 발생했습니다.',
                icon: 'error',
                confirmButtonText: '확인'
            });
        }
    };

    const handleSuccessClick = () => {
        Swal.fire({
            title: '미션 승인 중...',
            text: '미션 성공을 확인하는 중입니다.',
            allowOutsideClick: false,
        });

        confirmMissionSuccess(missionId) // API 호출
            .then(() => {
                setIsSuccess(true);
                Swal.fire({
                    title: '성공!',
                    text: '미션이 성공적으로 승인되었습니다.',
                    icon: 'success',
                    confirmButtonText: '확인'
                });
            })
            .catch(error => {
                console.error("Error confirming mission success:", error);
                Swal.fire({
                    title: '오류!',
                    text: '미션 승인 중 오류가 발생했습니다.',
                    icon: 'error',
                    confirmButtonText: '확인'
                });
            });
    };


    const handleDeleteClick = () => {
        Swal.fire({
            title: '삭제하시겠습니까?',
            text: "이 작업은 되돌릴 수 없습니다!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '네, 삭제하겠습니다!',
            cancelButtonText: '취소'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteMission(missionId);  // API 호출
                    Swal.fire(
                        '삭제됨!',
                        '미션이 성공적으로 삭제되었습니다.',
                        'success'
                    );
                    navigate('/mission/parentview'); // 미션 삭제 후 미션 목록 페이지로 리다이렉션
                } catch (error) {
                    console.error("Error deleting mission:", error);
                    Swal.fire(
                        '오류!',
                        '미션 삭제 중 오류가 발생했습니다.',
                        'error'
                    );
                }
            }
        });
    };

    const handleCompleteMissionClick = () => {
        Swal.fire({
            title: '승인 요청',
            text: "승인 요청하시겠습니까?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '네, 요청하겠습니다!',
            cancelButtonText: '취소'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await completeMission(missionId);  // API 호출

                    setIsChild(true);  // isChild를 true로 설정
                    Swal.fire(
                        '요청됨!',
                        '승인 요청이 성공적으로 전송되었습니다.',
                        'success'
                    )
                } catch (error) {
                    console.error("Error completing mission:", error);
                    Swal.fire(
                        '오류!',
                        '미션 완료 요청 중 오류가 발생했습니다.',
                        'error'
                    )
                }
            }
        });
    };

    if (!missionData) return <div>Loading...</div>;

    const { parent, title, content, reward, endDate, image, childName, completeDate } = missionData;

    return (
        <BodyContainer>
            <BackHeader text="미션 상세 페이지" onBackClick={() => navigate(parent ? '/mission/parentview' : '/mission/childview')} />


            {parent && (
                <AreaContainer>
                    <ButtonsContainer>
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
                    {!parent && (
                        <StyledTitle>
                            {isSuccess && isChild ? "완료한 미션입니다." :
                                !isSuccess && isChild ? "승인 요청을 기다리는 중입니다." :
                                    "현재 진행 중인 미션입니다."}
                        </StyledTitle>
                    )}
                </AreaContainer>
            )}

            <AreaContainer>
                <MissionInfo
                    title={title}
                    content={content}
                    reward={reward}
                    endDate={endDate}
                    isSuccess={isSuccess}
                    isParent={parent}
                    completedTime={completeDate}
                    readOnly={!isEditable}
                    onUpdate={(updatedValues) => setUpdatedMission(prevState => ({ ...prevState, ...updatedValues }))}
                />
            </AreaContainer>

            <AreaContainer>
                {parent ? (
                    <ButtonsContainer>
                        {isEditable ? (
                            <SuccessButton onClick={handleCompleteEditClick}>
                                수정완료
                            </SuccessButton>
                        ) : (
                            <>
                                <EditButton onClick={handleEditClick}>
                                    미션 수정
                                </EditButton>
                                <SuccessButton
                                    onClick={handleSuccessClick}
                                    disabled={isSuccess || (isChild === false && isSuccess === false)}
                                >
                                    {isSuccess ? "성공 완료" : "미션 성공"}
                                </SuccessButton>

                            </>
                        )}
                    </ButtonsContainer>
                ) : !isSuccess && <CompleteButton onClick={handleCompleteMissionClick} disabled={isChild}>
                    {isChild ? "승인 요청 중..." : "미션 완료"}
                </CompleteButton>}
            </AreaContainer>
        </BodyContainer>
    );
}