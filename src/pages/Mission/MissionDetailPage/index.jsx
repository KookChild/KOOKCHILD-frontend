import React from 'react';
import Swal from 'sweetalert2';
import { BodyContainer, AreaContainer, DeleteMissionButton, ChildInfoContainer, ChildImage, ChildName, MissionDescription, EditButton, SuccessButton, CompleteButton, ButtonsContainer, StyledTitle } from './style';
import { MissionInfo } from '@components';

export const MissionDetailPage = () => {
    const [missionData] = React.useState({
        isParent: true,
        missionSuccess: false,
        childRequest: true,
        title: "Sample Title",
        content: "Sample Content",
        amount: "Sample Amount",
        dueDate: "2023-09-07",
        childImage: "abc",
        childName: "김국민",
        completedTime: "2023-09-06 10:00:00",
    });
    const { isParent, missionSuccess, childRequest, title, content, amount, dueDate, childImage, childName, completedTime } = missionData;
    const [isApprovalRequested, setIsApprovalRequested] = React.useState(childRequest);
    const [isEditable, setIsEditable] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(missionSuccess);


    const handleEditClick = () => {
        setIsEditable(true);
    };

    const handleCompleteEditClick = () => {
        // 서버로 수정된 내용을 보내는 코드를 여기에 추가할 수 있습니다.
        // 예: axios.put(...) 등

        Swal.fire({
            title: '성공!',
            text: '미션이 성공적으로 수정되었습니다.',
            icon: 'success',
            confirmButtonText: '확인'
        }).then(() => {
            setIsEditable(false);
        });
    };


    const handleSuccessClick = () => {
        Swal.fire({
            title: '성공!',
            text: '성공버튼 완료',
            icon: 'success',
            confirmButtonText: '확인'
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
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    '삭제됨!',
                    '미션이 성공적으로 삭제되었습니다.',
                    'success'
                )
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
        }).then((result) => {
            if (result.isConfirmed) {
                // 서버에 승인 요청을 보내는 코드를 여기에 추가할 수 있습니다.
                // 예: axios.post(...) 등

                setIsSuccess(true);  // isSuccess를 true로 설정

                Swal.fire(
                    '요청됨!',
                    '승인 요청이 성공적으로 전송되었습니다.',
                    'success'
                )
            }
        });
    };



    return (
        <BodyContainer>
            <AreaContainer>
                {isParent && <DeleteMissionButton onClick={handleDeleteClick}>미션 삭제</DeleteMissionButton>}
            </AreaContainer>

            {isParent ? (
                <AreaContainer>
                    <ChildInfoContainer>
                        <div>
                            <ChildImage src={childImage} alt={childName} />
                            <ChildName>{childName}</ChildName>
                        </div>
                        <MissionDescription>님의 현재 미션입니다</MissionDescription>
                    </ChildInfoContainer>
                </AreaContainer>
            ) : (
            <AreaContainer>
                {!isParent && (  // isParent가 false일 때만 렌더링됩니다.
                    <StyledTitle>
                        {isSuccess ? "완료한 미션입니다." : "현재 진행 중인 미션입니다."}
                    </StyledTitle>
                )}
            </AreaContainer>


            )}

            <AreaContainer>
                <MissionInfo title={title} content={content} amount={amount} dueDate={dueDate} isSuccess={isSuccess} isParent={isParent} completedTime={completedTime} readOnly={!isEditable} />
            </AreaContainer>

            <AreaContainer>
                {isParent ? (
                    <ButtonsContainer>
                        {isEditable ? (
                            <SuccessButton onClick={handleCompleteEditClick}>수정완료</SuccessButton>
                        ) : (
                            <>
                                <EditButton onClick={handleEditClick}>미션 수정</EditButton>
                                <SuccessButton onClick={handleSuccessClick} disabled={!isApprovalRequested}>미션 성공</SuccessButton>
                            </>
                        )}
                    </ButtonsContainer>
                ) : !isSuccess && <CompleteButton onClick={handleCompleteMissionClick}>미션 완료</CompleteButton>}
            </AreaContainer>
        </BodyContainer>
    );
};