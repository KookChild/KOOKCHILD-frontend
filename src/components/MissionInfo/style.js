import styled from 'styled-components';
import { YELLOW, PRIMARY } from '@utility/COLORS'

export const MissionInfoContainer = styled.div`
    width: 342px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 25px;
    max-height: 550px;
    overflow-y: auto;
`;
export const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 16px;
`;

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


export const StyledTextArea = styled.textarea`
    font-family: Arial;
    width: calc(100% - 10px);
    padding: 8px 0;
    border: 1px solid #ccc;
    box-sizing: border-box;
    margin-top: 4px;
    height: 100px;
    resize: none;
    background: transparent;
    text-align: left;
    vertical-align: top;
    outline: none;

    &:focus {
        border: 2px solid ${YELLOW};
    }
`;


export const MissionDetail = styled.div`
margin-bottom:30px;
img {
      width: 86px;
      height: 86px;
  }

`
export const MissionHeader = styled.h3`
margin-top:10px;
margin-bottom:10px;
font-family: 'sdMe';
`

export const MissionBody = styled.div`
margin-bottom: 20px;
`