import styled from 'styled-components'
import { YELLOW, GRAY, BROWN } from '@utility/COLORS'

export const AreaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const ChildInfoContainer = styled.div`
  width: 342px;
  display: flex;
  align-items: center;
  justify-content: center; // 자녀 정보가 중앙에 나타나도록 수정
  flex-wrap: wrap;
`;

export const ChildContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px; // 양쪽에 간격을 줌으로써 중앙에 나타나도록 조정

  h2 {
    margin: 8px 0;
  }

  input[type="checkbox"] {
    margin-top: 4px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;


export const ChildImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 30%;
`;

export const MissionDetail = styled.div`
margin-bottom:30px;
img {
      width: 86px;
      height: 86px;
  }
`
export const StyledInput = styled.input`
    font-family: Arial;
    width: calc(100% - 10px);
    padding: 8px 0;
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 0;
    box-sizing: border-box;
    margin-top: 4px;
    background: transparent;
    outline: none;

    &:focus {
        border-bottom: 2px solid ${YELLOW};
    }
`;

export const AreaFooterContainer = styled.div`
    position: absolute;
    width: 350px;
    padding-bottom : 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 0px;
    margin-top: 50px;
    z-index: 1;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const EditButton = styled.button`
    width: 350px;
    height: 50px;
    background: ${YELLOW};
    border-radius: 6px;
    border: none;
    color: black;
    font-size: 18px;
    cursor: pointer;
    outline: none;
    transition: 0.3s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: gold;
    }
    &:disabled {
        cursor: not-allowed;
        background-color: ${GRAY};
    }
`;

export const MissionInfoContainer = styled.div`
    width: 342px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 25px;
    max-height: 550px;
    overflow-y: auto;
`;

export const RecommendButton = styled.button`
    color: white;
    background: ${BROWN};
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    align-self: flex-end;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin-right: 20px;
`;
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8); /* 반투명 흰색 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; // 다른 요소 위에 오게 설정
`;

export const LoadingMessage = styled.div`
  background-color: white;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  font-size: 1.2em;
`;


export const ChildImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 30%;
  width:100%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  border: 2px solid transparent;

`
