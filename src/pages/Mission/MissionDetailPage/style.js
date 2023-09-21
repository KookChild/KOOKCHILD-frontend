import styled from 'styled-components';
import { PRIMARY, GRAY } from '@utility/COLORS'

export const AreaContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    padding: 7px 10px;
    color: white;
    border: none;
    cursor: pointer;
    background-color: tomato;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin-left: 10px;
`;

export const ChildInfoContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 30px;
    text-align: center;
`;

export const ChildImage = styled.img`
    width: 130px;
    height: 130px;
    object-fit: cover;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 30%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const ChildName = styled.p`
    height: 14px;
    color: #000;
    font-family: 'kbFontBold';
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    margin-bottom: 5px;
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

export const EditButton = styled.button`
    padding: 7px 10px;
    background-color: #767676;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: rgba(118, 118, 118, 0.8);
    }
`;

export const SuccessButton = styled.button`
    width: 350px;
    height: 50px;
    background: ${PRIMARY};
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

export const CompleteButton = styled.button`
    margin-top:5px;
    width: 350px;
    height: 50px;
    background: ${({ isChild, success }) => {
        if (success && isChild) {
            return '#98C37F';
        } else if (isChild) {
            return '#FFBC00';
        } else {
            return '#4D6DCC';
        }
    }};
    border-radius: 6px;
    border: none;
    color: black;
    font-size: 18px;
    cursor: ${({ isChild }) => (isChild ? "default" : "pointer")};
    opacity: ${({ isChild, success }) => {
        if (success && isChild) {
            return 1;
        } else if (isChild) {
            return 0.7;
        } else {
            return 1;
        }
    }};
    pointer-events: ${({ isChild }) => (isChild ? "none" : "auto")};
    outline: none;
    transition: 0.3s;
    &:hover {
        background: ${({ isChild, success }) => {
        if (success && isChild) {
            return '#98C37F';
        } else if (isChild) {
            return '#FFBC00';
        } else {
            return '#687FDD';
        }
    }};
    }
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;


export const MissionReward = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    .reward{
        color: ${PRIMARY};
        font-size: 25px;
        font-family: sdMe;
    }
    .moneyIcon{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        box-shadow: inset 0px 1px 3px #00000029;
        border-radius: 15px;
        color: white;
        opacity: 1;
        color: ${PRIMARY};
    }

`

export const WaitingReward = styled.div`
margin-bottom: 5px;
color; #84888B;
`

export const AreaFooterContainer = styled.div`
position: absolute;
bottom: 0;
    padding-bottom : 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const WhiteContainer = styled.div`
    background: white;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin-top: 20px;
    padding-top: 30px;
    padding-bottom: 46px;
    max-height: 440px;
    overflow-y: auto;
`
export const CenterContainer = styled.div`
    height: 30px;
`