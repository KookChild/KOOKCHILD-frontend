import styled from 'styled-components';

export const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;  // 양쪽 패딩을 20px로 늘렸습니다.
    border: 1px solid #ccc;
    margin-top: 15px;
    height: 104px;
    border-radius: 15px;
    background-color: ${props => props.isConfirmed ? '#A8E6CF' : '#D1D1D1'}; 
    transition: background-color 0.3s;

    &:hover {
        background-color: ${props => props.isConfirmed ? '#8BD6B4' : '#B1B1B1'};
    }
`;

export const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 10px;  // 오른쪽 마진을 추가하여 간격을 줬습니다.
`;

export const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;  // 왼쪽 마진을 추가하여 간격을 줬습니다.
`;
