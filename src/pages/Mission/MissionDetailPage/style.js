import styled from 'styled-components';

export const Header = styled.div`
  padding: 10px;
  text-align: center;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  cursor: pointer;
`

export const HeaderImage = styled.img`
  width: 20px; /* 이미지 너비 조정 */
  height: 20px; /* 이미지 높이 조정 */
  margin-right: 30px; /* 이미지와 title 간의 간격 설정 */
`

export const HeaderTitle = styled.h1`
  font-size: 18px; /* title의 글꼴 크기 조정 */
  font-weight: bold; /* title 텍스트 굵게 설정 */
  margin: 0; /* title의 margin 제거 */
`


export const AreaContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
    margin-top: 15px;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-right: 20px;
    margin-top: 15px;
`;


export const DeleteMissionButton = styled.button`
    width: 67px;
    height: 22px;
    color: white;
    border: none;
    cursor: pointer;
    background-color: tomato;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;


export const StyledTitle = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 40px;
`;

export const ChildInfoContainer = styled.div`
    width: 342px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 30px;
`;

export const ChildImage = styled.img`
    width: 70px;
    height: 78px;
    margin-right: 10px;
`;

export const ChildName = styled.p`
    width: 62px;
    height: 14px;
    color: #000;
    font-family: Inter;
    font-size: 15px;
    font-weight: 400;
    margin: 0;
    margin-bottom: 5px;
    text-align: center;
`;

export const MissionDescription = styled.p`
    width: 176px;
    height: 20px;
    color: #000;
    font-size: 18px;
    font-weight: 400;
    margin: 0;
    margin-left: 30px;
    align-self: flex-end;
`;

// style.js
export const EditButton = styled.button`
    width: 102px;
    height: 37px;
    background-color: #767676;
    border: none;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: rgba(118, 118, 118, 0.8);
    }
`;

export const SuccessButton = styled.button`
    width: 102px;
    height: 37px;
    background-color: #98C37F;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: rgba(152, 195, 127, 0.8);
    }
    &:disabled {
        cursor: not-allowed;
        background-color: #98C37F;

        &:hover {
            background-color: #98C37F;
        }
    }
`;
export const CompleteButton = styled.button`
    width: 102px;
    height: 37px;
    background-color: #767676;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: #565656;
    }
    &:disabled {
        cursor: not-allowed;
        background-color: #767676;

        &:hover {
            background-color: #767676;
`;

export const LogoutButton = styled.button`
    width: 67px;
    height: 22px;
    color: #f0f0f0;
    border: none;
    cursor: pointer;
    background-color: #f0f0f0;
`