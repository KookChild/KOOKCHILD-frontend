import styled from 'styled-components';

export const MissionInfoContainer = styled.div`
    width: 342px;
    height: 337px;
    display: flex;
    flex-direction: column;
    align-items: flex-start; // 왼쪽 정렬
    justify-content: center; // 세로 가운데 정렬
    padding: 0 15px; // 양쪽 여백 설정
`;
export const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start; // 텍스트를 왼쪽에 위치시킵니다.
    width: 100%;
    margin-bottom: 16px; // 아래 간격을 늘려줍니다.
`;

export const StyledInput = styled.input`
    width: calc(100% - 10px);
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 4px;  // 간격을 조금 늘려줍니다.
    height: ${({ isContent }) => (isContent ? "100px" : "auto")};
`;
