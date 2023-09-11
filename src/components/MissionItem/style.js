import styled from 'styled-components';

export const ItemContainer = styled.div`
    /* Layout Properties */
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 399px;
    left: 0px;
    width: 430px;
    height: 80px;
    /* UI Properties */
    opacity: 1;
    background: ${props => props.isEven ? '#FFFFFF' : '#F6F7F8'} 0% 0% no-repeat padding-box;
    cursor: pointer;  // 마우스 모양을 손가락 포인터로 변경

    /* 마우스를 올렸을 때의 배경색 변경 */
    &:hover {
        background: #E5E5E5;  /* 원하는 색상으로 변경하세요 */
    }
`;

export const LeftSection = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    .circle {
        width: 30px;
        height: 30px;
        background: ${props => props.parentConfirm ? '#FFBC00' : '#84888B'} 0% 0% no-repeat padding-box;
        border-radius: 50%;
        margin-left: 10px;
        margin-right: 10px;
        box-shadow: inset 0px 1px 3px #00000029;
        border: 1px solid #84888B;
        border-radius: 15px;
        opacity: 1;
    }
`;


export const MiddleSection = styled.div`
    flex: 3;  // 너비를 다른 섹션보다 3배로 설정
    margin-left:10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h3, p {
        margin: 0;
    }
    .title{
        letter-spacing: 0px;
        color: #010812;
        opacity: 1;
    }
    .date{
        color: #84888B;
    }
`;

export const RightSection = styled.div`
    flex: 1;  // 너비를 다른 섹션보다 2배로 설정
    display: flex;
    align-items: flex-start;
    justify-content: flex-start; // 텍스트를 왼쪽 정렬
`;
