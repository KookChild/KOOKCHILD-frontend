import styled from 'styled-components';

export const BodyContainer = styled.div`
    width: 430px;
    height: 832px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 26px;
    overflow-y: auto;
    box-sizing: border-box;
    overflow-x: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f5f5f5;
`;

export const ChildListContainer = styled.div`
max-width: 100%;  // 추가
display: flex;
overflow-x: auto;
white-space: nowrap;
margin-bottom: 20px;

    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;

export const ChildItemContainer = styled.div`
    min-width: 86px;
    height: 136px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;

    img {
        width: 86px;
        height: 86px;
    }

    p {
        margin-top: 10px;
    }
    border-bottom: ${props => props.isSelected ? '2px solid #FFCC00' : 'none'};
    p {
        color: ${props => props.isSelected ? '#FFCC00' : '기본 색상'};
    }
`;

// ... 나머지 스타일들은 그대로 둡니다.


export const TabContainer = styled.div`
    display: flex;
    gap: 10px; // 탭 사이의 간격을 주기 위함
    margin-bottom: 10px; // 탭과 MissionListContainer 사이에 간격을 주기 위함
`;

export const Tab = styled.button`
    width: 78px;
    height: 30px;
    background: ${props => props.isSelected ? '#84888B' : '#FFFFFF'};
    box-shadow: inset 0px 1px 3px #00000029;
    border: 1px solid #84888B;
    border-radius: 15px;
    opacity: 1;
    color: ${props => props.isSelected ? 'white' : '#84888B'};
    cursor: pointer;
    outline: none;
    top: ${props => props.isSelected ? 'auto' : '278px'};
    left: ${props => props.isSelected ? 'auto' : '112px'};
`;


export const AddMissionButton = styled.button`
    width: 378px;
    height: 60px;
    background: #FFCC00;
    border-radius: 6px;
    border: none;
    color: black; // 텍스트 색상 설정 (버튼 내의 텍스트가 흰색으로 보이게 합니다)
    font-size: 18px; // 적절한 글꼴 크기를 설정
    cursor: pointer; // 버튼을 가리킬 때 손 모양으로 변경
    outline: none;   // 기본 외곽선 제거
    margin-top: 10px; // TabContainer와의 간격을 조정
    transition: 0.3s; // 부드러운 호버 효과를 위한 전환

    &:hover {
        background: #E5B900; // 호버 시의 배경색 변경
    }
`;

export const MissionListContainer = styled.div`
    width: calc(100% + 52px);  // 패딩 값이 26px이므로 2배한 값인 52px를 추가
    margin-left: -26px;       // 왼쪽 패딩을 무시
    display: flex;
    flex-direction: column;
`;


export const MissionItemContainer = styled.div`
  width: 430px;
  height: 80px;
  background-color: ${props => props.isEven ? '#FFFFFF' : '#F6F7F8'};
  opacity: 1;
`;