import styled from 'styled-components';

export const BodyContainer = styled.div`
    width: 360px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;   // 중앙 정렬
    padding: 20px;  // 패딩 조절

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: #f5f5f5;
`;

export const AreaContainer = styled.div`
    width: 100%;  // 100%로 설정하면 BodyContainer의 padding으로 인해 좌우에 공백이 생깁니다.
    display: flex;
    flex-direction: column;
    align-items: center;  // 중앙 정렬
    margin-bottom: 20px;  // 하단 마진 설정

    &:last-child {
        margin-bottom: 0;  // 마지막 요소에는 마진 제거
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;


export const DeleteMissionButton = styled.button`
    width: 67px;
    height: 19px;
    color: black; // 글자 색상 흰색으로 설정
    position: absolute; // 삭제 버튼을 오른쪽 위에 위치시키기 위해 absolute 포지션 부여
    top: 10px;
    right: 20px;
    border: none;
    cursor: pointer; // 마우스 오버시 포인터 모양 변경
`;

export const StyledTitle = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 40px;  // 마진을 조절합니다.
`;

export const ChildInfoContainer = styled.div`
    width: 342px;
    display: flex;
    align-items: flex-start; // 왼쪽 정렬
    justify-content: center; // 세로 가운데 정렬
`;

export const ChildImage = styled.img`
    width: 62px;
    height: 68px;
    margin-right: 10px; // 이미지 오른쪽에 조금의 간격을 줌
`;

export const ChildName = styled.p`
    width: 62px;
    height: 14px;
    color: #000;
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    margin: 0; // p태그의 기본 마진 제거
    margin-bottom: 5px; // 이미지 바로 밑에 위치하도록 하단 마진 설정
    text-align: center;
`;

export const MissionDescription = styled.p`
    width: 176px;
    height: 20px;
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    margin: 0; // p태그의 기본 마진 제거
    margin-left: 30px;
    align-self: flex-end;
`;

// style.js
export const EditButton = styled.button`
    width: 102px;
    height: 37px;
    background-color: #767676;
    border: none;
    margin-right: 10px;  // 오른쪽에 10px 마진 추가
    cursor: pointer;

    &:hover {
        background-color: rgba(118, 118, 118, 0.8); // #767676 의 약간 불투명한 버전
    }
`;

export const SuccessButton = styled.button`
    width: 102px;
    height: 37px;
    background-color: #98C37F;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: rgba(152, 195, 127, 0.8); // #98C37F 의 약간 불투명한 버전
    }
    &:disabled {
        cursor: not-allowed;  // 마우스 커서를 not-allowed로 변경
        background-color: #98C37F; // hover 효과가 아닌 기본 색상으로 설정

        &:hover {
            background-color: #98C37F;  // disabled 상태에서는 hover 효과를 적용하지 않음
        }
    }
`;
export const CompleteButton = styled.button`
    width: 102px;
    height: 37px;
    background-color: #767676; // 기본 배경색을 설정합니다.
    color: white; // 글자색을 흰색으로 설정합니다.
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #565656; // hover 시 조금 더 어둡게 변경합니다.
    }

    position: absolute;  // 부모 컨테이너의 하단 중앙에 위치시키기 위한 스타일
    bottom: 20px;       // 바닥에서 20px 떨어지도록 설정
    left: 50%;          // 왼쪽에서 50% 떨어지도록 설정
    transform: translateX(-50%); // 왼쪽으로 50% 이동하여 가운데 정렬
`;
export const StyledButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;  // make it occupy the full width
`;