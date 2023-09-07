import styled from 'styled-components';

export const BodyContainer = styled.div`
    width: 360px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;   // 항목들을 왼쪽에 정렬
    padding: 10px 20px;             // 약간의 패딩을 추가하여 드롭박스와 목록 간에 간격을 줍니다.
    overflow-y: auto;          // 스크롤을 가능하게 합니다.

    // 화면 중앙 배치 스타일을 유지
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: #f5f5f5;
`;

export const Dropdown = styled.select`
    width: 100px;  // 너비 설정
    height: 40px;  // 높이 설정
    font-size: 16px;  // 폰트 크기 설정
    margin-top: 30px;  // 상단 여백
    margin-left: 10px;
    margin-bottom: 10px;  // 드롭박스 아래의 여백 추가
`;


export const MissionListContainer = styled.div`
    width: 100%;
    overflow-y: auto;
    max-height: calc(600px - 80px);  // 전체 바디 높이에서 드롭박스와 여백을 제외한 높이로 설정
`;